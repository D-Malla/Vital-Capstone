import React, { useState } from "react";
import "normalize.css/normalize.css";
import "../styles/Home.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "../store";
import HtmlPage from "./lessons/HTML";

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
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/lessons/:slug/:id" component={Lessons} />
          <Route path="/lesson/:lesson/:id" component={Lesson} />
        </div>
      </Router>
    </Provider>
  );
};
