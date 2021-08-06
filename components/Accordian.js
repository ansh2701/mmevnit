import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";
import { useState } from "react";

export default function Accordian({ sub }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="subject">
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className="sub-name">
          {sub.name}
        </h4>
        <button className="btn" onClick={() => setExpanded(!expanded)}>
          {expanded ? <FiChevronsUp /> : <FiChevronsDown />}
        </button>
      </header>
      {expanded &&
        sub.resources_3s !== [] &&
        sub.resources_3s.map(
          (video, index) =>
            (video.type = "video" && (
              <div key={index}>
                <h5>{video.Resources.name}</h5>
                <a href={video.Resources.link}>
                  <span>{video.Resources.link}</span>
                </a>
              </div>
            ))
        )}
      <style jsx>{`
        .subject {
          padding: 1rem 1.5rem;
          width: 70vw;
          height: auto;
          border: 2px solid #eae6eb;
          margin-bottom: 1rem;
          border-radius: 0.25rem;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .subject h4 {
          text-transform: none;
          line-height: 1.5;
        }
        .subject span {
          color: hsl(209, 34%, 30%);
          margin-bottom: 0;
          margin-top: 0.5rem;
          word-wrap: break-word;
        }
        .subject header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .subject header h4 {
          margin-bottom: 0;
        }
        .btn {
          background: transparent;
          border-color: transparent;
          width: 2rem;
          height: 2rem;
          background: #eae6eb;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          color: #b4345c;
          cursor: pointer;
          margin-left: 1rem;
          align-self: center;
          min-width: 2rem;
        }
      `}</style>
    </div>
  );
}
