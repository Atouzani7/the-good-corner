import Link from "next/link";

// import styles from "@/styles/components/layout-elements/CategoriesBar.module.css";
import styles from '@/styles/components/layout-element/CategoriesBar.module.css'
import ActiveLink from "../common/ActiveLink";
import { useListCategoriesQuery } from "@/types/graphql";
// import { Category } from "@/types/categories";

// const data: Category[] = [
//   {
//     id: 1,
//     name: "Chaussures",
//   },
//   {
//     id: 2,
//     name: "Vêtements",
//   },
//   {
//     id: 3,
//     name: "Voitures",
//   },
//   {
//     id: 4,
//     name: "Sports et loisirs",
//   },
// ];
function CategoriesBar() {
  const { data } = useListCategoriesQuery({ variables: { limit: 4}})
  return (
    <div className={styles.CategoriesBar}>

{data?.listCategories.map((category) => (
        <ActiveLink
          key={category.id}
          href={`/categories/view/${category.id}`}
          className={styles.linkCategoriesBar}
          activeClassName={styles.active}
        >
          {category.name}
        </ActiveLink>
      ))}
      <Link href="/categories/list" className={styles.linkCategoriesBar}>Voir plus...</Link>
    </div>
  );
}
export default CategoriesBar;