import { useState } from "react";
import { fetchAPI, getStrapiURL } from "../lib/api";
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
  ButtonToggle,
  Container,
} from "reactstrap";

import { ToastContainer, toast } from "react-toastify";

import Layout from "../components/Layout";
import ModalCom from "../components/Modal";
import QuesCard from "../components/QuesCard";
import SearchBar from "../components/SearchBar";
// import "bootstrap/dist/css/bootstrap.css";
import styles from "../styles/Notice.module.css";
import "react-toastify/dist/ReactToastify.css";

const Query = ({ query }) => {
  const [fildata, setFildata] = useState(query);
  const [showModal, setShowModal] = useState(false);

  const [askQuestion, setAskQuestion] = useState("");

  const submitModal = async () => {
    const res = await fetch(getStrapiURL("/queries"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: askQuestion }),
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
    setShowModal(false);
  };

  const handleChange = (e) => {
    const search = e.target.value.toLowerCase();
    console.log(search);
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
                </ul>
                <form className={styles.form}>
                  <label htmlFor="email">Email</label>

                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />

                  <label htmlFor="roll">Roll No.</label>

                  <input
                    type="text"
                    name="roll"
                    id="roll"
                    placeholder="Ex:-BTxxMMExx"
                  />

                  <label htmlFor="text" sm={2}>
                    Question
                  </label>

                  <input
                    type="textarea"
                    name="text"
                    id="text"
                    onChange={(e) => {
                      setAskQuestion(e.target.value);
                    }}
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
                    Submit
                  </button>
                </div>
              </ModalCom>
            </div>
          </div>
          <SearchBar type="text" placeholder="Search" onChange={handleChange} />
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
  const query = await fetchAPI(`/queries`);

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
