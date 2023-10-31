import { Ad } from "@/type/ads.d";
import { formatAmount } from "@/lib/utilities";

function SheetAd({ title, price, description }: Ad) {
  return (
    <>
      <div>Titre: {title}</div>
      <div>Prix: {formatAmount(price)}</div>
      {/* <div>Prix: {formatAmount(price, "ja-JP", "JPY")}</div> */}
      <div>Description: {description}</div>
    </>
  );
}

export default SheetAd;