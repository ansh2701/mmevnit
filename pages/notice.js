import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Card from "../components/Card";
import Layout from "../components/Layout";

const Lecture = () => {
  const router = useRouter();
  return (
    <Layout>
      <div className="container">
        <Card year={router.query.year} />
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
