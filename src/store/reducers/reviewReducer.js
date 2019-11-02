const initState = {};

const reviewReducer = (state = initState, action) => {
  // check action type
  switch (action.type) {
    case "CREATE_SONG_REVIEW":
      console.log("Created song review", action.review);
      return state;
    case "CREATE_SONG_REVIEW_ERROR":
      console.log("Create review error", action.err);
      return state;
    default:
      return state;
  }
};

export default reviewReducer;
