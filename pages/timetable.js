import { useState } from "react";
import { useRouter } from "next/router";
import Table from "../components/Table";
import Layout from "../components/Layout";
import { list, table } from "../helper/subject";

const Timetable = () => {
  const [sub, setSub] = useState("All");
  const router = useRouter();
  const year = router.query.year;
  return (
    <Layout>
      <div className="container">
        <div>
          <h1>Time-table for {year} year</h1>
        </div>
        <div>
          <label htmlFor="subject">Choose a subject:</label>
          <select
            name="subject"
            id="subject"
            onChange={(e) => setSub(e.target.value)}
          >
            <option value="All" defaultValue>
              {" "}
              All
            </option>
            {year &&
              list[year.slice(1)] &&
              list[year.slice(1)].map((val, index) => (
                <option value={val} key={index}>
                  {val}
                </option>
              ))}
          </select>
        </div>
      </div>
      {year && list[year.slice(1)] && (
        <Table sub={sub} subval={table[year.slice(1)]} />
      )}
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          flex-direction: column;
        }
        .container select {
          -webkit-appearance: none;
          padding: 7px 40px 7px 12px;

          border: 1px solid #e8eaed;
          border-radius: 5px;
          background: #fff;
          box-shadow: 0 1px 3px -2px #9098a9;
          cursor: pointer;
          font-family: inherit;
          font-size: 16px;
          transition: all 150ms ease;
          text-align: center;
        }

        .container select:focus {
          outline: none;
        }
      `}</style>
    </Layout>
  );
};

export default Timetable;
