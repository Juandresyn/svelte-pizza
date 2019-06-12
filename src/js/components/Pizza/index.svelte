<style>
    @import "./styles.css";
</style>

<script>
    import Base from "../Base/index.svelte";
    import Topping from "../Topping/index.svelte";
    import { orderToppings } from "../../stores/pizza.js";

    export let order = {};

    $: listOfToppings = order.length > 0 ? $orderToppings : order.toppings;
    $: hasCheese = $orderToppings.find((i) => i.id === 'cheese');


</script>

<div class="pizza">
    <Base cheese="{hasCheese}" />
    {#each $orderToppings as topp, i}
        {#if topp.id !== 'cheese'}
            <Topping topping="{topp}" />
        {/if}
    {/each}
</div>
