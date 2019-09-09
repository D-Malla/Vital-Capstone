const initialState = {
  lessons_title: [],
  lessons: [],
  get_lessons: [],
  lesson_data: {},
  lessonImage: []
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
      return { ...state, lesson_data: action.payload };
    case "LESSON_IMAGE":
      return {...state, lessonImage: action.payload}
    default:
      return state;
  }
}
