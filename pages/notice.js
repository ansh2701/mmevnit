import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchAPI } from "../lib/api";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Example from "../components/Example";

const val = ["2nd", "3rd", "4th"];
const filterName = ["assignment", "notice"];

const Lecture = ({ data }) => {
  const [fil, setFil] = useState("");
  const [filtered, setFiltered] = useState(data);

  const handleClick = (e) => {
    if (e.target.getAttribute("data-filter") === fil) {
      setFil("");
      setFiltered(data);
    } else {
      setFil(e.target.getAttribute("data-filter"));

      setFiltered(
        data.filter(
          (data) => data.Notice.type === e.target.getAttribute("data-filter")
        )
      );
    }
  };
  return (
    <Layout>
      <div>
        <div className="container" id="albums">
          <div className="header">
            Notice! <span className="count">{filtered.length}</span>
          </div>
          <div className="tags">
            <div>Filter by:</div>
            {filterName.map((name, index) => {
              return (
                <div
                  key={index}
                  className={`tag filter ${fil === name && "active"}`}
                  data-filter={name}
                  onClick={(e) => handleClick(e)}
                >
                  {name}
                </div>
              );
            })}
          </div>
          <div className="controls">
            <div>Sort by:</div>
            <a className="sort asc" href="#" data-sort="album">
              Date
            </a>
            <a className="sort" href="#" data-sort="artist">
              Deadline
            </a>
          </div>
          {filtered.map((notice, index) => (
            <Card notice={notice} key={index} />
          ))}
        </div>
        <style jsx>{`
          .container {
            max-width: 500px;
            padding: 50px 1.5rem;
            margin: 0 auto;
          }

          .header {
            display: flex;
            align-items: center;
            font-size: 2rem;
            font-weight: 600;
            border-bottom: 1px solid #d6d6d6;
            margin-bottom: 2rem;
            padding-bottom: 1rem;
          }

          .count {
            padding: 0.3rem;
            border-radius: 1rem;
            font-size: 1rem;
            margin-left: 0.5rem;
            margin-top: -2rem;
            min-width: 1.5rem;
            line-height: 1.2;
            text-align: center;
            color: white;
            background: #e27;
          }

          .controls {
            display: flex;
            align-items: center;
            margin-bottom: 1rem;
            color: black;
          }
          .controls > div {
            font-weight: 600;
          }
          .controls > * {
            margin-right: 1rem;
            color: inherit;
            transition: all 0.2s ease;
          }
          .controls a:hover {
            color: #e27;
          }
          .controls .sort {
            display: flex;
            align-items: flex-end;
          }
          .controls .sort:after {
            display: block;
            opacity: 0;
            content: "";
            margin-left: 0.25rem;
            font-family: "Material Icons";
            font-weight: 400;
            font-style: normal;
            font-size: 1.5rem;
            display: inline-block;
            line-height: 1;
            text-transform: none;
            letter-spacing: normal;
            word-wrap: normal;
            white-space: nowrap;
            direction: ltr;
            -webkit-font-smoothing: antialiased;
            text-rendering: optimizeLegibility;
            -moz-osx-font-smoothing: grayscale;
            font-feature-settings: "liga";
          }
          .controls .sort.asc,
          .controls .sort.desc {
            color: #e27;
          }
          .controls .sort.asc:after {
            opacity: 1;
            content: "↑";
          }
          .controls .sort.desc:after {
            opacity: 1;
            content: "↓";
          }

          .tags {
            display: flex;
            align-items: baseline;
            flex-wrap: wrap;
            margin-bottom: 0.75rem;
          }
          .tags div {
            font-weight: 600;
            margin-right: 0.5rem;
          }
          .tags .tag {
            display: flex;
            cursor: pointer;
            margin-bottom: 0.5rem;
            margin-right: 0.5rem;
            color: white;
            background: #999999;
            padding: 0.2rem 0.6rem 0.2rem 0.6rem;
            font-weight: 600;
            font-size: 0.9rem;
            transition: all 0.2s ease;
            border-radius: 1rem;
            overflow: hidden;
          }
          .tags .tag:after {
            content: "x";
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            max-width: 0;
            transition: all 0.2s ease;
          }
          .tags .tag.active:after {
            opacity: 1;
            visibility: visible;
            max-width: 2rem;
            margin-left: 0.4rem;
          }
          .tags .tag:hover,
          .tags .tag.active {
            background: #e27;
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
