import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import styles from "../../styles/Event.module.css";
import { useState } from "react";
import { fetchAPI } from "../../lib/api";

const Index = ({ event, photo }) => {
  const [flexUp, setFlexUp] = useState(false);
  const [flexPv, setFlexPv] = useState(false);
  const upData = event.filter(
    (et) => et.Date.slice(8, 10) >= new Date().getDate()
  );
  const pvData = event.filter(
    (et) => et.Date.slice(8, 10) < new Date().getDate()
  );

  let total = photo.reduce(function (accumulator, current) {
    return accumulator + current.pic.length;
  }, -(photo[0].pic.length + photo[photo.length - 1].pic.length));

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
            {photo[0].pic.map((car, index) => (
              <div className={styles.hero} key={index}>
                <div className={styles.image}>
                  <Image src={car.url} layout="fill" alt="concert" />
                </div>
              </div>
            ))}
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
                      {photo.length > 1 &&
                      photo[photo.length - 1].pic.length > 3
                        ? photo[photo.length - 1].pic
                            .slice(0, 3)
                            .map((im, index) => (
                              <li key={index}>
                                <Image
                                  src={im.url}
                                  height={120}
                                  width={120}
                                  alt=""
                                />
                              </li>
                            ))
                        : photo[photo.length - 1].pic.map((im, index) => (
                            <li key={index}>
                              <Image
                                src={im.url}
                                height={120}
                                width={120}
                                alt=""
                              />
                            </li>
                          ))}
                    </ul>
                    <p> +{total} Images</p>
                  </div>
                </div>
              </a>
            </Link>
          </div>
          <div className={styles.container}>
            <div className={styles.heading}>
              <h2>Upcoming Events</h2>
              <span onClick={() => setFlexUp(!flexUp)}>
                {flexUp ? "Close " : "See all "}({upData.length})
              </span>
            </div>
            <div
              className={styles.contentWrapper}
              style={{
                flexFlow: flexUp ? "row wrap" : "nowrap",
              }}
            >
              {upData.map((et, index) => (
                <Card event={et} key={index} />
              ))}
              {upData.length === 0 && (
                <p className={styles.message}>No Upcoming Event</p>
              )}
              {/* <Card />
              <Card /> */}
            </div>
          </div>
          <div className={styles.container}>
            <div className={styles.heading}>
              <h2>Previous Events</h2>
              <span onClick={() => setFlexPv(!flexPv)}>
                {" "}
                {flexPv ? "Close " : "See all "}({pvData.length})
              </span>
            </div>
            <div
              className={styles.contentWrapper}
              style={{
                flexWrap: flexPv ? "wrap" : "nowrap",
              }}
            >
              {/* <Card />
              <Card /> */}
              {pvData.map((et, index) => (
                <Card event={et} key={index} />
              ))}
              {pvData.length === 0 && (
                <p className={styles.message}>
                  No Previous Event Data Available
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Card = ({ event }) => {
  return (
    <Link href={`/event/${event.slug}`}>
      <a>
        <div>
          <div className={styles.card}>
            <div className={styles.card__image}>
              <Image src={event.image.url} alt="" layout="fill" />
            </div>
            <div className={styles.card__text}>
              <div className={styles.card__postdate}>{event.Date}</div>
              <h2 className={styles.card__title}>{event.name}</h2>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Index;

export async function getStaticProps() {
  const event = await fetchAPI(`/events`);
  const photo = await fetchAPI(`/gallery`);

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event, photo: photo.Image }, // will be passed to the page component as props
    revalidate: 60 * 5,
  };
}
