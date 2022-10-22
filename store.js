import { writable } from "svelte/store";

const store = writable([
    {
        id: 1,
        city: 'Kabul',
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