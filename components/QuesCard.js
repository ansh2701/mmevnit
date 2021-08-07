const QuesCard = ({ question, answer }) => {
  return (
    <div className="card">
      <div className="question">
        <h3>{question}</h3>
      </div>
      <div className="answer">
        <p>{answer}</p>
      </div>
      <style jsx>{`
        .card {
          max-width: 600px;
          padding-left: 10px;
          border-radius: 5px;
          background-color: #fff;
          min-height: 150px;
          margin-top: 10px;
        }
        .answer p {
          margin-bottom: 0;
          color: dimgrey;
        }
      `}</style>
    </div>
  );
};

export default QuesCard;
