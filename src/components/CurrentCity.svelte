<script>
    import store from '../../store';
    import Card from './Card.svelte';


</script>
<div class="px-4 mt-10">
    {#each $store as val}
        <Card {val} />            
    {/each}
</div>