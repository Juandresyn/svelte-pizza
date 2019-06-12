<style>
    @import "./styles.css";
</style>

<script>
    export let topping;
</script>

<div class="pizza-topping"
    style="background-image: url('/img/pizza/toppins/{topping.img}-extra.png');"
    title="{topping.title}">
</div>