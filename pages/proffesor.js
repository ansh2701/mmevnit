import Example from "../components/Example";
import Layout from "../components/Layout";
import { fetchAPI } from "../lib/api";

const proffesor = ({ data }) => {
  return (
    <Layout>
      <div className="container">
        {data.profile.map((d, index) => (
          <Example key={index} data={d} />
        ))}
        <style jsx>{`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;

          margin: 5vw;
          padding: 2vw;
        `}</style>
      </div>
    </Layout>
  );
};

export default proffesor;

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
