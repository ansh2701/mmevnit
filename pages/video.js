import { useRouter } from "next/router";
import Accordian from "../components/Accordian";
import Layout from "../components/Layout";

const val = ["2nd", "3rd", "4th"];

const Video = ({ data }) => {
  const router = useRouter();
  const rYear = router.query.year;
  return (
    <Layout>
      <div>
        <h2 className="heading">
          Video Lecture of {val.includes(rYear) ? rYear : "3rd"} Year
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

export default Video;

export async function getServerSideProps(query) {
  const que = val.includes(query.query.year)
    ? query.query.year.slice(0, 1)
    : "3";
  const res = await fetch(`https://mmevnitback.herokuapp.com/subject-${que}-s`);
  const data = await res.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
  };
}
