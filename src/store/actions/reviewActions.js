export const createSongReview = review => {
  return (dispatch, getState) => {
    // make async call to db
    dispatch({ type: "CREATE_SONG_REVIEW", review: review });
  }; // thunk allows action to return function
};
