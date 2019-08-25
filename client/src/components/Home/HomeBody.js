import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { lessonsTitle } from "../../actions/vital.actions";
export default props => {
  const title = useSelector(appState => appState.lessons_title);

  useEffect(() => {
    lessonsTitle();
  }, []);

  return (
    <div id="homeBodyContainer">
      <div className="homeImage"></div>
      <div className="imgOverlay"></div>
      <div className="greeting">
        <h1>WELCOME!</h1>
      </div>

      <div className="classSelectorDiv">
        {console.log(title.lessons_title)}
        {/* {title.lessons_title.map(item => (
          <div>{item}</div>
        ))} */}
        {/* // <div>
          //   <div className="classSelector">
          //     <Link to="/lessons" className="link">
          //       <h3>{item.id}</h3>
          //       <p>THE BASIC STRUCTURE OF A WEBPAGE</p>
          //     </Link>
          //   </div>
          //   <div className="classSelector">
          //     <Link to="/lessons" className="link">
          //       <h3>CSS</h3>
          //       <p>THE PRESENTATION, FORMATTING, AND LAYOUT</p>
          //     </Link>
          //   </div>
          //   <div className="classSelector">
          //     <Link to="/lessons" className="link">
          //       <h3>JAVASCRIPT</h3>
          //       <p>THE FUNCTIONALITY AND CONTROL OF ELEMENTS</p>
          //     </Link>
          //   </div>
          // </div> */}
      </div>
    </div>
  );
};
