import Accordian from "../components/Accordian";
import Layout from "../components/Layout";

const video = ({ data }) => {
  return (
    <Layout>
      <div>
        <div className="container">
          {data.map((sub, index) => (
            <Accordian key={index} sub={sub} />
          ))}
        </div>
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default video;

export async function getStaticProps() {
  const res = await fetch(`https://mmevnitback.herokuapp.com/subject-3-s`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
