import Head from "next/head";
import { useState, useEffect } from "react";

import DupCard from "../components/DupCard";
import Example from "../components/Example";
import Footer from "../components/Footer";
import HomeCard from "../components/HomeCard";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.css";

export default function Home() {
  const [year, setYear] = useState("3rd");
  useEffect(() => {
    const localYear = localStorage.getItem("year");
    console.log(localYear);
    localYear && setYear(localYear);
  }, []);
  useEffect(() => {
    localStorage.setItem("year", year);
  }, [year]);

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>MME DEPARTMENT STUDENT CORNER</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/mmelogo2.png" />
        </Head>

        <main className={styles.main}>
          <h1>MME STUDENT CORNER</h1>

          <HomeCard year={year} />
          <h2>DEPARTMENT DETAILS</h2>
          <DupCard />
        </main>
      </div>

      <Footer>
        <div className={styles.select}>
          <h3>Change Year</h3>
          <select onChange={(e) => setYear(e.target.value)} defaultValue={year}>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
          </select>
        </div>
      </Footer>
    </Layout>
  );
}
