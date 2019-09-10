import store from "../store";
import axios from "axios";

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
    store.dispatch({
      type: "LESSONS",
      payload: resp.data
    });
  });
}

export function getLessonTitles(id) {
  axios.get("/api/lessons_title/" + id).then(resp => {
    store.dispatch({
      type: "LIST_LESSONS",
      payload: resp.data
    });
  });
}

export function getLessonData(id) {
  axios.get("/api/ind_lesson/" + id).then(resp => {
    console.log("data",resp.data)
    store.dispatch({
      type: "LESSON_DATA",
      payload: resp.data[0]
    });
  });
}
export function getLessonImage(id) {
  axios.get("/api/ind_lesson/" + id).then(resp => {
    console.log("image",resp.data)
    store.dispatch({
      type: "LESSON_IMAGE",
      payload: resp.data
    });
  });
}
