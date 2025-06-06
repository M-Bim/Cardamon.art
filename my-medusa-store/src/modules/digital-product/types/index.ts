export enum MediaType {
  MAIN = "main",
  PREVIEW = "preview",
}
export enum OrderStatus {
  PENDING = "pending",
  SENT = "sent",
}

import { OrderDTO, InferTypeOf } from "@medusajs/framework/types";
import DigitalProductOrder from "../models/digital-product-order";

// ...

export type DigitalProductOrder = InferTypeOf<typeof DigitalProductOrder> & {
  order?: OrderDTO;
};
