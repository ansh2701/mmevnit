import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import styles from "../styles/Footer.module.css";

const Footer = ({ children }) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.details}>
          <div className={styles.logo}>
            <Image src="/VNITLOGO.png" height={100} width={100} alt="MME" />
            <div className={styles.name}>
              <p>MME DEPARTMENT</p>
              <span>VNIT, NAGPUR</span>
            </div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
            omnis in, eveniet cum nam incidunt magnam harum alias! Harum eius
            deleniti quia nostrum aspernatur fugiat, voluptate dignissimos vel.
            Quibusdam, aspernatur.
          </p>
        </div>
        {children}
        <div className={styles.link}>
          <ul>
            <p>Site Links</p>
            <li>
              <Link href={`/derpartment-council`}>
                <a>Council</a>
              </Link>
            </li>
            <li>
              <Link href={`/proffesor`}>
                <a>Proffesor</a>
              </Link>
            </li>
            <li>
              <Link href={`/alumni`}>
                <a>Alumni</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.link}>
          <ul>
            <p>Useful Links</p>
            <li>
              <Link href={`https://vnit.ac.in/`}>
                <a
                  className={styles.navlinks}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vnit Official
                </a>
              </Link>
            </li>
            <li>
              <Link
                href={`https://aims.vnit.ac.in/exam/faces/infrastructure/SLogin.jsf`}
              >
                <a
                  className={styles.navlinks}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  AIMS
                </a>
              </Link>
            </li>
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
