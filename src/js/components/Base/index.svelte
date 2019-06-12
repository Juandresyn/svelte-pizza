<style>
    @import "./styles.css";
</style>

<script>
    export let cheese;

    $: cheeseClass = cheese ? 'pizza-base--cheese' : '';
</script>

<div class="pizza-base {cheeseClass}">
</div>