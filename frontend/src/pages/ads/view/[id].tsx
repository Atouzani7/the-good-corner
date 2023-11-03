import SheetAd from "@/components/ads/SheetAd";
// import axiosInstance from "@/lib/AxiosInstance";
import { FIND_AD_BY_ID } from "@/requetes/queries/ads.querie";
import { Ad } from "@/types/ads";
import { useLazyQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface IError {
  field: string | null;
  message: string;
}

function ViewAd() {
  const router = useRouter();
  // const [ad, setAd] = useState<Ad>();
  // const [loading, setLoading] = useState<boolean>(true);
  const [getAd, {data, error, loading}] = useLazyQuery(FIND_AD_BY_ID);
  useEffect(() => {
    if (router.query.id) {
     // axiosInstance.get<Ad>(`/ads/find/${router.query.id}`).then(({ data }) => {
    //     setAd(data);
    //     setLoading(false);
    //   });
    getAd({
      variables: {
        findAdById: router.query.id,
      }
    })
    }
  }, [router.query.id]);

  if (loading) {
    return <div>Chargement en cours</div>;
  }
  if (error){
    return <div>{error.message}</div>
  }
  return <div>{<SheetAd {...data?.findAdById} />}</div>

//   return (
// //     <div>
// //       {ad ? (
// //         <>
// //           <SheetAd {...ad} />
// //           {/* <div>Titre: {ad?.title}</div>
// //           <div>Prix: {ad?.price}</div>
// //           <div>Description: {ad?.description}</div> */}
// //         </>
// //       ) : (
// // <div>l anonce n existe pas </div>
// //       )}
// //     </div>
//   );
}

export default ViewAd;