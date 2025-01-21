// other imports...
import { Button } from "@mui/material"; // or your actual UI library
import { getDigitalProductPreview } from "@/services/digital-product";
import { VariantWithDigitalProduct } from "@/types/global";
import { useMemo } from "react";

interface ProductActionsProps {
  product: {
    variants: any[];
    selectedVariant: string;
  };
  region?: string;
  disabled?: boolean;
}

export default function ProductActions({
  product,
  region,
  disabled,
}: ProductActionsProps) {
  const selectedVariant = useMemo(() => {
    const variants = product.variants;
    return variants.find((v: any) => v.id === product.selectedVariant);
  }, [product.variants, product.selectedVariant]) as VariantWithDigitalProduct;

  const handleDownloadPreview = async () => {
    if (!selectedVariant?.digital_product) {
      return;
    }

    const downloadUrl = await getDigitalProductPreview({
      id: selectedVariant?.digital_product.id,
    });

    if (downloadUrl.length) {
      window.open(downloadUrl);
    }
  };
  return (
    <div>
      {/* Before add to cart */}
      {selectedVariant?.digital_product && (
        <Button
          onClick={handleDownloadPreview}
          variant="secondary"
          className="w-full h-10"
        >
          Download Preview
        </Button>
      )}
    </div>
  );
}
