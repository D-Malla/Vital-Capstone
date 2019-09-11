import React, { useState, useEffect } from "react";
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
        <h1>First Project-Build a Hobby Page</h1>
        <ul className={hideState}>
          <li>
            <div className="example-link">
              Objective: Build a codesandbox.io app that is functionally similar
              to this:{" "}
              <a
                href="https://codesandbox.io/s/example-hobby-site-3b05m"
                target="_blank"
              >
                https://codesandbox.io/s/example-hobby-site-3b05m
              </a>
            </div>
          </li>
          <li>
            User Story #1: My tribute page should have an element with a
            corresponding id="main", which contains all other elements.
          </li>
          <li>
            User Story #2: I should see an element with a corresponding
            id="title", which contains a string (i.e. text) that describes the
            subject of the tribute page (e.g. "Dr. Norman Borlaug").
          </li>
          <li>
            User Story #3: I should see a div element with a corresponding
            id="img-div".
          </li>
          <li>
            User Story #4: Within the img-div element, I should see an img
            element with a corresponding id="image".
          </li>
          <li>
            User Story #5: Within the img-div element, I should see an element
            with a corresponding id="img-caption"that contains textual content
            describing the image shown in img-div.
          </li>
          <li>
            User Story #6: I should see an element with a corresponding
            id="tribute-info", which contains textual content describing the
            subject of the tribute page.
          </li>
          <li>
            User Story #7: I should see an element with a corresponding
            id="tribute-link", which links to an outside site that contains
            additional information about the subject of the tribute page. HINT:
            You must give your element an attribute of target and set it to
            _blank in order for your link to open in a new tab (i.e.
            target="_blank").
          </li>
          <li>
            User Story #8: The img element should responsively resize, relative
            to the width of its parent element, without exceeding its original
            size
          </li>
          <li>
            User Story #9: The imgelement should be centered within its parent
            element.
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
            src="https://codesandbox.io/embed/first-challenge-zhosi"
            className="sandbox"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </div>
      </div>
      <ProjectFooter />
    </div>
  );
};
