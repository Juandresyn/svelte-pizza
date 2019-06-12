import { readable } from "svelte/store/";

export const toppingsList = readable([
    {
        id: 'cheese',
        title: 'Queso',
        img: 'cheese',
        price: 2000,
    },
    {
        id: 'ajo',
        title: 'Ajo',
        img: 'ajo',
        price: 1000,
    },
    {
        id: 'jamon',
        title: 'Jamon',
        img: 'jamon',
        price: 3000,
    },
    {
        id: 'bacon',
        title: 'Tocineta',
        img: 'bacon',
        price: 3000,
    },
    {
        id: 'peperoni',
        title: 'Peperoni',
        img: 'peperoni',
        price: 3000,
    },
    {
        id: 'cebolla',
        title: 'Cebolla',
        img: 'cebolla',
        price: 3000,
    },
    {
        id: 'salami',
        title: 'Salami',
        img: 'salami',
        price: 3000,
    },
    {
        id: 'pina',
        title: 'Piña',
        img: 'pina',
        price: 1000,
    },
    {
        id: 'pimenton',
        title: 'Pimenton',
        img: 'pimenton',
        price: 1000,
    },
    {
        id: 'jalapeno',
        title: 'Jalapeño',
        img: 'jalapeno',
        price: 2000,
    },
    {
        id: 'hongos',
        title: 'Champiñon',
        img: 'hongos',
        price: 1000,
    },
]);