import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/Projects.css";
import ProjectHeader from "./ProjectHeader";
import ProjectFooter from "./ProjectFooter";

export default props => {
  const [hideState, setHideState] = useState("show");
  function handleClick() {
    if (hideState === "show") {
      setHideState("hide");
    } else if (hideState === "hide") {
      setHideState("show");
    }
  }
  return (
    <div>
      <ProjectHeader />
      <div className="hobby-description">
        <h1>Third Project-Solve Javascript Functions</h1>
        <ul className={hideState}>
          <li>
            <div className="example-link">
              Objective: Build a codesandbox.io app that is functionally similar
              to this:{" "}
              <a
                href="https://codesandbox.io/embed/function-practice-hhryf"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://codesandbox.io/embed/function-practice-hhryf
              </a>
            </div>
          </li>
        </ul>
        <div className="sandbox-wrapper">
          <div className="sanbox-btn-wrapper">
            <button onClick={handleClick} className="hide-btn">
              {hideState === "show"
                ? "Hide"
                : hideState === "hide"
                ? "Show"
                : ""}
            </button>
            <Link to="/projects">
              <button id="back-to-project">Back to projects</button>
            </Link>
          </div>
          <iframe
            src="https://codesandbox.io/embed/function-practice-hhryf"
            className="sandbox"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
      <ProjectFooter />
    </div>
  );
};
