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
        time: '8:00',
        week: 'sun',
        month: 'sep',
        year: '2022',
        rain: '13%',
        wind: '6km/h',
    },
    {
        id: 2,
        country: 'Afghanistan',
        city: 'Kabul',
        fell: 'cold',
        temp: 28,
        elevation: 1000,
        today: '2022,10,22',
        time: '8:00',
        week: 'sun',
        month: 'sep',
        year: '2022',
        rain: '13%',
        wind: '6km/h',
    },
]);

export default store;