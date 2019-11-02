const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

const createNowReviewingNotification = notif => {
  return admin.firestore
    .collection("notifications")
    .add(notif)
    .then(doc => {
      console.log("Now Reviewing notification added!");
    });
};

exports.reviewCreated = functions.firestore
  .document("reviews/{reviewID}")
  .onCreate(doc => {
    const review = doc.data();
    const nowReviewingNotification = {
      content: "Wrote a new review",
      user: `${review.authorUser}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    };

    return createNowReviewingNotification(nowReviewingNotification);
  });

exports.userJoined = functions.auth.user().onCreate(user => {
  return admin
    .firestore()
    .collection("users")
    .doc(user.uid)
    .get()
    .then(doc => {
      const newUser = doc.data();
      const notif = {
        content: "Started reviewing",
        user: `${newUser.userName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
      };
      return createNowReviewingNotification(notif);
    });
});
