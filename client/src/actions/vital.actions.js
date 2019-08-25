import store from "../store";
import axios from "axios";

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
