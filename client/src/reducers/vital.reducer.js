const initialState = {
  lessons_title: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "LESSONS_TITLE":
      return { ...state, lessons_title: action.payload };

    default:
      return state;
  }
}
