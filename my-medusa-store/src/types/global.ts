import {
  // other imports...
  StoreProductVariant,
} from "@medusajs/types";

// ...

export type DigitalProduct = {
  id: string;
  name: string;
  medias?: DigitalProductMedia[];
};

export type DigitalProductMedia = {
  id: string;
  fileId: string;
  type: "preview" | "main";
  mimeType: string;
  digitalProduct?: DigitalProduct[];
};

export type DigitalProductPreview = DigitalProductMedia & {
  url: string;
};

export type VariantWithDigitalProduct = StoreProductVariant & {
  digital_product?: DigitalProduct;
};
