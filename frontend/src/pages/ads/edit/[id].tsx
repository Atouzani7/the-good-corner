import Form from "@/components/ads/Form";
// import axiosInstance from "@/lib/AxiosInstance";
import { Ad } from "@/types/ads";
import { useFindAdByIdLazyQuery } from "@/types/graphql";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function ViewEdit() {
  const router = useRouter();

  const [getAd, {data, loading}] = useFindAdByIdLazyQuery();
  console.log( 'color: #ffa640', 'data :', data);
  
  // const [ad, setAd] = useState<Ad>();
  // const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const {id} = router.query;
    // if (router.query.id) {
      console.log('ID :', 'color: #00b300', id)
      if (id) {
        getAd({
          variables: { findAdById: id as string},
        });
      }
    //   axiosInstance.get<Ad>(`/ads/find/${router.query.id}`).then(({ data }) => {
    //     setAd(data);
    //     setLoading(false);
    //   });
    // }
  }, [router.query.id]);

  if (loading) {
    return <div>Chargement en cours</div>;
  }

  return (
    // <div>
    //   {ad ? (
    //     <>
    //       <Form initialData={ad}/>
    //       {/* <SheetAd {...ad} /> */}
    //       {/* <div>Titre: {ad?.title}</div>
    //       <div>Prix: {ad?.price}</div>
    //       <div>Description: {ad?.description}</div> */}
    //     </>
    //   
    //   )}
    // </div>
    <div>
      {data?.findAdById ? (
        <>
        <Form data={data?.findAdById} />
        </>
      ) : (
        <div>L'annonce n'existe pas</div>
        )}
      </div>
  );
}

export default ViewEdit;