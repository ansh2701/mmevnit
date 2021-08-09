import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Example.module.css";

const Example = ({ data }) => {
  return (
    <div>
      <figure className={styles.card}>
        <div className={styles.profileImage}>
          <Image
            src={data.picture.url}
            alt="profile-sample2"
            height={200}
            width={200}
          />
        </div>
        <figcaption>
          <h3>{data.name}</h3>
          <h5>{data.tag}</h5>
          <div className={styles.icons}>
            <FaLinkedin className={styles.ic} />
            <FaInstagram className={styles.ic} />
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Example;
