import Head from "next/head";
import style from 'src/styles/components/index.module.css'
export default function Home() {
  return (
    <>
       <h1 className={style.accueil}>Bienvenue sur le site <br /> <span className={style.logo}> The Good Corner .</span></h1>
      <div></div>
    </>
  );
}
Home.title = "Accueil";