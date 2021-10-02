import Markdown from "markdown-to-jsx";
import Moment from "react-moment";
import moment from "moment-timezone";
import { BiCalendar, BiTimeFive } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { fetchAPI } from "../../lib/api";
import styles from "../../styles/Eventpage.module.css";

const event = ({ event }) => {
  function tConv24(time24) {
    var ts = time24;
    var H = +ts.substr(0, 2);
    var h = H % 12 || 12;
    h = h < 10 ? "0" + h : h; // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
  }
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <div className={styles.card__image}>
          <Image src={event.image.url} alt="" layout="fill" />
        </div>

        <div className={styles.details}>
          <h1 className={styles.title}>{event.name}</h1>
          <div className={styles.timing}>
            <div className={styles.date}>
              <BiCalendar />
              {/* <p>Jan 29, 2018</p> */}
              <Moment format="MMM Do, YYYY">{event.Date}</Moment>
            </div>
            <div className={styles.time}>
              <BiTimeFive />
              <p>{tConv24(event.Time)}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <p>Description</p>
        <p>
          <Markdown>{event.description}</Markdown>
        </p>
      </div>
      <footer className={styles.footer}>
        {event.driveurl === null ? (
          event.registerurl && (
            <Link href={event.registerurl}>
              <a>
                <button className={styles.btn}>Register</button>
              </a>
            </Link>
          )
        ) : (
          <Link href={event.driveurl}>
            <a>
              <button className={styles.btn}>Files</button>
            </a>
          </Link>
        )}
      </footer>
    </div>
  );
};

export default event;

export async function getStaticPaths() {
  const posts = await fetchAPI("/events");

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const event = await fetchAPI(`/events?slug=${params.slug}`);
  //   const categories = await fetchAPI("/categories");

  if (!event) {
    return {
      notFound: true,
    };
  }

  return {
    props: { event: event[0] },
    revalidate: 60 * 10,
  };
}
