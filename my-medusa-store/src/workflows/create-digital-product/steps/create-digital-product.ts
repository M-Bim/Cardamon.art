import { createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import DigitalProductModuleService from "../../../modules/digital-product/service";
import { DIGITAL_PRODUCT_MODULE } from "../../../modules/digital-product";

export type CreateDigitalProductStepInput = {
  name: string;
};

const createDigitalProductStep = createStep(
  "create-digital-product-step",
  async (data: CreateDigitalProductStepInput, { container }) => {
    const digitalProductModuleService: DigitalProductModuleService =
      container.resolve(DIGITAL_PRODUCT_MODULE);

    const digitalProduct =
      await digitalProductModuleService.createDigitalProducts(data);

    return new StepResponse(
      {
        digital_product: digitalProduct,
      },
      {
        digital_product: digitalProduct,
      },
    );
  },
  async (compensation, { container }) => {
    const digitalProductModuleService: DigitalProductModuleService =
      container.resolve(DIGITAL_PRODUCT_MODULE);

    if (compensation?.digital_product) {
      await digitalProductModuleService.deleteDigitalProducts(
        compensation.digital_product.id,
      );
    }
  },
);

export default createDigitalProductStep;
