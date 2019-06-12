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

<script>
    import Pizza from "../../components/Pizza/index.svelte";
    import ToppingSelector from "../../components/ToppingSelector/index.svelte";
    
    export let orderToppings = [];
</script>

<div class="pizza-creator">
    <Pizza />
    <ToppingSelector toppings="{orderToppings}" />
</div>