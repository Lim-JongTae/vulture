importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js')


const {
  apiKey,      
  messagingSenderId,
  appId,
  measurementId
} = useRuntimeConfig().public

const firebaseConfig = {
  apiKey,
  authDomain: 'ecobest-e49b0.firebaseapp.com',
  databaseURL: 'https://ecobest-e49b0-default-rtdb.firebaseio.com',
  projectId: 'ecobest-e49b0',
  storageBucket: 'ecobest-e49b0.appspot.com',
  messagingSenderId,
  appId,
  measurementId
};
// 중복되는  firebase-messaging-sw.js 실행을 막음
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);  
};
const messaging = firebase.messaging()


messaging.onBackgroundMessage(payload => {
  console.log('Recevied a bg message: ', payload)
  const title = payload.title
  const notification = {
    body: 'Notification body',
    icon: '/favicon.ico' 
  }
  // Show notification when message received
  self.registration.showNotification(title, notification)
})
