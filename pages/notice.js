import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchAPI } from "../lib/api";
import Card from "../components/Card";
import Layout from "../components/Layout";

const val = ["2nd", "3rd", "4th"];

const Lecture = ({ data }) => {
  const router = useRouter();
  return (
    <Layout>
      <div className="container">
        {data.map((notice, index) => (
          <Card notice={notice} key={index} />
        ))}

        <style jsx>{`
          .container {
            margin-top: 50px;
            display: flex;
            justify-content: center;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Lecture;

export async function getServerSideProps(query) {
  const que = val.includes(query.query.year)
    ? query.query.year.slice(0, 1)
    : "3";
  const data = await fetchAPI(`/notice-${que}-s`);

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
