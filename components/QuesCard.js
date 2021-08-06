const QuesCard = () => {
  return (
    <div className="card">
      <div className="question">
        <h3>Lorem ipsum dolor sit amet?</h3>
      </div>
      <div className="answer">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam debitis
          eveniet quos, provident laudantium distinctio repudiandae alias rem
          nemo quidem corporis nisi ullam quae dolorem nihil! Animi voluptatem
          totam tenetur.
        </p>
      </div>
      <style jsx>{`
        .card {
          max-width: 600px;
          padding-left: 10px;
          border-radius: 5px;
          background-color: #fff;
          box-shadow: 10px 15px 5px -3px #f4f6f7;
          height: 150px;
          margin-top: 10px;
        }
      `}</style>
    </div>
  );
};

export default QuesCard;
