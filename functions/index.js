const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();



exports.newUserSignUp = functions.auth.user().onCreate(user => {
  // for background triggers you must return a value/promise
  return admin.firestore().collection('users').doc(user.uid).set({
    email: user.email,
    upvotedOn: [],
  });
});

exports.addSchool = functions.https.onCall((data, context) => {
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated', 
      'only authenticated users can add requests'
    );
  }
  if (data.text.length > 30) {
    throw new functions.https.HttpsError(
      'invalid-argument', 
      'request must be no more than 30 characters long'
    );
  }
  return admin.firestore().collection('schools').add({
    name: data.name.thai
  });
});

