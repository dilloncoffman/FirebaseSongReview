export const signIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then(() => {
        dispatch({ type: "SIGN_IN_SUCCESS" });
      })
      .catch(err => {
        dispatch({ type: "SIGN_IN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGN_OUT_SUCCESS" });
      });
  };
};

export const signUp = newUser => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then(res => {
        // create record in firestore for signed up user
        console.log(res);
        return firestore
          .collection("users")
          .doc(res.user.uid)
          .set({
            username: newUser.userName,
            initial: newUser.userName[0]
          });
      })
      .then(() => {
        // dispatch action that sign up was successful
        dispatch({ type: "SIGN_UP_SUCCESS" });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: "SIGN_UP_ERROR", err });
      });
  };
};
