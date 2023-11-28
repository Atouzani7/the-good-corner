import Card from "@/components/ads/Cards";
import { Category } from "@/types/categories.d";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "@/styles/pages/categories/list/Categories.module.css";
import { useQuery } from "@apollo/client";
import { LIST_CATEGORIES } from "@/requetes/queries/categories.querie";
import { useListCategoriesQuery } from "@/types/graphql";


// function Categories() {
// // function Categories({ data }: { data: Category[] }) {
//   //?  Methode avec le rendu côté serveur
//   const [categories, setCategories] = useState<Category[]>([]);

// //* Recupération des données 

// const {loading, data, error} = useQuery(LIST_CATEGORIES), {
//   onCompleted(data) {

//     console.log("DATA" data)
//   }
// }



//   /**======================
//    *    methode avec le rendu côté client
//    *========================**/
//   useEffect(() => {
//     // fetch("http://localhost:4000/categories/list")
//     //   .then((response) => response.json())
//     //   .then((data) => setCategories(data));
//     // axios
//     //   .get<Category[]>("http://localhost:4000/categories/list")
//     //   .then(({ data }) => setCategories(data));
//   }, []);
//   return (
//     <div>
//       <h1>Liste des catégories</h1>
//       <div className={styles.cardBloc}>
//         {data?.listCategories.map((c: any) => (
//           <Card key={c.id} id={c.id} name={c.name} />
//         ))}
//       </div>
//     </div>
//   );
// }

// /**========================================================================
//  *                           Méthode avec le rendu côté serveur
//  *========================================================================**/
// // export const getServerSideProps = async () => {
// //   const { data } = await axios.get<Category[]>(
// //     "http://localhost:4000/categories/list"
// //   );
// //   return { props: { data, maValeur: "toto" } };
// // };
// export default Categories;

function Categories() {
  /**=======================
   * *       RECUPERATION DES DONNEES
   *========================**/

  const { loading, data, error, refetch } = useListCategoriesQuery({
  // const { loading, data, error } = useQuery<ListCategoriesQuery>(LIST_CATEGORIES, {
    onCompleted(data) {
      console.log("DATA", data);
    },
    onError(error) {
      console.log("ERROR", error);
    },
  });

  if (loading) {
    return <div>Chargement en cours</div>;
  }
  return (
    <div>
      <h1>Liste des catégories</h1>
      <div className={styles.cardBloc}>
        {data?.listCategories.map((c) => (
          <Card key={c.id} id={c.id} name={c.name} />
        ))}
      </div>
      <button onClick={() => refetch()} className={styles.adCardButton}>Rafraichir</button>
    </div>
  );
}

export default Categories;