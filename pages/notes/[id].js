import { useRouter } from "next/router";
import { fetchAPI } from "../../lib/api";
import Accordian from "../../components/Accordian";
import Layout from "../../components/Layout";

const Notes = ({ data }) => {
  const router = useRouter();
  const rYear = router.query.id;

  return (
    <Layout>
      <div>
        <h2 className="heading">Study Material of {rYear} Year</h2>
        <div className="container">
          {data.map((sub, index) => (
            <Accordian key={index} sub={sub} />
          ))}
        </div>
        <style jsx>{`
          .heading {
            text-align: center;
          }
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

export default Notes;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "2nd" } },
      { params: { id: "3rd" } },
      { params: { id: "4th" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(params) {
  const que = params.params.id.slice(0, 1);
  const data = await fetchAPI(`/subject-${que}-s`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 60 * 60,
  };
}
