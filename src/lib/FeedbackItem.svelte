<script>
    import { FeedbackStore } from "../Store";
    import Card from "./Card.svelte";
    export let item ;
    const handleDelete = (itemId) => {
        FeedbackStore.update((currentFeedback) => {
            return currentFeedback.filter(item => item.id != itemId)
        })
    }
</script>
<Card>
    <div class="num-display">
        {item.rating}
    </div>
    <button on:click={()=> handleDelete(item.id)} class="num-display">x</button>
    <p>{item.text}</p>
</Card>
<style>

</style> 