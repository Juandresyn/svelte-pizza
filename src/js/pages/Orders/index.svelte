<script>
    import { onMount, onDestroy } from 'svelte';
    import Database from '../../utils/db.js';
	import { objectToArray } from '../../utils/common.js';
	import { userEmail } from '../../stores/user.js';
	import Pizza from "../../components/Pizza/index.svelte";
    import ToppingSelector from "../../components/ToppingSelector/index.svelte";

    let ordersList = [];
	let orderToppings = [];
	const db = new Database;

	onMount(() => {
		db.ref('/orders/').orderByChild('user_id').equalTo($userEmail).on('value', (snapshot) => {
			ordersList = objectToArray(snapshot.val());
			ordersList.push ({ id: 'None', toppings: [], time: 'None'})
		}, (error) => {
			console.log("Error: " + error.code);
		});

	});

	onDestroy(() => {
		db.off;
	});

	const handleClick = ({target}) => {
		orderToppings = ordersList.find(i => i.id === target.value).toppings;
	}
</script>

<style>
	.pizza-creator {
		display: flex;
		flex-direction: column;
	}

	@media screen and (min-width: 1024px) {
		.pizza-creator {
			flex-direction: row;
		}
	}
</style>

{#each ordersList as orderItem, i}
    <label for="topping-{orderItem.id}">
        <input id="topping-{orderItem.id}"
            name="previusOrder"
            type="radio"
            value="{orderItem.id}"
            on:change="{handleClick}"> {orderItem.time}
    </label>
{/each}

<div class="pizza-creator">
    <Pizza />
    <ToppingSelector isView="{true}" toppings="{orderToppings}" />
</div>
