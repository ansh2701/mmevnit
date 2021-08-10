import { useState, useEffect } from "react";
import Link from "next/link";
import { FaTimes, FaBars } from "react-icons/fa";
import Image from "next/image";
import styles from "../styles/Header.module.css";

function Header() {
  const [click, setClick] = useState(false);
  const [year, setYear] = useState("3rd");
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 600) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
  }, []);

  useEffect(() => {
    const localYear = localStorage.getItem("year");
    setYear(localYear);
  }, []);

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/">
            <a className={styles.logo} onClick={closeMobileMenu}>
              <Image
                src="/mmelogo2.png"
                height={60}
                width={180}
                alt="Dalal Times"
              />
              {/* <FaMagento /> */}
            </a>
          </Link>

          <div className={styles.menuicon} onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul
            className={click ? `${styles.navmenuActive}` : `${styles.navmenu}`}
          >
            <li className={styles.navitem}>
              <Link href={`/notice/${year}`}>
                <a className={styles.navlinks} onClick={closeMobileMenu}>
                  Notice
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href={`/timetable?year=${year}`}>
                <a className={styles.navlinks} onClick={closeMobileMenu}>
                  Time Table
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href={`/notes/${year}`}>
                <a className={styles.navlinks} onClick={closeMobileMenu}>
                  Study Material
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href={`/query`}>
                <a className={styles.navlinks} onClick={closeMobileMenu}>
                  Query
                </a>
              </Link>
            </li>

            {/* <li className={styles.navitem}>
              <Link href="/signup">
                <a className={styles.navlinksmobile} onClick={closeMobileMenu}>
                  Contact Us
                </a>
              </Link>
            </li> */}
          </ul>
          {/* {button && (
            <Link href="/">
              <a className="btn one">Contact Us</a>
            </Link>
          )} */}
        </div>
      </nav>
    </>
  );
}

export default Header;
