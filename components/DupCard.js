import Image from "next/image";
import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import styles from "../styles/Cards.module.css";
const HomeCard = ({ year }) => {
  return (
    <>
      <div className={styles.container}>
        <Link href={`/department-council`}>
          <a className={`${styles.card} education`}>
            <div className={styles.overlay}></div>
            <div>
              {/* <Image src="/mes.png" height={120} width={120} alt="notice" /> */}
              <FaUserGraduate className={styles.circle} />
            </div>
            <h4>Notice</h4>
            <p>Notice for {year} year</p>
          </a>
        </Link>
        <Link href={`/notes?year=${year}`}>
          <a className={`${styles.card} human-resources`}>
            <div className={styles.overlay}></div>
            <div>
              <GiTeacher className={styles.circle} />
            </div>
            <h4>Study Material</h4>
            <p>Books/Notes for {year} year</p>
          </a>
        </Link>
        <Link href={`/query`}>
          <a className={`${styles.card} wallet `}>
            <div className={styles.overlay}></div>
            <div className={styles.circle}>
              <Image
                src="/alumnicapw.png"
                height={120}
                width={120}
                alt="video"
              />
            </div>

            <h4>Query</h4>
            <p>Ask a question!</p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default HomeCard;
