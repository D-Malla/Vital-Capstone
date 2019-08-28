const initialState = {
  lessons_title: [],
  lessons: [],
  get_lessons: [],
  lesson_data: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "LESSONS_TITLE":
      return { ...state, lessons_title: action.payload };
    case "LESSONS":
      return { ...state, lessons: action.payloads };
    case "LIST_LESSONS":
      return { ...state, get_lessons: action.payload };
    case "LESSON_DATA":
      console.log("lesson data", action.payload);

      return { ...state, lesson_data: action.payload };
    default:
      return state;
  }
}
