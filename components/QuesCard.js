import styles from "../styles/Card.module.css";

const QuesCard = ({ question, answer }) => {
  return (
    <div className={styles.list}>
      <a className={styles.list__item}>
        <div className={styles.header}>
          <div className={styles.type}>{question}</div>
        </div>
        <div className={styles.meta}>{answer}</div>
      </a>
    </div>
  );
};

export default QuesCard;
