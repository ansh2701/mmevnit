import styles from "../styles/Card.module.css";
import { GrSchedule } from "react-icons/gr";
import Moment from "react-moment";
import "moment-timezone";

const Card = ({ notice }) => {
  return (
    <div className={styles.list}>
      <a className={styles.list__item}>
        <div className={styles.header}>
          <div
            className={styles.type}
            style={{
              color: `${
                notice.Notice.deadline &&
                notice.Notice.deadline.slice(8, 10) ===
                  new Date().toISOString().slice(8, 10) &&
                "red"
              }`,
            }}
          >
            {notice.Notice.type}
          </div>
          <div className={styles.date}>
            <Moment format="DD/MM/YY hh:mm">{notice.updated_at}</Moment>
          </div>
        </div>
        <div className={styles.meta}>{notice.Notice.description}</div>
        <div className={styles.footer}>
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
