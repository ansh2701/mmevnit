import Image from "next/image";
import Link from "next/link";
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
            height={180}
            width={180}
          />
        </div>
        <figcaption>
          <h3>{data.name}</h3>
          <h5>{data.tag}</h5>
          <div className={styles.icons}>
            <Link href={data.link1 || "#"}>
              <a>
                <FaLinkedin className={styles.ic} />
              </a>
            </Link>
            <Link href={data.link2 || "#"}>
              <a>
                <FaInstagram className={styles.ic} />
              </a>
            </Link>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default Example;
