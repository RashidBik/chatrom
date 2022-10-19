<script>
    import { FeedbackStore } from "src/Store";
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";
let feedback = [];
</script>
<main>
    {#each feedback as fb }
    <div in:scale out:fade="{{duration: 500}}">
        <FeedbackItem  item={fb} />
    </div>
    {/each}
</main>
<style>

</style>