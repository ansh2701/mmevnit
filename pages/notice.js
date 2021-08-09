import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { fetchAPI } from "../lib/api";
import Card from "../components/Card";
import Layout from "../components/Layout";
import styles from "../styles/Notice.module.css";
import SearchBar from "../components/SearchBar";

const val = ["2nd", "3rd", "4th"];
const filterName = ["assignment", "notice"];

const Lecture = ({ data }) => {
  const [fil, setFil] = useState("");
  const [filtered, setFiltered] = useState(data);
  const [search, setSearch] = useState("");

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

  const handleChange = (e) => {
    const search = e.target.value.toLowerCase();
    setSearch(search);
    if (search.length > 3) {
      setFiltered(
        data.filter((data) =>
          data.Notice.description.toLowerCase().includes(search)
        )
      );
    } else {
      setFiltered(data);
    }
  };
  return (
    <Layout>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.header}>
            Notice! <span className={styles.count}>{filtered.length}</span>
          </div>
          <SearchBar placeholder="Search" onChange={handleChange} />
          {search.length > 0 ? (
            search.length < 4 ? (
              <p>Seach should be greater than 3 letter</p>
            ) : (
              <p>{filtered.length} results found</p>
            )
          ) : (
            <p></p>
          )}
          <div className={styles.tags}>
            <div>Filter by:</div>
            {filterName.map((name, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.tag} ${styles.filter}  ${
                    fil === name && styles.active
                  }`}
                  data-filter={name}
                  onClick={(e) => handleClick(e)}
                >
                  {name}
                </div>
              );
            })}
          </div>
          {/* <div className={styles.controls}>
            <div>Sort by:</div>
            <a
              className={`${styles.sort} ${styles.asc}`}
              href="#"
              data-sort="album"
            >
              Date
            </a>
            <a className={styles.sort} href="#" data-sort="artist">
              Deadline
            </a>
          </div> */}
          {filtered.map((notice, index) => (
            <Card notice={notice} key={index} />
          ))}
        </div>
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
