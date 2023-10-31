import SheetAd from "@/components/ads/SheetAd";
import axiosInstance from "@/lib/AxiosInstance";
import { Ad } from "@/type/ads.d";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ViewAd() {
  const router = useRouter();
  const [ad, setAd] = useState<Ad>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (router.query.id) {
      axiosInstance.get<Ad>(`/ads/find/${router.query.id}`).then(({ data }) => {
        setAd(data);
        setLoading(false);
      });
    }
  }, [router.query.id]);

  if (loading) {
    return <div>Chargement en cours</div>;
  }

  return (
    <div>
      {ad ? (
        <>
          <SheetAd {...ad} />
          {/* <div>Titre: {ad?.title}</div>
          <div>Prix: {ad?.price}</div>
          <div>Description: {ad?.description}</div> */}
        </>
      ) : (
<div>l anonce n existe pas </div>
      )}
    </div>
  );
}

export default ViewAd;