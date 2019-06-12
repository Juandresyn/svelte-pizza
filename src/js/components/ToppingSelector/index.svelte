<style>
    @import "./styles.css";
</style>

<script>
    import firebase from 'firebase';
    import {create_UUID} from '../../utils/common.js';

    import { toppingsList } from "../../stores/toppings.js";
    import { orderToppings, pizza } from "../../stores/pizza.js";

    export let toppings = [];
    let totalPrice = 0;

    $: orderToppings.set($toppingsList.filter(i => toppings.filter(j => j === i.id)[0]));
    $: toppingCount = $orderToppings.length;
    $: totalPrice = $pizza.basePrice + ( $orderToppings.length > 0 ? $orderToppings.reduce((a, b) => ({ price: a.price + b.price})).price : 0);

    const findTopping = (tpp) => {
        return $toppingsList.find((t) => t.id === tpp);
    };

    const handleClick = (event) => {
        const T = findTopping(event.target.value);
        const alreadyAdded = $orderToppings.find(({ id }) => id === T.id);

        orderToppings.update((items) => {
            return alreadyAdded ? items.filter((i) => i.id !== T.id) : [...items, T] ;
        });
    };

    const handleSave = () => {
        const toppingsIds = $orderToppings.map(i => i.id);
        const now = new Date();

        firebase.database().ref(`orders/${create_UUID()}`).set({
            id: create_UUID(),
            user_id: '67890',
            toppings: toppingsIds,
            time: now.toLocaleString(),
        });
    }
</script>

<div class="topping-selector">
    <form>
        {#each $toppingsList as topp, i}
            <label for="topping-{topp.id}">
                <input id="topping-{topp.id}"
                    type="checkbox"
                    checked="{toppings.find((i) => i === topp.id)}"
                    value="{topp.id}"
                    on:change="{handleClick}"> {topp.title}
            </label>
        {/each}
    </form>
    <h3>$ {totalPrice}</h3>
    <p>Numero de Toppings: {toppingCount}</p>
    <button on:click="{handleSave}">Save</button>
</div>