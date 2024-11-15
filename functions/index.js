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
import { httpsCallable } from 'firebase/functions';
// import { functions } from "firebase/functions";

const functions = require('firebase-functions')
const admin = require('firebase-admin')
admin.initializeApp()
const { $functions } = useNuxtApp()

exports.addAdminRole = $functions.https.onCall((data, context) => {
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
