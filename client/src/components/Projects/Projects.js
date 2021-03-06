import React from "react";
import { Link } from "react-router-dom";
import ProjectHeader from "./ProjectHeader";
import ProjectFooter from "./ProjectFooter";
import "../../styles/Projects.css";
export default props => {
  return (
    <div>
      <ProjectHeader />
      <div className="project-wrapper">
        <div className="description">
          <h1>Introduction to the Responsive Web Design Projects</h1>
          <p>
            Time to put your newly learnt skills to work! By working on projects
            you would have the opportunity of applying all the skills,
            principles and concepts you have learnt so far HTML and CSS.
          </p>
          <p>
            The following projects will be built in CodeSandbox, a third party
            code editor that works directly in the browser. It is encouraged to
            sign up for CodeSandbox with your Github account (if you haven't
            signed up yet it may be time.)
          </p>
          <p>
            Once you have finished the project, submit your CodeSandbox link
            below in order to receive credit. Click on one of the links below to
            get started, you will be taken to a page describing the project and
            an instance of CodeSandbox so you can work right in the browser.
          </p>
          <ul>
            <li>
              <div className="project-link">
                <Link to="/hobby" className="project-link">
                  Build a Hobby Page{" "}
                </Link>
              </div>
            </li>
            <li>
              <div className="project-link">
                <Link to="/hotel" className="project-link">
                  Style a Hotel Page{" "}
                </Link>
              </div>
            </li>
            <li>
              <div className="project-link">
                <Link to="/javascriptproject" className="project-link">
                  Take the Function Challenge{" "}
                </Link>
              </div>
            </li>
          </ul>
          <form>
            <Link to={"/lesson/" + 3 + "/" + 31}>
              <button type="submit" className="project-button">
                Continue to Lessons
              </button>
            </Link>
          </form>
        </div>
      </div>
      <ProjectFooter />
    </div>
  );
};
