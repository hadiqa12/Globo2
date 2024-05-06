import Image from "next/image";
import OurStoryPic from "../../images/home-image-1.jpg";
import styles from "./home.module.css";
export default function Page() {
  return (
    <>
    <div className={styles.bgWrap}>
    <Image
    src={OurStoryPic}
    alt="just a pic"
    quality={100}
  
    sizes={"100vw"}
    fill
    style={{
      objectFit:"cover"
    }}
    > 
    </Image>
    </div>
    
      <h1 className={styles.bgHeader}>Humble  beginnings of the Story of Our life</h1>
      <p className={styles.bgText} >
        How we became the farmers of the future, tilling the technoilogy of tomorrow today. 
      </p>
    </>
  );
}
