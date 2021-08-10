import Example from "../components/Example";
import Layout from "../components/Layout";
import { fetchAPI } from "../lib/api";

const alumni = ({ data }) => {
  return (
    <div>
      <div className="context">
        <div className="heading">
          <h1>ALUMNI MME DEPARTMENT</h1>
        </div>

        <div className="container">
          {data.profile.map((d, index) => (
            <Example key={index} data={d} />
          ))}
        </div>

        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;

          margin: 5vw;
          padding: 2vw;
        }
        @import url("https://fonts.googleapis.com/css?family=Montserrat:700");
        .context {
          background-color: #0040c1;
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          font-family: "Montserrat", sans-serif;
        }

        .heading h1 {
          text-align: center;
          color: #fff;
          font-size: 50px;
          z-index: 1;
        }

        .cube {
          position: absolute;
          top: 80vh;
          left: 45vw;
          width: 10px;
          height: 10px;
          border: solid 1px #003298;
          transform-origin: top left;
          transform: scale(0) rotate(0deg) translate(-50%, -50%);
          -webkit-animation: cube 12s ease-in forwards infinite;
          animation: cube 12s ease-in forwards infinite;
        }
        .cube:nth-child(2n) {
          border-color: #0051f4;
        }
        .cube:nth-child(2) {
          -webkit-animation-delay: 2s;
          animation-delay: 2s;
          left: 25vw;
          top: 40vh;
        }
        .cube:nth-child(3) {
          -webkit-animation-delay: 4s;
          animation-delay: 4s;
          left: 75vw;
          top: 50vh;
        }
        .cube:nth-child(4) {
          -webkit-animation-delay: 6s;
          animation-delay: 6s;
          left: 90vw;
          top: 10vh;
        }
        .cube:nth-child(5) {
          -webkit-animation-delay: 8s;
          animation-delay: 8s;
          left: 10vw;
          top: 85vh;
        }
        .cube:nth-child(6) {
          -webkit-animation-delay: 10s;
          animation-delay: 10s;
          left: 50vw;
          top: 10vh;
        }

        @-webkit-keyframes cube {
          from {
            transform: scale(0) rotate(0deg) translate(-50%, -50%);
            opacity: 1;
          }
          to {
            transform: scale(20) rotate(960deg) translate(-50%, -50%);
            opacity: 0;
          }
        }

        @keyframes cube {
          from {
            transform: scale(0) rotate(0deg) translate(-50%, -50%);
            opacity: 1;
          }
          to {
            transform: scale(20) rotate(960deg) translate(-50%, -50%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default alumni;

export async function getStaticProps() {
  const data = await fetchAPI(`/alumni`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
