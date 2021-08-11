import Example from "../components/Example";
import ProfileCard from "../components/ProfileCard";

import { fetchAPI } from "../lib/api";

const style = {
  backgroundImage:
    "url(" + "https://i.postimg.cc/C5Y74Vhw/background.png" + ")",
};
const Proffesor = ({ data }) => {
  return (
    <div>
      <div className="context" style={style}>
        <div className="heading">
          <h1>MME PROFFESOR</h1>
        </div>
        <div className="container">
          {data.profile.map((d, index) => (
            <Example key={index} data={d} />
          ))}
          {data.profile.map((d, index) => (
            <Example key={index} data={d} />
          ))}
          {data.profile.map((d, index) => (
            <Example key={index} data={d} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .context {
          width: 100%;
          position: absolute;
          background: #fff;
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

          background-size: cover;
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
