import { initializeApp } from 'firebase/app'
import { getDatabase, goOffline, goOnline, onDisconnect, onValue, push, ref, runTransaction } from 'firebase/database'

const firebaseConfig = {
    apiKey: 'AIzaSyCEddLSUZxAyRjnXnI7Ac6z-2QazZkQRJo',
    authDomain: 'remountit.firebaseapp.com',
    databaseURL: 'https://remountit-default-rtdb.firebaseio.com',
    projectId: 'remountit',
    storageBucket: 'remountit.appspot.com',
    messagingSenderId: '1041645936040',
    appId: '1:1041645936040:web:c9740987fe7ae606a1919d'
}

const app = initializeApp(firebaseConfig)
const db = getDatabase(app)

export { db, goOffline, goOnline, onDisconnect, onValue, push, ref, runTransaction }