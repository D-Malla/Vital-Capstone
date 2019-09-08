import React, { useEffect } from "react";
import "normalize.css/normalize.css";
import "../styles/Home.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "../store";
import Quiz from "./Quiz/Quiz";
import HtmlPage from "./lessons/HTML";

import Home from "./Home/Home";
import Lessons from "./LessonSelector/Lessons";
import Lesson from "./LessonPage/Lesson";
import SignIn from './auth/SignIn'
import SignUp from './auth/SignUp'
import { login } from "../actions/auth.actions";

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
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};
