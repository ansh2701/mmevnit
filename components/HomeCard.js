import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../styles/Cards.module.css";
const HomeCard = ({ year }) => {
  return (
    <>
      <div className={styles.container}>
        <Link href={`/notice?year=${year}`}>
          <a className={`${styles.card} education`}>
            <div className={styles.overlay}></div>
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            >
              <div className={styles.circle}>
                <Image src="/mes.png" height={120} width={120} alt="notice" />
              </div>
            </motion.div>

            <h4>Notice</h4>

            <p>Notice for {year} year</p>
          </a>
        </Link>
        <Link href={`/timetable?year=${year}`}>
          <a className={`${styles.card} credentialing`}>
            <div className={styles.overlay}></div>
            <motion.div
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 270, 100, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
            >
              <div className={styles.circle}>
                <div className={styles.img}>
                  <Image
                    src="/timepsd.png"
                    height={120}
                    width={120}
                    alt="time"
                  />
                </div>
              </div>
            </motion.div>
            <h4>Time Table</h4>
            <p>Time Table for {year} year</p>
          </a>
        </Link>

        <Link href={`/notes?year=${year}`}>
          <a className={`${styles.card} human-resources`}>
            <div className={styles.overlay}></div>
            <div className={styles.circle}>
              <Image src="/book.png" height={130} width={130} alt="book" />
            </div>
            <h4>Study Material</h4>
            <p>Books/Notes for {year} year</p>
          </a>
        </Link>
        <Link href={`/query`}>
          <a className={`${styles.card} wallet `}>
            <div className={styles.overlay}></div>
            <div className={styles.circle}>
              <Image src="/query.png" height={120} width={120} alt="video" />
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
