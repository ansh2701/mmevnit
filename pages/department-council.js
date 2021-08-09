import Example from "../components/Example";
import Layout from "../components/Layout";
import { fetchAPI } from "../lib/api";

const departmentCouncil = ({ data }) => {
  return (
    <Layout>
      <div className="heading">
        <h1>DEPARTMENT COUNCIL 2021-22</h1>
      </div>
      <div className="container">
        {data.profile.map((d, index) => (
          <Example key={index} data={d} />
        ))}
      </div>
      <style jsx>{`
        .heading h1 {
          text-align: center;
        }
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;

          margin: 0 5vw;
          padding: 2vw;
        }
      `}</style>
    </Layout>
  );
};
export default departmentCouncil;

export async function getStaticProps() {
  const data = await fetchAPI(`/council`);
  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
