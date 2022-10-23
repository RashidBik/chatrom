<script>
import store from '../../store';
let country;
let city;
let fell;
const handleSubmit = () => {
    let data = {
        id: Math.random() * 10,
        country: country,
        city: city,
        fell: fell,
      }
  store.update((currentStore) => {
    return [...currentStore, data];
  })
}
</script>
<div>
    <form on:submit|preventDefault={handleSubmit} >
       Country <input type="text" placeholder="country" bind:value={country}>
       City  <input type="text" placeholder="city name" bind:value={city} >
       Filling <input type="text" bind:value={fell} >
       <button type="submit" class="bg-gray-300 m-4 p-2 ">check</button>
    </form>
</div>
<style>
    input {
        background:#ddd;
    }
    form {
        display: flex;
        flex-direction: column;
    }
</style>