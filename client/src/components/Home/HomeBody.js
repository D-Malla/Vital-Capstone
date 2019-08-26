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
        {console.log(title)}

        {title.map(item => (
          <div key={item.lesson} className="classSelector">
            <div>
              {/* <Link to={"/lessons/" + item.slug} className="link"> */}
              <h3> {item.lesson}</h3>
              {/* </Link> */}
              <p>{item.lesson_description}</p>
            </div>
            <div className="sub-lessons">
              {item.subcat.map(sub => (
                <div key={sub.id} className="indi-lessons">
                  <Link to={"/lesson/" + sub.slug}>{sub.lesson}</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
{
  /* {title.map(item => (
          <div key={item.lesson} className="classSelector">
            <h3> {item.lesson}</h3>
            <p>{item.lesson_description}</p>
            {item.subcat.map(sub => (
              <div>
                <Link
                  className="link"
                  to={"/lessons/" + sub.slug}
                  key={sub.lesson}
                >
                  {sub.lesson}
                </Link>
              </div>
            ))}
          </div>
        ))} */
}
