import { writable } from "svelte/store";

const store = writable([
    {
        id: 1,
        country: 'Afghanistan',
        city: 'Zabolak',
        fell: 'cold',
        temp: 28,
        elevation: 1000,
        today: '2022,10,22',
        fog: 'foggy',
        sun: 'sunny',
        rain: '13%',
        wind: '6km/h',
    },
    {
        id: 2,
        country: 'Afghanistan',
        city: 'Kabul',
        fell: 'cold',
        temp: 10,
        elevation: 2000,
        today: '2022,10,22',
        fog: 'foggy 20%',
        sun: 'sunny 5%',
        rain: '13%',
        wind: '6km/h',
    },

]);

export default store;