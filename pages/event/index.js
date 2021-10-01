import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Event.module.css";
import { useState } from "react";

const Index = () => {
  const [flexUp, setFlexUp] = useState(false);
  const [flexPv, setFlexPv] = useState(false);

  return (
    <Layout>
      <div className={styles.back}>
        <div className={styles.hero}>
          <Carousel
            showArrows={false}
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}
          >
            <div className={styles.hero}>
              <div className={styles.image}>
                <Image src="/concert.jpg" layout="fill" alt="concert" />
              </div>
            </div>
            <div className={styles.image}>
              <Image
                src="https://cdn.pixabay.com/photo/2017/07/21/23/57/concert-2527495_960_720.jpg"
                layout="fill"
                alt="concert"
              />
            </div>
            <div className={styles.image}>
              <Image
                src="https://cdn.pixabay.com/photo/2014/05/03/01/02/stage-336695_960_720.jpg"
                layout="fill"
                alt="concert"
              />
            </div>
          </Carousel>
          <div className={styles.hero_text}>
            <h1>EVENTS</h1>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.gallery}>
            <Link href="/event/gallery">
              <a>
                <div className={styles.gallery_btn}>
                  <span>Photo Gallery</span>
                  <div className={styles.overlap}>
                    <ul>
                      <li>
                        <Image
                          src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg"
                          height={120}
                          width={120}
                          alt=""
                        />
                      </li>
                      <li>
                        <Image
                          src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg"
                          height={120}
                          width={120}
                          alt=""
                        />
                      </li>
                      <li>
                        <Image
                          src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg"
                          height={120}
                          width={120}
                          alt=""
                        />
                      </li>
                      {/* <li>
                        <Image
                          src="https://cdn.pixabay.com/photo/2016/11/22/19/15/hand-1850120_960_720.jpg"
                          height={120}
                          width={120}
                          alt=""
                        />
                      </li> */}
                    </ul>
                    <p> +10 Images</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.container}>
            <div className={styles.heading}>
              <h2>Upcoming Events</h2>
              <span onClick={() => setFlexUp(!flexUp)}>
                {flexUp ? "Close" : "See all"}
              </span>
            </div>
            <div
              className={styles.contentWrapper}
              style={{
                flexFlow: flexUp ? "row wrap" : "nowrap",
                justifyContent: flexUp && "center",
              }}
            >
              <Card />
              <Card />
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.heading}>
              <h2>Previous Events</h2>
              <span onClick={() => setFlexPv(!flexPv)}>
                {" "}
                {flexPv ? "Close" : "See all"}
              </span>
            </div>
            <div
              className={styles.contentWrapper}
              style={{
                flexWrap: flexPv ? "wrap" : "nowrap",
                justifyContent: flexPv && "center",
              }}
            >
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Card = () => {
  return (
    <Link href="/event/tom">
      <a>
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
      </a>
    </Link>
  );
};

export default Index;
