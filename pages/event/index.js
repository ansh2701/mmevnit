import Image from "next/image";
import Layout from "../../components/Layout";
import styles from "../../styles/Event.module.css";

const index = () => {
  return (
    <Layout>
      <div className={styles.back}>
        <div className={styles.carousel}></div>
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2>Upcoming Events</h2>
            <span>See all</span>
          </div>
          <div className={styles.contentWrapper}>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Card = () => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.card__image}>
          <Image
            src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg"
            alt=""
            layout="fill"
          />
        </div>
        <div className={styles.card__text}>
          <div className={styles.card__postdate}>Jan 29, 2018</div>
          <h2 className={styles.card__title}>Tommorowland</h2>
        </div>
      </div>
    </div>
  );
};

export default index;
