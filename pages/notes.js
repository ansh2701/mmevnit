import { useRouter } from "next/router";
import { fetchAPI } from "../lib/api";
import Accordian from "../components/Accordian";
import Layout from "../components/Layout";

const val = ["2nd", "3rd", "4th"];

const Notes = ({ data }) => {
  const router = useRouter();
  const rYear = router.query.year;
  return (
    <Layout>
      <div>
        <h2 className="heading">
          Study Material of {val.includes(rYear) ? rYear : "3rd"} Year
        </h2>
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

export async function getStaticProps(query) {
  const que = val.includes(query.query.year)
    ? query.query.year.slice(0, 1)
    : "3";
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
