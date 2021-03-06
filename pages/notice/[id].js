import { useState } from "react";
import { fetchAPI } from "../../lib/api";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import styles from "../../styles/Notice.module.css";
import SearchBar from "../../components/SearchBar";

const filterName = ["assignment", "notice"];

const Lecture = ({ data }) => {
  const changeData = data.filter((d) =>
    d.Notice.deadline
      ? new Date(d.Notice.deadline).getTime() >= new Date().getTime()
      : true
  );

  console.log(new Date().getTime());

  const [fil, setFil] = useState("");
  const [filtered, setFiltered] = useState(changeData);
  const [search, setSearch] = useState("");

  const handleClick = async (e) => {
    if (e.target.getAttribute("data-filter") === fil) {
      setFil("");
      setFiltered(changeData);
    } else {
      setFil(e.target.getAttribute("data-filter"));

      setFiltered(
        await changeData.filter(
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
        changeData.filter((data) =>
          data.Notice.description.toLowerCase().includes(search)
        )
      );
    } else {
      setFiltered(changeData);
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

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "2nd" } },
      { params: { id: "3rd" } },
      { params: { id: "4th" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(params) {
  const que = params.params.id.slice(0, 1);

  const data = await fetchAPI(`/notice-${que}-s?_sort=created_at:DESC`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data }, // will be passed to the page component as props
    revalidate: 60 * 2,
  };
}
