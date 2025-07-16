import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAv23pEzyKyqWnLFc9twwClFf7iY9mMA0M',
  authDomain: 'clubdscc.firebaseapp.com',
  projectId: 'clubdscc',
  storageBucket: 'clubdscc.appspot.com',
  messagingSenderId: '355759537454',
  appId: '1:355759537454:web:4118ecfa742e9078f14ebf',
  measurementId: 'G-CS3BMKJ1JG'
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { app, db }
