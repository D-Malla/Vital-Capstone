import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactMarkdown from "react-markdown";
import LoadingOverlay from "react-loading-overlay";
import SyntaxHighlighter from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';




import { getLessonTitles, getLessonData, getLessonImage } from "../../actions/vital.actions";

export default props => {
  const lessons_list = useSelector(
    appState => appState.vitalReducer.get_lessons
  );
  const lesson_data = useSelector(
    appState => appState.vitalReducer.lesson_data
  );

  const description = lesson_data.lesson_description && lesson_data.lesson_description.split('```')
  const desc = []

  const desc_objs = description && description.forEach(item => {
    if (item.substring(0, 4)  === 'html') {
      desc.push(
        <SyntaxHighlighter language={'html'} style={dark}>
          {item.substring(4)}
        </SyntaxHighlighter>
      )
    } else if (item.substring(0, 3) === 'css') {
      desc.push(
        <SyntaxHighlighter language={'css'} style={dark}>
          {item.substring(3)}
        </SyntaxHighlighter>
      )
    } else if (item.substring(0,2) === 'js') {
      desc.push(
        <SyntaxHighlighter language={'js'} style={dark}>
          {item.substring(2)}
        </SyntaxHighlighter>
      )
    } else {
      desc.push(<ReactMarkdown source={item} />)
    }
  })
  console.log( 'desc', desc)
  // const lessonImage = useSelector(
  //   appState => appState.vitalReducer.lessonImage
  // );
  const [language, setLanguage] = useState('')
  // This state is for the transition effect
  const [loadState, setLoadState] = useState(true);

  let id = props.id;
  const inid = props.inid;
  //Grab the numbers and increment or decrement by 1 in order to change pages
  const prev_id = Number(inid) - 1;
  const next_id = Number(inid) + 1;

  function hideTransition() {
    if (loadState === true) {
      setTimeout(function() {
        setLoadState(false);
      }, 100);
    } else {
      setLoadState(false);
    }
  }
  //This useEffects handle the transition between topics as well as handle the transition overlay
  useEffect(() => {
    if(id == 1){
      setLanguage('html')
    }else if(id == 2){
      setLanguage('css')
    }else if(id == 3){
      setLanguage('javascript')
    }
    hideTransition();
    getLessonData(inid);
    getLessonImage(inid)
  }, [props.id, props.inid]);
  useEffect(() => {
    getLessonTitles(lesson_data.parent_id);
  }, [lesson_data]);
  
  return (
    <div id="lessonBodyContainer">
      <aside className="lessonAside">
        <LoadingOverlay
          active={loadState}
          styles={{
            overlay: base => ({
              ...base,
              background: "white"
            })
          }}
          fadeSpeed={200}
        >
          <div>
            {lessons_list.map(item => (
              <Link
                key={item.id}
                className="lesson-links"
                to={"/lesson" + "/" + item.parent_id + "/" + item.id}
              >
                {item.lesson}{" "}
              </Link>
            ))}
          </div>
          <div className="lessonCourseDiv">
            <Link className="aLink" to="/lesson/1/4">
              <button className="link-button">HTML</button>
            </Link>
            <Link className="aLink" to="/lesson/2/17">
              <button className="link-button">CSS</button>
            </Link>
            <Link className="aLink" to="/lesson/3/31">
              <button className="link-button">JAVASCRIPT</button>
            </Link>
          </div>
        </LoadingOverlay>
      </aside>

      <div>
        {/* The following code adds loading overlay onto the items and renders out both the lesson descriptions and the next and continue buttons */}

        <LoadingOverlay
          active={loadState}
          styles={{
            overlay: base => ({
              ...base,
              background: "white"
            })
          }}
          fadeSpeed={100}
        >
          <div className="lessonBodyDiv">
            <article className="lessonBody">
              {desc}
            </article>
          </div>
          
          
          <div className="lessonButtonDiv">           
//             {next_id !== 41 ? (
//               <Link className="aLink" to={"/lesson/" + id + "/" + next_id}>
//                 <button className="link-button" type="button">
//                   CONTINUE
//                 </button>
//               </Link>
//             ) : (
//               ""
//             )}
            <LoadingOverlay
              active={loadState}
              styles={{
                overlay: base => ({
                  ...base,
                  background: "white"
                })
              }}
              fadeSpeed={200}
            >
              {prev_id > 3 ? (
                <Link className="aLink" to={"/lesson/" + id + "/" + prev_id}>
                  <button className="link-button" type="button">
                    PREV
                  </button>
                </Link>
              ) : (
                ""
              )}

              {lesson_data.last_lesson !== 1 ? (
                <Link className="aLink" to={"/lesson/" + id + "/" + next_id}>
                  <button className="link-button" type="button">
                    CONTINUE
                  </button>
                </Link>
              ) : (
                ""
              )}
              {lesson_data.last_lesson === 1 ? (
                <Link
                  className="aLink"
                  to={
                    "/quiz/" +
                    lesson_data.parent_id +
                    "/" +
                    lesson_data.parent_id
                  }
                >
                  <button className="link-button" type="button">
                    Quiz
                  </button>
                </Link>
              ) : (
                ""
              )}
            </LoadingOverlay>
          </div>
        </LoadingOverlay>
      </div>
    </div>
  );
};
