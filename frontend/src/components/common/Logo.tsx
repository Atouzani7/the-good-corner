import styles from '@/styles/components/layout-element/Logo.module.css'
import Image from "next/image";

interface ILogo {
  width?: number;
  height?: number;
}
/**======================
 *    On prévoit une width et une height par défaut si on n'envoie rien dans les props
 *========================**/
function Logo({ width = 50, height = 50 }: ILogo) {
  return (
    <div  className={styles.Logo}>
    <Image
    src="/logo.svg"
    width={width}
    height={height}
    alt="Logo de the good corner"
  />
  <h1 className={styles.LogoName} >The Good Corner .</h1>
  </div>
  );
}

export default Logo;