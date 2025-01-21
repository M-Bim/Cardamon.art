import { AbstractFulfillmentProviderService } from "@medusajs/framework/utils";
import {
  CreateFulfillmentDTO,
  FulfillmentDTO,
  FulfillmentItemDTO,
  FulfillmentOption,
  FulfillmentProviderDTO,
} from "@medusajs/framework/types";

class DigitalProductFulfillmentService extends AbstractFulfillmentProviderService {
  static identifier = "digital";

  constructor() {
    super();
  }

  async getFulfillmentOptions(): Promise<FulfillmentOption[]> {
    return [
      {
        id: "digital-fulfillment",
      },
    ];
  }

  async validateFulfillmentData(
    _optionData: Record<string, unknown>,
    data: Record<string, unknown>,
    _context: Record<string, unknown>,
  ): Promise<any> {
    return data;
  }

  async validateOption(_data: Record<string, any>): Promise<boolean> {
    return true;
  }

  async createFulfillment(
    _data: Record<string, unknown>,
    _items: Partial<Omit<FulfillmentItemDTO, "fulfillment">>[],
    _order: Partial<FulfillmentProviderDTO> | undefined,
    _fulfillment: Partial<
      Omit<FulfillmentDTO, "provider_id" | "data" | "items">
    >,
  ): Promise<CreateFulfillmentDTO> {
    return {
      data: {},
      labels: [],
      location_id: "",
      provider_id: "digital",
      delivery_address: {},
      items: [],
    };
  }

  async cancelFulfillment(): Promise<any> {
    return {};
  }

  async createReturnFulfillment(): Promise<any> {
    return {};
  }
}

export default DigitalProductFulfillmentService;
