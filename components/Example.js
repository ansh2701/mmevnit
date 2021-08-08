import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "../styles/Example.module.css";

const Example = () => {
  return (
    <div>
      <figure className={styles.snip1559}>
        <div className={styles.profileImage}>
          <Image
            src="/nogirl.jpg"
            alt="profile-sample2"
            height={200}
            width={200}
          />
        </div>
        <figcaption>
          <h3>Sue Shei</h3>
          <h5>Founder</h5>
          <div className={styles.icons}>
            <FaLinkedin />
            <FaInstagram />
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Example;
