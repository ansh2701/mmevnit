import { useState, useEffect } from "react";
import Link from "next/link";
import { FaTimes, FaBars, FaMagento } from "react-icons/fa";
import Image from "next/image";
import styles from "../styles/Header.module.css";

function Header() {
  const [click, setClick] = useState(false);
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

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/">
            <a className={styles.logo} onClick={closeMobileMenu}>
              {/* <Image
                src="https://res.cloudinary.com/mrxox/image/upload/v1627475987/logo_784685d0ba.png"
                height={60}
                width={60}
                alt="Dalal Times"
              /> */}
              <FaMagento />
            </a>
          </Link>

          <div className={styles.menuicon} onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul
            className={click ? `${styles.navmenuActive}` : `${styles.navmenu}`}
          >
            <li className={styles.navitem}>
              <Link href="/">
                <a className={styles.navlinks} onClick={closeMobileMenu}>
                  Blog
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/news">
                <a className={styles.navlinks} onClick={closeMobileMenu}>
                  News
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/tweet">
                <a className={styles.navlinks} onClick={closeMobileMenu}>
                  Tweets
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
