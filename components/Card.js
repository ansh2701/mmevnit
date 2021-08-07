import Link from "next/link";
import styles from "../styles/Card.module.css";
import { GrSchedule } from "react-icons/gr";
import Moment from "react-moment";
import "moment-timezone";

const Card = ({ notice }) => {
  return (
    // <div className={styles.card}>
    //   <div className={styles.card__cover}>
    //     <div className={styles.tag}>
    //       <h4>{notice.Notice.type}</h4>
    //     </div>
    //     <div className={styles.time}>
    //       <p>{c.toLocaleString()}</p>
    //     </div>
    //   </div>
    //   <div className={styles.card__content}>
    //     <p>{notice.Notice.description}</p>
    //   </div>
    //   <div className={styles.submit}>
    //     <div className={styles.sub}>Submit on : google classroom</div>
    //     <div className={styles.deadline}>
    //       <GrSchedule />
    //       <span>Deadline:</span>
    //       {d.toLocaleString()}
    //     </div>
    //   </div>
    // </div>
    <div className={styles.list}>
      <a className={styles.list__item}>
        <div className={styles.header}>
          <div className={styles.type}>{notice.Notice.type}</div>
          <div className={styles.date}>
            <Moment format="DD/MM/YY hh:mm">{notice.updated_at}</Moment>
          </div>
        </div>
        <div className={styles.meta}>{notice.Notice.description}</div>
        <div>
          {notice.Notice.submit && (
            <div className={styles.submit}>
              Submit on : {notice.Notice.submit}
            </div>
          )}
          {notice.Notice.deadline && (
            <div className={styles.deadline}>
              <GrSchedule />
              <span>Deadline:</span>
              <Moment format="DD/MM/YY hh:mm">{notice.Notice.deadline}</Moment>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default Card;
