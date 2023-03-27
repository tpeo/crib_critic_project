import admin from "firebase-admin";
import serviceAccount from './cred.json?type=json' assert { type: "json" };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

export {db};