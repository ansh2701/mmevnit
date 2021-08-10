import { useState } from "react";
import { fetchAPI, getStrapiURL } from "../lib/api";

import { ToastContainer, toast } from "react-toastify";

import Layout from "../components/Layout";
import ModalCom from "../components/Modal";
import QuesCard from "../components/QuesCard";
import SearchBar from "../components/SearchBar";

import styles from "../styles/Notice.module.css";
import "react-toastify/dist/ReactToastify.css";

const Query = ({ query }) => {
  const [fildata, setFildata] = useState(query);
  const [showModal, setShowModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [search, setSearch] = useState("");

  const [values, setValues] = useState({
    email: "",
    rollnum: "",
    question: "",
  });
  const handleInput = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const submitModal = async (e) => {
    setSubmit(true);
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ""
    );

    if (hasEmptyFields) {
      setSubmit(false);
      return setAlert(true);
    }

    const res = await fetch(getStrapiURL("/queries"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      toast.error(" Something Went Wrong...", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      toast.success(" Question submitted", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setSubmit(false);
    setShowModal(false);
  };

  const handleChange = (e) => {
    const search = e.target.value.toLowerCase();
    setSearch(search);
    if (search.length > 3) {
      setFildata(
        query.filter(
          (data) =>
            data.answer.toLowerCase().includes(search) ||
            data.question.toLowerCase().includes(search)
        )
      );
    } else {
      setFildata(query);
    }
  };
  return (
    <Layout>
      <div className={`${styles.main}  ${showModal && styles.hide}`}>
        <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className={`${styles.container}`}>
          <div className={styles.header}>
            Questions! <span className={styles.count}>{fildata.length}</span>
            <div>
              <button onClick={() => setShowModal(true)} className={styles.btn}>
                <span>Submit a Question</span>
              </button>
              <ModalCom
                onClose={() => setShowModal(false)}
                show={showModal}
                title={"Ask a question!"}
              >
                <ul className={styles.alert}>
                  <li>Make sure your question has not been asked already</li>
                  <li>Keep your question short and to the point</li>
                  <li>Give Correct Details</li>
                  <li>
                    Your question will be displayed after verified and answered
                    by the admin
                  </li>
                </ul>
                {alert && (
                  <ul className={styles.alert} style={{ background: "red" }}>
                    <li>Fill all fields...</li>
                  </ul>
                )}
                <form className={styles.form}>
                  <label htmlFor="email">Email</label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    onChange={handleInput}
                  />

                  <label htmlFor="roll">Roll No.</label>

                  <input
                    type="text"
                    name="rollnum"
                    id="rollnum"
                    placeholder="Ex:-BT__MME___"
                    onChange={handleInput}
                  />

                  <label htmlFor="text" sm={2}>
                    Question
                  </label>

                  <input
                    type="textarea"
                    name="question"
                    id="question"
                    onChange={handleInput}
                  />
                </form>
                <div className={styles.buttonGroup}>
                  <button
                    onClick={() => setShowModal(false)}
                    className={styles.close}
                  >
                    close
                  </button>
                  <button onClick={submitModal} className={styles.submit}>
                    {submit ? "Submiting..." : "Submit"}
                  </button>
                </div>
              </ModalCom>
            </div>
          </div>
          <SearchBar type="text" placeholder="Search" onChange={handleChange} />
          {search.length > 0 ? (
            search.length < 4 ? (
              <p>Seach should be greater than 3 letter</p>
            ) : (
              <p>{fildata.length} results found</p>
            )
          ) : (
            <p></p>
          )}
          <div className="q-container">
            {fildata.map((data, index) => (
              <QuesCard
                question={data.question}
                answer={data.answer}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Query;

export async function getServerSideProps() {
  const query = await fetchAPI(`/queries?verified=true`);

  if (!query) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { query }, // will be passed to the page component as props
  };
}
