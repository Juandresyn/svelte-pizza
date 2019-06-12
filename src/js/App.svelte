<style>
	.nav {
		margin: 0 auto;
		max-width: 960px;
		padding: 15px 20px;
	}
</style>

<script>
	import { Router, Route, Link } from 'svelte-routing';
	import SignOn from './components/SignOn/index.svelte';
	import NewOrder from './pages/NewOrder/index.svelte';
	import Orders from './pages/Orders/index.svelte';
	import { userEmail } from './stores/user.js';

	export let url = '';
	let routes = {
		newOrder: '/',
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
		{#if $userEmail !== ''}
			<Route path="{routes.previousOrders}" component="{Orders}" />
		{/if}
	</div>
</Router>

---------------------
<SignOn></SignOn>