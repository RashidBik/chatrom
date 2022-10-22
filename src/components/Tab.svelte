<script>
    import { fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    import AddCity from "./AddCity.svelte";
    import CurrentCity from "./CurrentCity.svelte";
    const dispatch = createEventDispatcher();
    export let tabs;
    export let activeTab;

</script>
<div class="text-center mt-4">
    <div>
        {#each tabs as tab}
            <button  on:click={() => dispatch('toggleTabs',{tab})}>
                <div class:active={activeTab === tab}>{tab}</div>
            </button>
        {/each}
    </div>
</div>
<style>
    button {
        margin: 0 6px;
    }
    .active{
        border-bottom: 1px solid red;
        color: red;
    }
</style>