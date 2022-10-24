<script>
    import WeaGraph from "./graph/WeaGraph.svelte";
    import store from "../../store";
    import { fly } from "svelte/transition";
   export let currentId;
   
</script>

{#each $store as item}

{#if item.id === currentId}
<div class="bg-slate-50 md:p-4 w-full" transition:fly="{{ x: 400, duration: 100}}" >
    <div class="text-xl font-black">{item.city}</div>
    <div class="grid grid-cols-2 bg-slate-200">
        <div class="text-center pt-10">
            <span class="text-6xl p-2 font-bold bg-slate-400 
            rounded-full text-center">{item.temp}</span>
        </div>
        <div class=""><WeaGraph /></div>
    </div>
    <div class="flex flex-wrap">
        <div class="box">13%elavation</div>
        <div class="box">13%wind</div>
        <div class="box">13%rain</div>
        <div class="box">13%fog</div>
        <div class="box">13%sun</div>
    </div>
    <div class="flex bg-slate-300 p-4 ">
        <p class="text-xl font-black ">Today &RightArrow; </p>
        <span class="text-sm px-4">{new Date()}</span>
    </div>
</div>
{/if}
{/each}

<style>
    .box{
        padding: 12px;
        margin: 4px;
        background:#ddd;
    }
</style>