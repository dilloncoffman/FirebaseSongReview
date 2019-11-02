export const createSongReview = review => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const userID = getState().firebase.auth.uid;

    firestore
      .collection("reviews")
      .add({
        ...review,
        authorUser: profile.userName,
        authorID: userID,
        videoID: "youtubeVideoIDFromCloudFunction",
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_SONG_REVIEW", review: review });
      })
      .catch(err => {
        dispatch({ type: "CREATE_SONG_REVIEW_ERROR", err });
      });
  }; // thunk allows action to return function
};
