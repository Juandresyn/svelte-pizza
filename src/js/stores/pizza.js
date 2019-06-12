import { writable, readable } from "svelte/store/";

export const orderToppings = writable([]);
export const pizza = readable({
    basePrice: 13000,
});