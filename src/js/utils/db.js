import firebase from 'firebase';
import firebaseConfig from './config/fire.js';

export default class Database {
    constructor() {
        if (!Database.instance) {
            firebase.initializeApp(firebaseConfig);
            Database.instance = firebase.database();
        }

        return Database.instance;
    }

    getInstance() {
        return Database.instance;
    }

    off() {
        return firebase.off();
    }
}