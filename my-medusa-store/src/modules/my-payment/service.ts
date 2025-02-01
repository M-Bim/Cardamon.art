import { AbstractPaymentProvider } from "@medusajs/framework/utils";
import { Logger } from "@medusajs/framework/types";
import {
  PaymentProviderError,
  PaymentProviderSessionResponse,
  PaymentSessionStatus,
  CreatePaymentProviderSession,
  UpdatePaymentProviderSession,
  PaymentProviderContext,
  PaymentMethodResponse,
} from "@medusajs/framework/types";
import { MedusaError } from "@medusajs/utils";
import { BigNumber } from "bignumber.js";

interface ProviderWebhookPayload {
  data: Record<string, unknown>;
  rawData: string | Buffer;
  headers: Record<string, unknown>;
}

interface WebhookActionResult {
  action: "authorized" | "captured" | "not_supported" | "failed";
  data?: {
    session_id: string;
    amount: BigNumber;
  };
}

type Options = {
  apiKey: string;
};

type InjectedDependencies = {
  logger: Logger;
};

class MyPaymentProviderService extends AbstractPaymentProvider<Options> {
  protected logger_: Logger;
  protected options_: Options;
  protected client: any;

  constructor(container: InjectedDependencies, options: Options) {
    super(container, options);

    this.logger_ = container.logger;
    this.options_ = options;

    // TODO initialize your client
  }

  static identifier = "my-payment";

  static validateOptions(options: Record<any, any>) {
    if (!options.apiKey) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "API key is required in the provider's options.",
      );
    }
  }

  async authorizePayment(
    paymentSessionData: Record<string, unknown>,
    _context: Record<string, unknown>,
  ): Promise<
    | PaymentProviderError
    | {
        status: PaymentSessionStatus;
        data: PaymentProviderSessionResponse["data"];
      }
  > {
    const externalId = paymentSessionData.id;

    try {
      const paymentData = await this.client.authorizePayment(externalId);

      return {
        data: {
          ...paymentData,
          id: externalId,
        },
        status: "authorized",
      };
    } catch (e) {
      return {
        error: e,
        code: "unknown",
        detail: e,
      };
    }
  }

  async capturePayment(
    paymentData: Record<string, unknown>,
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
    const externalId = paymentData.id;

    try {
      const newData = await this.client.capturePayment(externalId);

      return {
        ...newData,
        id: externalId,
      };
    } catch (e) {
      return {
        error: e,
        code: "unknown",
        detail: e,
      };
    }
  }

  async cancelPayment(
    paymentData: Record<string, unknown>,
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
    const externalId = paymentData.id;

    try {
      const canceledPayment = await this.client.cancelPayment(externalId);
      return canceledPayment;
    } catch (e) {
      return {
        error: e,
        code: "unknown",
        detail: e,
      };
    }
  }

  async initiatePayment(
    context: CreatePaymentProviderSession,
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse> {
    const { amount, currency_code, context: customerDetails } = context;

    try {
      const response = await this.client.init(
        amount,
        currency_code,
        customerDetails,
      );

      return {
        ...response,
        data: {
          id: response.id,
        },
      };
    } catch (e) {
      return {
        error: e,
        code: "unknown",
        detail: e,
      };
    }
  }

  async deletePayment(
    paymentSessionData: Record<string, unknown>,
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
    const externalId = paymentSessionData.id;

    try {
      const result = await this.client.cancelPayment(externalId);
      return result;
    } catch (e) {
      return {
        error: e,
        code: "unknown",
        detail: e,
      };
    }
  }

  async getPaymentStatus(
    paymentSessionData: Record<string, unknown>,
  ): Promise<PaymentSessionStatus> {
    const externalId = paymentSessionData.id;

    try {
      const status = await this.client.getStatus(externalId);

      switch (status) {
        case "requires_capture":
          return "authorized";
        case "success":
          return "captured";
        case "canceled":
          return "canceled";
        default:
          return "pending";
      }
    } catch (e) {
      return "error";
    }
  }

  async refundPayment(
    paymentData: Record<string, unknown>,
    refundAmount: number,
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
    const externalId = paymentData.id;

    try {
      const newData = await this.client.refund(externalId, refundAmount);

      return {
        ...newData,
        id: externalId,
      };
    } catch (e) {
      return {
        error: e,
        code: "unknown",
        detail: e,
      };
    }
  }

  async retrievePayment(
    paymentSessionData: Record<string, unknown>,
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse["data"]> {
    const externalId = paymentSessionData.id;

    try {
      return await this.client.retrieve(externalId);
    } catch (e) {
      return {
        error: e,
        code: "unknown",
        detail: e,
      };
    }
  }

  async updatePayment(
    context: UpdatePaymentProviderSession,
  ): Promise<PaymentProviderError | PaymentProviderSessionResponse> {
    const { amount, currency_code, context: customerDetails, data } = context;
    const externalId = data.id;

    try {
      const response = await this.client.update(externalId, {
        amount,
        currency_code,
        customerDetails,
      });

      return {
        ...response,
        data: {
          id: response.id,
        },
      };
    } catch (e) {
      return {
        error: e,
        code: "unknown",
        detail: e,
      };
    }
  }

  async listPaymentMethods(
    context: PaymentProviderContext,
  ): Promise<PaymentMethodResponse> {
    const externalCustomerId = context.customer?.metadata?.stripe_id;

    try {
      const response = await this.client.listPaymentMethods({
        customer: externalCustomerId,
      });

      return response.map((method: { id: string }) => ({
        id: method.id,
        data: method,
      }));
    } catch (e) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        `Error retrieving payment methods: ${e.message}`,
      );
    }
  }

  async getWebhookActionAndData(
    data: ProviderWebhookPayload,
  ): Promise<WebhookActionResult> {
    const eventType = data.data.event_type as string;
    const metadata = data.data.metadata as Record<string, unknown>;
    const amount = data.data.amount as number;

    try {
      switch (eventType) {
        case "authorized_amount":
          return {
            action: "authorized",
            data: {
              session_id: metadata.session_id as string,
              amount: new BigNumber(amount),
            },
          };
        case "success":
          return {
            action: "captured",
            data: {
              session_id: metadata.session_id as string,
              amount: new BigNumber(amount),
            },
          };
        default:
          return {
            action: "not_supported",
          };
      }
    } catch (e) {
      return {
        action: "failed",
        data: {
          session_id: metadata.session_id as string,
          amount: new BigNumber(amount),
        },
      };
    }
  }
}

export default MyPaymentProviderService;
