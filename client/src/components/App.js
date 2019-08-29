import React, { useState } from "react";
import "normalize.css/normalize.css";
import "../styles/Home.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        <div id='container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/lessons/:slug/:id" component={Lessons} />
            <Route path="/lesson/:id/:inid" component={Lesson} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
