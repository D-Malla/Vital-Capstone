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
      <h1>First Project-Build a Hobby Page</h1>
      <ul className={hideState}>
        <li>
          <p>
            Show us your skills! Style this hotel page in whichever way you'd
            like. Remember to use all of the concepts you learned throughout the
            CSS course! We have provided the HTML for your hotel website, so all
            you need to do is apply your CSS knowledge. Once you feel confident,
            go ahead and submit your finished product to us! Have fun!
          </p>
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
          src="https://codesandbox.io/embed/project-2-bd5zu"
          className="sandbox"
          // style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
          sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <ProjectFooter />
    </div>
  );
};
