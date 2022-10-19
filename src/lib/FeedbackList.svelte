<script>
    import { FeedbackStore } from "./store";
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";

</script>
<main>
    {#each $FeedbackStore as fb }
    <div in:scale out:fade="{{duration: 500}}">
        <FeedbackItem  item={fb} />
    </div>
    {/each}
</main>
<style>

</style>