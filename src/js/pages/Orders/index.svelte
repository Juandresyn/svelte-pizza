<script>
    import { onMount } from 'svelte';
	import firebase from 'firebase';
    import firebaseConfig from '../../utils/config/fire.js';
    import { objectToArray } from '../../utils/common.js';

    let ordersList = [];
	let orderToppings = [];

	firebase.initializeApp(firebaseConfig);
	// Get a reference to the database service
	let database = firebase.database();

	onMount(() => {
		database.ref('/orders/').orderByChild('user_id').equalTo('67890').on('value', (snapshot) => {
			ordersList = objectToArray(snapshot.val());
			ordersList.push ({ id: 'None', toppings: [], time: 'None'})
		}, (error) => {
			console.log("Error: " + error.code);
		});

	});

	const handleClick = ({target}) => {
		orderToppings = ordersList.find(i => i.id === target.value).toppings;
	}
</script>

{#each ordersList as orderItem, i}
    <label for="topping-{orderItem.id}">
        <input id="topping-{orderItem.id}"
            name="previusOrder"
            type="radio"
            value="{orderItem.id}"
            on:change="{handleClick}"> {orderItem.time}
    </label>
{/each}

