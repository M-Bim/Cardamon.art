// other imports...
import { VariantWithDigitalProduct } from "../../../../types/global"

export default function ProductActions({
  product,
  region,
  disabled,
}: ProductActionsProps) {

  // ...

  const selectedVariant = useMemo(() => {
    // ...
  }, [product.variants, options]) as VariantWithDigitalProduct

  // ...
  // const handleDownloadPreview = async () => {
      if (!selectedVariant?.digital_product) {
        return
      }

      const downloadUrl = await getDigitalProductPreview({
        id: selectedVariant?.digital_product.id,
      })

      if (downloadUrl.length) {
        window.open(downloadUrl)
      }
    }
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
    )

}
