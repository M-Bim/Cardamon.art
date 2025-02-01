import { DigitalProductPreview } from "../../types/global";

export const listProducts = async ({
  pageParam = 1,
  queryParams,
  countryCode,
  regionId,
}: {
  pageParam?: number;
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams;
  countryCode?: string;
  regionId?: string;
}): Promise<{
  response: { products: HttpTypes.StoreProduct[]; count: number };
  nextPage: number | null;
  queryParams?: HttpTypes.FindParams & HttpTypes.StoreProductParams;
}> => {
  // ...
  return sdk.client.fetch<{
    products: HttpTypes.StoreProduct[];
    count: number;
  }>(`/store/products`, {
    // ...
    query: {
      // ...
      fields:
        "*variants.calculated_price,+variants.inventory_quantity,+metadata,+tags,*variants.calculated_price,*variants.digital_product",
    },
  });
  // ...
};
export const getDigitalProductPreview = async function ({
  id,
}: {
  id: string;
}) {
  const headers = {
    ...(await getAuthHeaders()),
  };

  const next = {
    ...(await getCacheOptions("products")),
  };
  const { previews } = await sdk.client.fetch<{
    previews: DigitalProductPreview[];
  }>(`/store/digital-products/${id}/preview`, {
    headers,
    next,
    cache: "force-cache",
  });

  // for simplicity, return only the first preview url
  // instead you can show all the preview media to the customer
  return previews.length ? previews[0].url : "";
};
