import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import styles from "../styles/Cards.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
const HomeCard = ({ year }) => {
  // const { ref, inView } = useInView();

  // const animation = useAnimation();

  // useEffect(() => {
  //   inView &&
  //     animation.start({
  //       initial: { x: -100, opacity: 0 },
  //       animate: { x: 0, opacity: 1 },
  //     });

  //   console.log(inView);
  // }, [inView]);

  return (
    <>
      <div className={styles.container}>
        <Link href={`/notice/${year}`} passHref>
          <motion.a
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className={`${styles.card} education`}
          >
            <div className={styles.overlay}></div>

            <div className={styles.circle}>
              <Image src="/mes.png" height={120} width={120} alt="notice" />
            </div>

            <h4>Notice</h4>

            <p>Notice for {year} year</p>
          </motion.a>
        </Link>
        <Link href={`/timetable?year=${year}`} passHref>
          <motion.a
            className={`${styles.card} table`}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div className={styles.overlay}></div>

            <div className={styles.circle}>
              <Image src="/timepsd.png" height={120} width={120} alt="time" />
            </div>

            <h4>Time Table</h4>
            <p>Time Table for {year} year</p>
          </motion.a>
        </Link>

        <Link href={`/notes/${year}`} passHref>
          <motion.a
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className={`${styles.card} queries`}
          >
            <div className={styles.overlay}></div>

            <div className={styles.circle}>
              <Image src="/book.png" height={130} width={130} alt="book" />
            </div>

            <h4>Study Material</h4>
            <p>Books/Notes for {year} year</p>
          </motion.a>
        </Link>
        <Link href={`/query`} passHref>
          <motion.a
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className={`${styles.card} notes `}
          >
            <div className={styles.overlay}></div>

            <div className={styles.circle}>
              <Image src="/query.png" height={120} width={120} alt="video" />
            </div>

            <h4>Query</h4>
            <p>Ask a question!</p>
          </motion.a>
        </Link>
      </div>
    </>
  );
};

export default HomeCard;
