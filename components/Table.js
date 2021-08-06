import { useState } from "react";
import styles from "../styles/Table.module.css";

const defsch = {
  Monday: {
    A: "IM",
    B: "MWP",
    C: "BM",
    D: "PNFEM",
    E: "",
    F: "WOEM",
    G: "",
    H: "",
    I: "hh",
  },
  Tuesday: {
    A: "Fem",
    B: "IM/BM",
    C: "",
    D: "",
    E: "sss",
    F: "",
    G: "",
    H: "",
    I: "",
  },
  Wednesday: {
    A: "Fem",
    B: "-",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
  },
  Thursday: {
    A: "Fem",
    B: "-",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
  },
  Friday: {
    A: "Fem",
    B: "-",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
  },
  Saturday: {
    A: "Fem",
    B: "WBB/EWM",
    C: "",
    D: "",
    E: "",
    F: "",
    G: "",
    H: "",
    I: "",
  },
};

const Table = ({ sub }) => {
  const [schedule, setschedule] = useState(defsch);

  return (
    <div>
      <div className={styles.container}>
        <table className={styles.table}>
          <thead>
            <tr>
              <td></td>
              <th>09:00</th>
              <th>10:00</th>
              <th>11:00</th>
              <th>12:00</th>
              <th>13:00</th>
              <th>14:00</th>
              <th>15:00</th>
              <th>16:00</th>
              <th>17:00</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(schedule).map((day, index) => (
              <tr key={index}>
                <th>{day[0]}</th>
                {Object.keys(day[1]).map((slot, index) =>
                  day[1][slot].includes("/") ? (
                    <td key={index} className={styles.slot}>
                      <table className={styles.double}>
                        <tbody>
                          <tr>
                            <td className={styles.slot}>
                              {sub === "All"
                                ? day[1][slot].split("/")[0]
                                : day[1][slot].split("/")[0] === sub && sub}
                            </td>
                            <td className={styles.slot}>
                              {sub === "All"
                                ? day[1][slot].split("/")[1]
                                : day[1][slot].split("/")[1] === sub && sub}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  ) : (
                    <td key={index} className={styles.slot}>
                      {sub === "All"
                        ? day[1][slot]
                        : day[1][slot] === sub && sub}
                    </td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
