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
                <p style="padding: 0 5px; color:coral">
                    {#if item.rating === 1}
                        Learn
                    {:else if item.rating === 2}
                        Exercize
                    {:else if item.rating === 3}
                        Home Work    
                    {/if}
                </p>  
                <button on:click={()=> handleDelete(item.id)} class="num-display">x</button>
            </div>
            <p class="text">{item.text}</p>
        </div>
    </Card>
</div>
<style>
.text {
    font-size: large;
    font-weight: bold;
    text-align: left;
    padding-left: 40px;
}
.lists {
    padding: 0 !important;
    margin: 0 !important;

}
.card {
    background: #fff;
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