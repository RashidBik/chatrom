<script>
    import WeaGraph from "./WeaGraph.svelte";

export let val;


</script>

<div class="bg-slate-50 shadow-lg p-3">
    <div class="text-xl font-black">{val.city}</div>
    <div class="text-8xl p-4 bg-slate-200">
        <WeaGraph />
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
<style>
    .box{
        padding: 12px;
        margin: 4px;
        background:#ddd;
    }
</style>