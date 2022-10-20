<script>
    import { FeedbackStore } from "./store";
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";

$: count = $FeedbackStore.length;
$: average = $FeedbackStore.reduce((a, {rating}) => a + rating, 0) / $FeedbackStore.length;
</script>
<main>
    <div class="rating">
        <span>All {count}</span>
        <span>Rating Average {average}</span>
    </div>
    {#each $FeedbackStore as fb }
    <div in:scale out:fade="{{duration: 500}}">
        <FeedbackItem  item={fb} />
    </div>
    {/each}
</main>
<style>
 main{
    margin: 0;
    padding: 0;
 }
 .rating {
    display: flex;
    justify-content: space-around;
 }
</style>