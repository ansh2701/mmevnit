const notes = () => {
  return (
    <div>
      <h1>Notes</h1>
      <div className={styles.card}>
        <div className={styles.tags}>
          <span>Subject</span>
          <span>Deadline</span>
        </div>
        <div className={styles.notice}>
          <p>Notice</p>
        </div>
      </div>
    </div>
  );
};

export default notes;
