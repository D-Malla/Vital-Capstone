import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getLessonTitles, getLessonData} from "../../actions/vital.actions";
import { useSelector } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import ReactMarkDown from "react-markdown";

export default props => {
  const titles = useSelector(appState => appState.get_lessons);
  const lessonData = useSelector(appState => appState.lesson_data)
  const [loadState, setLoadState] = useState(true);
  const id = props.props.match.params.id;

  function hideTransition() {
    if (loadState === true) {
      setTimeout(function() {
        setLoadState(false);
      }, 100);
    } else {
      setLoadState(false);
    }
  }
  
  function handleSubmit() {
    if (lessonData.id === 1) {
      props.props.history.push('/lesson/1/5')
    } else if (lessonData.id === 2) {
      props.props.history.push('/lesson/2/18')
    } else if (lessonData.id === 3) {
      props.props.history.push('/lesson/3/31')
    }
  }
  console.log(lessonData, titles)

  useEffect(() => {
    getLessonData(id)
    hideTransition();
  }, [id]);

  return (
    <div id="lessonsBodyContainer">
      <div className="lessonsBody">
        <div className='lessonsIntroDiv'>
          <LoadingOverlay
            active={loadState}
            spinner
            styles={{
              overlay: base => ({
                ...base,
                background: "white"
              })
            }}
            fadeSpeed={200}
          >
            <ReactMarkDown source={lessonData.intro} />
          </LoadingOverlay>
        </div>
          {/* <Link className='aLink' to="/lesson/1/4">
            <button className="link-button">HTML</button>
          </Link>
          <Link className='aLink' to="/lesson/2/17">
            <button className="link-button">CSS</button>
          </Link>
          <Link className='aLink' to="/lesson/3/31">
            <button className="link-button">JAVASCRIPT</button>
          </Link> */}
            <button onClick={handleSubmit} className="link-button">lets go!</button>
        <LoadingOverlay
          active={loadState}
          spinner
          styles={{
            overlay: base => ({
              ...base,
              background: "white"
            })
          }}
          fadeSpeed={200}
        >
        </LoadingOverlay>
      </div>
      {/* <ReactMarkDown source={lesson_data.lesson_description} /> */}
    </div>
  );
};
