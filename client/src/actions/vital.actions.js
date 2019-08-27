import store from "../store";
import axios from "axios";
import { Action } from "rxjs/internal/scheduler/Action";

// MUST CHANGE localhost to IP ADDRESS
// const socket = io.connect('http://localhost:8000')

// socket.on('new person', name => {
//   console.log(name)
// })

// export function submitName(name) {
//   socket.emit('name', name)
// }

export function lessonsTitle() {
  axios.get("/api/lessons_title").then(resp => {
    store.dispatch({
      type: "LESSONS_TITLE",
      payload: resp.data.lessons_title
    });
  });
}
export function matchLessons(slug) {
  axios.get("/api/lesson_title/" + slug).then(resp => {
    console.log(resp.data);
    store.dispatch({
      type: "LESSONS",
      payload: resp.data
    });
  });
}

export function getLessonTitles(id) {
  axios.get("/api/lessons_title/" + id).then(resp => {
    console.log(resp.data);
    store.dispatch({
      type: "LIST_LESSONS",
      payload: resp.data
    });
  });
}
export function getLessonData(id) {
  axios.get("/api/ind_lesson/" + id).then(resp => {
    store.dispatch({
      type: "LESSON_DATA",
      payload: resp.data
    });
  });
}
