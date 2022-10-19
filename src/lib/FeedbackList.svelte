<script>
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";

    export let feedback = [];
    console.log(feedback);
    const deletFeedback = () => {
        console.log('some delete');
    }

</script>
<main>
    {#each feedback as fb (fb.id)}
    <div in:scale out:fade="{{duration: 500}}">
        <FeedbackItem  item={fb} />
    </div>
    {/each}
</main>
<style>

</style>