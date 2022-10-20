import { writable } from "svelte/store";

export var FeedbackStore = writable([
    {
        id: 1,
    rating:'Learn',
      name: 'Rashid',
      text: 'lets see kkkkkkkwhat happens now and thed'
    },
    {
        id: 2,
    rating:'Exercize',
      name: 'bik',
      text: 'so lets see jjjwhat happens now and thed'
    },
    {
        id: 3,
    rating:'Home Work',
      name: 'foog',
      text: 'see what happens now and jkdfal afaslthed'
    }
  ])