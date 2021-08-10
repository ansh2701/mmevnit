import Image from "next/image";
import Link from "next/link";
import { FaUserGraduate } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import styles from "../styles/DupCards.module.css";
const HomeCard = () => {
  return (
    <>
      <div className={styles.container}>
        <Link href={`/department-council`}>
          <a className={`${styles.card}`}>
            <div>
              <FaUserGraduate size={60} />
            </div>
            <h4>Department Council</h4>
            <p>Click to know more</p>
          </a>
        </Link>
        <Link href={`/proffesor`}>
          <a className={`${styles.card}`}>
            <div>
              <GiTeacher size={60} />
            </div>
            <h4>Proffesor</h4>
            <p>Click to know more</p>
          </a>
        </Link>
        <Link href={`/alumni`}>
          <a className={`${styles.card}`}>
            <div>
              <Image src="/alumnicap.png" height={80} width={80} alt="alumni" />
            </div>
            <h4>Alumni</h4>
            <p>Click to know more</p>
          </a>
        </Link>
      </div>
    </>
  );
};

export default HomeCard;
