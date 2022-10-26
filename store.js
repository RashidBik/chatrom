import { writable } from "svelte/store";

const store = writable([
    {
        city_name: "Four Oaks",
        country_code: "US",
        lat: 35.5,
        lon: -78.5,
        state_code: "NC",
        timezone: "America/New_York",
    },

]);

export default store;

