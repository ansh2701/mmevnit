import Image from "next/image";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.Container}>
      <Image src="/loader.svg" height={100} width={100} alt="loading" />
      <div>Loading....</div>
    </div>
  );
};

export default Loader;
