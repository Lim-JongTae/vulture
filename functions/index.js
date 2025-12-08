/**
 * Import function triggers from their respective submodules:
 *
*
* See a full list of supported triggers at https://firebase.google.com/docs/functions
*/
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
    //   logger.info("Hello logs!", {structuredData: true});
    //   response.send("Hello from Firebase!");
    // });
const {onCall} = require("firebase-functions/v2/https");
const {onDocumentWritten} = require("firebase-functions/v2/firestore");
// import { httpsCallable } from 'firebase/functions';


const functions = require('firebase-functions/v1')
const admin = require('firebase-admin')
admin.initializeApp()
const db = admin.firestore();

// const { $functions } = useNuxtApp()

exports.addAdminRole = functions.https.onCall((data, context) => {
    return admin
    .auth()
    .getUserByEmail(data.email)
    .then((user) => {
        return admin.auth().setCustomUserClaims(user.uid, { admin: true,})
    })
    .then(() => {
        return {
            message: `귀하의 ${data.email}이 관리자계정으로 등록되었습니다.!!`
        }
    })
    .catch((err) => {
        console.log(err)
    })
})



// 사용자 생성 시 트리거되는 함수
exports.incrementUserCount = functions.auth.user().onCreate(async (user) => {
  
  const userCountRef = db.collection('metrics').doc('userCount');
  await db.runTransaction(async (transaction) => {
    const doc = await transaction.get(userCountRef);
    if (!doc.exists) {
      transaction.set(userCountRef, { count: 1 });
    } else {
      const newCount = doc.data().count + 1;
      transaction.update(userCountRef, { count: newCount });
    }
  });
});