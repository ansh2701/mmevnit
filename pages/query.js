import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Layout from "../components/Layout";
import QuesCard from "../components/QuesCard";

const Query = () => {
  const [show, setShow] = useState(false);
  return (
    <Layout>
      <div className="search-bar">
        <div className="container">
          <input
            type="text"
            id="box"
            placeholder="Search anything..."
            className={`search__box ${show && "show"}`}
          />
          {/* <i class="fas fa-search search__icon" ></i> */}
          <span id="icon" className="search__icon">
            <FaSearch onClick={() => setShow(true)} />
          </span>
        </div>
      </div>
      <div className="q-container">
        <QuesCard />
      </div>
      <style jsx>{`
        .q-container {
          display: flex;
          justify-content: center;
          min-height: 80vh;
          background-color: #f1f1f1;
        }
        .search-bar {
          width: 100%;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f1f1f1;
        }
        .container {
          width: 350px;
          height: 70px;
          /* position: absolute; */

          /* left: 50%;
          transform: translate(-50%, -50%); */
          background-color: #1e272e;
          /*   margin: 20vh auto; */
          border-radius: 4rem;
          padding: 10px;
        }

        .search__box {
          float: left;
          width: 0;
          height: 50px;
          background: none;
          color: #f7f7f7;
          font-size: 1.4rem;
          border-radius: 2rem;
          outline: none;
          border: none;
          /* position: relative; */
          opacity: 1;
          transition: all 0.75s ease-in;
          cursor: pointer;
        }

        /* .search__box:focus, .search__box:hover {
  background-color: #f1f2f6;
} */

        .search__icon {
          box-sizing: border-box;
          float: right;
          font-size: 1.5rem;
          display: inline-block;

          /*   justify-content: center;
  align-items: center; */
          margin-left: 0.8rem;
          margin-top: 0;
          cursor: pointer;
          position: absolute;
          color: #fa983a;
          transition: all 0.25s ease-in;
          padding: 0.7rem;
          border-radius: 50%;
        }

        .container:hover > .search__box {
          width: 85%;
          padding: 0 1rem;
        }

        .container:hover > .search__icon {
          color: #eee;
        }

        .show {
          width: 85%;
          border: 1px solid red;
        }
      `}</style>
    </Layout>
  );
};

export default Query;
