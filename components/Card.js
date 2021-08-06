import Link from "next/link";
import styles from "../styles/Card.module.css";
import { GrSchedule } from "react-icons/gr";
import { useState } from "react";

const Card = ({ year }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__cover}>
        <div className={styles.tag}>
          <h4>Assingment</h4>
        </div>
        <div className={styles.deadline}>
          <GrSchedule />
          <p>time</p>
        </div>
      </div>
      <div className={styles.card__content}>
        <p>Notice</p>
      </div>
    </div>
  );
};

export default Card;
