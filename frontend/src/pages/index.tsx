import Card from "@/components/ads/Cards";
import { useListAdsRandomQuery } from "@/types/graphql";
import Head from "next/head";
import style from 'src/styles/components/index.module.css'
export default function Home() {
  const { data } = useListAdsRandomQuery({ fetchPolicy: "no-cache" })
  return (
    <>
       <h1 className={style.accueil}><br />Bienvenue sur le site <br /> <br /> <span className={style.logo}> The Good Corner .</span></h1>
      <div>
        <h3>Vous pouriez être interessés par ... </h3>
        <div>
          { data?.listAdsRandom.map((ad) => (
            <Card
            key={ad.id}
            id={ad.id}
            picture={ad.picture}
            price={ad.price} />
          )) }
        </div>
      </div>
    </>
  );
}
Home.title = "Accueil";