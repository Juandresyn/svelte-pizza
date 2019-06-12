// import firebase from 'firebase';
// import firebaseConfig from './utils/config/fire.js';
import App from './App.svelte';

// firebase.initializeApp(firebaseConfig);
// Get a reference to the database service
// const database = firebase.database();

const app = new App({
	target: document.body,
});

window.app = app;

export default app;