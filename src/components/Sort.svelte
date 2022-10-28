<script>
    let alphabete = ['*','A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
</script>

<div class="flex flex-col">
    {#each alphabete as abc }
        <div class="border text-[12px]">{abc}</div>
    {/each}
</div>