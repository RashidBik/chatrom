<script>
export let val;


</script>

<div class="bg-slate-50 shadow-lg p-3">
    <div>Weather</div>
    <div class="text-8xl">{val.temp}</div>
    <div>
        <div>13%elavation</div>
        <div>13%wind</div>
        <div>13%rain</div>
        <div>13%fog</div>
        <div>13%sun</div>
    </div>
    <div>Today <span class="text-sm">{new Date()}</span></div>
</div>