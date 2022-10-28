<script>
    let names = [
        'Ali', 'Ahmad', 'Rashid', 'Bashir', 'Ramazan','Aziz'
    ]
</script>

<div>
    {#each names as name }
        <div class="flex items-center ">
            <div class="p-3 border rounded-full w-10 h-10 bg-orange-500">
                <img src="#" alt="">
            </div>
            <p class="p-2">{name}</p>
        </div>
    {/each}
</div>