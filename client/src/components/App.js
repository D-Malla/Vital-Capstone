import React from "react";
import "normalize.css/normalize.css";
import "../styles/Home.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "../store";
import Quiz from "./Quiz/Quiz";

import Home from "./Home/Home";
import Lessons from "./LessonSelector/Lessons";
import Lesson from "./LessonPage/Lesson";

export default props => {

  

  return (
    <Provider store={store}>
      <Router>
        <div id='container'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/lessons/:slug/:id" component={Lessons} />
            <Route path="/lesson/:id/:inid" component={Lesson} />
            <Route path="/quiz/:parent_id/:parent_id" component={Quiz} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
