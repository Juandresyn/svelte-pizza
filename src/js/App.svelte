<style>
	.nav {
		margin: 0 auto;
		max-width: 960px;
		padding: 15px 20px;
	}

	.nav-item {
		margin-right: 30px;
	}
</style>

<script>
	import { Router, Route, Link } from 'svelte-routing';
	import NewOrder from './pages/NewOrder/index.svelte';
	import Orders from './pages/Orders/index.svelte';

	export let url = '';
	let routes = {
		newOrder: 'new-order',
		previousOrders: 'my-orders',
	};

	function getProps({ location, href, isPartiallyCurrent, isCurrent }) {
		const isActive = href === "/" ? isCurrent : isPartiallyCurrent || isCurrent;
		// The object returned here is spread on the anchor element's attributes
		if (isActive) {
		return { class: "active" };
		}
		return {class: "nav-item"};
	}
</script>

<Router url="{url}">
	<nav class="nav">
		<Link to="{routes.newOrder}" getProps="{getProps}">Create Pizza</Link>
		<Link to="{routes.previousOrders}" getProps="{getProps}">Previous Orders</Link>
	</nav>

	<div>
		<Route path="{routes.newOrder}" component="{NewOrder}" />
		<Route path="{routes.previousOrders}" component="{Orders}" />
	</div>
</Router>