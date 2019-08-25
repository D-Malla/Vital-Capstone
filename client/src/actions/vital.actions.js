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

export function cssQuestion() {
  axios.get("/api/css_question").then(resp => {
    store.dispatch({
      type: "CSS_QUESTION",
      payload: resp.data.css_question
    });
  });
}
