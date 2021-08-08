import { useState } from "react";
import Layout from "../components/Layout";
import ModalCom from "../components/Modal";
import QuesCard from "../components/QuesCard";
import SearchBar from "../components/SearchBar";
import styles from "../styles/Notice.module.css";

const query = [
  {
    question: "Lorem ipsum dolor sit?",
    answer:
      "Lorem hello test, amet consectetur adipisicing elit. Veritatis repudiandae voluptate fugit alias voluptas quisquam, provident optio commodi, libero dolore blanditiis aut, dignissimos rem vitae similique quos. Nam, odit dolores?",
  },
  {
    question: "Lorem ipsum dolor sit?",
    answer:
      "Lorem ipsum your amet consectetur adipisicing elit. Veritatis repudiandae voluptate fugit alias voluptas quisquam, provident optio commodi, libero dolore blanditiis aut, dignissimos rem vitae similique quos. Nam, odit dolores?",
  },
  {
    question: "Lorem ipsum dolor sit?",
    answer:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis repudiandae voluptate fugit alias voluptas quisquam, provident optio commodi, libero dolore blanditiis aut, dignissimos rem vitae similique quos. Nam, odit dolores?",
  },
];

const Query = () => {
  const [fildata, setFildata] = useState(query);
  const [showModal, setShowModal] = useState(false);

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
                Hello from the modal!
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
