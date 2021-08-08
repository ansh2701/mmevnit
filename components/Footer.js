import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import ModalCom from "../components/Modal";
const Footer = () => {
  const router = useRouter();
  const [year, setYear] = useState("2nd");
  const [showModal, setShowModal] = useState(false);
  const handleSubmit = () => {
    localStorage.setItem("year", year);
    setShowModal(false);
    router.reload(window.location.pathname);
  };
  useEffect(() => {
    localStorage.getItem("year") !== null &&
      setYear(localStorage.getItem("year"));
  }, []);
  return (
    <div>
      <div>
        <button onClick={() => setShowModal(true)} className="btn">
          <span>{year}</span>
        </button>
        <ModalCom
          onClose={() => setShowModal(false)}
          show={showModal}
          title={"Change Prefrences"}
        >
          <select onClick={(e) => setYear(e.target.value)}>
            <option value="2nd">2nd</option>
            <option value="3rd">3rd</option>
            <option value="4th">4th</option>
          </select>
          <button onClick={handleSubmit}>save changes</button>
        </ModalCom>
      </div>
    </div>
  );
};

export default Footer;
