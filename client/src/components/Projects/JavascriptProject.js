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
    <div className="description">
      <ProjectHeader />
      <h1>Third Project-Solve Javascript Functions</h1>
      <ul className={hideState}>
        <li>
          <div className="example-link">
            Objective: Build a codesandbox.io app that is functionally similar
            to this:{" "}
            <a
              href="https://codesandbox.io/s/example-hobby-site-3b05m"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://codesandbox.io/s/example-hobby-site-3b05m
            </a>
          </div>
        </li>
      </ul>
      <button onClick={handleClick}>
        {hideState === "show" ? "Hide" : hideState === "hide" ? "Show" : ""}
      </button>
      <Link to="/projects">
        <button>Back to projects</button>
      </Link>
      <div className="sandbox-wrapper">
        <iframe
          src="https://codesandbox.io/s/function-practice-hhryf"
          className="sandbox"
          // style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <ProjectFooter />
    </div>
  );
};
