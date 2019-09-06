import React, { useState } from "react";
import "normalize.css/normalize.css";
import "../styles/Home.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "../store";
import Quiz from "./Quiz/Quiz";
import Projects from "./Projects/Projects";
import Hobby from "./Projects/Hobby";

import Home from "./Home/Home";
import Lessons from "./LessonSelector/Lessons";
import Lesson from "./LessonPage/Lesson";

export default props => {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <Provider store={store}>
      <Router>
        <div id="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/lessons/:slug/:id" component={Lessons} />
            <Route path="/lesson/:id/:inid" component={Lesson} />
            <Route path="/quiz/:parent_id/:parent_id" component={Quiz} />
            <Route path="/projects" component={Projects} />
            <Route path="/hobby" component={Hobby} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
