<script>
    import { onMount } from 'svelte';
    import firebase from 'firebase';
    // import firebaseConfig from '../../utils/config/fire.js';
    import Database from '../../utils/db.js';
    import { userEmail } from '../../stores/user.js';

    const db = new Database;

    onMount(() => {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(function(result) {
            userEmail.set(result.user.email);
        }).catch(function(error) {
            console.log('Firebase Error', error)
        });

        var ui = new firebaseui.auth.AuthUI(firebase.auth());
        ui.start('#firebaseui-auth-container', uiConfig);
    });
</script>

{#if $userEmail === ''}
    <h1>Welcome to My Awesome App</h1>
    <div id="firebaseui-auth-container"></div>
{/if}