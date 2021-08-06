import Link from "next/link";
import styles from "../styles/Card.module.css";
import { GrSchedule } from "react-icons/gr";
import { useState } from "react";

const Card = ({ notice }) => {
  const d = new Date(notice.Notice.deadline);
  const c = new Date(notice.updated_at);
  return (
    <div className={styles.card}>
      <div className={styles.card__cover}>
        <div className={styles.tag}>
          <h4>{notice.Notice.type}</h4>
        </div>
        <div className={styles.time}>
          <p>{c.toLocaleString()}</p>
        </div>
      </div>
      <div className={styles.card__content}>
        <p>{notice.Notice.description}</p>
      </div>
      <div className={styles.submit}>
        <div className={styles.sub}>Submit on : google classroom</div>
        <div className={styles.deadline}>
          <GrSchedule />
          <span>Deadline:</span>
          {d.toLocaleString()}
        </div>
      </div>
    </div>
  );
};

export default Card;
