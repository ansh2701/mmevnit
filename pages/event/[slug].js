import { BiCalendar, BiTimeFive } from "react-icons/bi";
import Image from "next/image";
import styles from "../../styles/Eventpage.module.css";

const event = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.card__image}>
          <Image
            src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg"
            alt=""
            layout="fill"
          />
        </div>

        <div className={styles.details}>
          <h1 className={styles.title}>Tommorowland</h1>
          <div className={styles.timing}>
            <div className={styles.date}>
              <BiCalendar />
              <p>Jan 29, 2018</p>
            </div>
            <div className={styles.time}>
              <BiTimeFive />
              <p>4pm-12pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p>Description</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum
          dolores dolore, veniam cupiditate aliquam iste voluptatum dicta
          reiciendis distinctio repudiandae officia temporibus amet impedit
          eaque quae? Perspiciatis possimus accusantium hic.
        </p>
      </div>
      <footer className={styles.footer}>
        <button className={styles.btn}>Register</button>
      </footer>
    </div>
  );
};

export default event;
