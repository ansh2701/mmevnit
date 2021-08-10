import { useState } from "react/cjs/react.development";
import Example from "../components/Example";
import Layout from "../components/Layout";
import { fetchAPI } from "../lib/api";

const color = ["#fff", "b2b1b1", "yellow"];

const Proffesor = ({ data }) => {
  const [col, setCol] = useState(Math.floor(Math.random(color.length)));
  return (
    <div>
      <div className="context" style={{ background: col }}>
        <div className="heading">
          <h1>MME PROFFESOR</h1>
        </div>
        <div className="container">
          {data.profile.map((d, index) => (
            <Example key={index} data={d} />
          ))}
        </div>
        {color.map((c, index) => (
          <li
            className="circle"
            style={{ color: c, left: `${index * 10 + 1}` }}
            key={index}
          ></li>
        ))}
      </div>
      <style jsx>{`
        .context {
          width: 100%;
          position: absolute;
          background: #000;
          min-height: 100vh;
        }
        .context h1 {
          text-align: center;
          color: #fff;
          font-size: 50px;
        }

        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }

        .circle {
          position: absolute;
          display: block;
          list-style: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgb(255, 241, 110);
        }
      `}</style>
    </div>
  );
};

export default Proffesor;

export async function getStaticProps() {
  const data = await fetchAPI(`/prof`);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
