<script>
    import store from '../../store';
    import ActiveCity from './ActiveCity.svelte';

let tabActive;
</script>

{#each $store as val}
<div class="inline-flex">
    <div class:active={tabActive === val.id}>
      <button on:click={()=> tabActive = val.id}>
        {val.city}
    </button>
    </div>
</div>


{/each}
<ActiveCity currentId={tabActive} />

<style>
    .active {
        border: 1px dashed red;
    }
</style>