import { writable } from "svelte/store";

export var FeedbackStore = writable([
    {
        id: 1,
    rating: 1,
      name: 'Rashid',
      text: 'Learn Svelte Fundamental And SSR In SvelteKit'
    },
    {
        id: 2,
    rating: 2,
      name: 'bik',
      text: 'Violon For Thirty Minutes'
    },
    {
        id: 3,
    rating: 3,
      name: 'foog',
      text: 'Washing The Dishes'
    }
  ])