import styles from "@/styles/pages/categories/list/Categories.module.css";
import { useQuery } from "@apollo/client";
import { ListCategoriesQuery, useListCategoriesQuery } from "@/types/graphql";
import { useEffect } from "react";
import Card from "@/components/categorie/Cards";
import { LIST_CATEGORIES } from "@/requetes/queries/categories.querie";

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


  useEffect(() => {
    console.log("DATA", data);
  },[data])

  if (loading) {
    return <div>Chargement en cours</div>;
  }
  return (
    <div>
      <h1>Liste des catégories</h1>
      <div className={styles.cardBlocCat}>
        {data?.listCategories.map((c) => (
          <Card key={c.id} id={c.id} name={c.name} />
        ))}
      </div>
      <button onClick={() => refetch()}>Rafraichir</button>
    </div>
  );
}

export default Categories;
