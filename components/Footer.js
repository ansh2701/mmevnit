import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.details}>
          <div className={styles.logo}>
            <Image src="/mmelogo2.png" height={60} width={180} alt="MME" />
            <p>MME DEPARTMENT</p>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            omnis in, eveniet cum nam incidunt magnam harum alias! Harum eius
            deleniti quia nostrum aspernatur fugiat, voluptate dignissimos vel.
            Quibusdam, aspernatur.
          </p>
        </div>
        <div className={styles.link}>
          <ul>
            <p>Site Links</p>
            <li>AIMS</li>
            <li>AIMS</li>
            <li>AIMS</li>
          </ul>
        </div>
        <div className={styles.link}>
          <ul>
            <p>Useful Links</p>
            <li>AIMS</li>
            <li>AIMS</li>
            <li>AIMS</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <h2>
          Follow us on <FaInstagram className={styles.icon} size={30} />
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
