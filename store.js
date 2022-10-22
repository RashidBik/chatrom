import { writable } from "svelte/store";

const store = writable([
    {
        id: 1,
        city: 'Kabul',
        temp: 28,
        elevation: 1000
    },
    {
        id: 2,
        city: 'Wardak',
        temp: 30,
        elevation: 1000
    },
    {
        id: 3,
        city: 'Balkh',
        temp: 12,
        elevation: 1500
    },

]);

export default store;