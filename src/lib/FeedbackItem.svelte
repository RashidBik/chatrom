<script>
    import { FeedbackStore } from "./store";
    import Card from "./Card.svelte";
    export let item ;
    const handleDelete = (itemId) => {
        FeedbackStore.update((currentFeedback) => {
            return currentFeedback.filter(item => item.id != itemId)
        })
    }
</script>
<div class="lists">
    <Card>
        <div class="card">
            <div class="num-display">
                <p style="padding: 0 5px">{item.rating}</p>  
                <button on:click={()=> handleDelete(item.id)} class="num-display">x</button>
            </div>
            <p>{item.text}</p>
        </div>
    </Card>
</div>
<style>
.lists {
    padding: 0 !important;
    margin: 0 !important;

}
.card {
    background: #ddd;
    margin: 0;
    padding: 2px !important;
    margin: 0 !important;
    border-radius: 15px;
    line-height: 0%;

}
.num-display {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
}
button {
    padding: 4px !important;
}
</style> 