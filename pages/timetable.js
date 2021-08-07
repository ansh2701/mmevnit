import { useState } from "react";
import { useRouter } from "next/router";
import Table from "../components/Table";

const Timetable = () => {
  const [sub, setSub] = useState("All");
  const router = useRouter();

  return (
    <div className="container">
      <div>
        <h1>Time-table for {router.query.year} year</h1>
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
          <option value="Fem">Fem</option>
          <option value="IM">IM</option>
          <option value="BM">BM</option>
          <option value="AS">AS</option>

          {/* <option value=""></option> */}
        </select>
      </div>
      <Table sub={sub} />
      <style jsx>{`
        .container {
          /* background-image: linear-gradient(
            to right bottom,
            #d16ba5,
            #c777b9,
            #ba83ca,
            #aa8fd8,
            #9a9ae1,
            #8aa7ec,
            #79b3f4,
            #69bff8,
            #52cffe,
            #41dfff,
            #46eefa,
            #5ffbf1
          ); */
          /* background: #fff; */

          width: 100%;
          height: 100%;
          min-height: 100vh;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </div>
  );
};

export default Timetable;
