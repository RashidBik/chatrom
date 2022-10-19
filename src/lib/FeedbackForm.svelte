<script>
    import { createEventDispatcher } from "svelte";
    import Button from "./Button.svelte";
    import Card from "./Card.svelte";
    import RatingSelect from "./RatingSelect.svelte";

    let text = '';
    let btnDisabled = true;
    let message ;
    let rating = 10;
    let min = 10;
    const dispatch = createEventDispatcher();

    const handleInput = ( ) => {
        if(text.trim().length <= min){
            message = `text must be more than 10 charachter`
            btnDisabled = true
        }else{
            message = null 
            btnDisabled = false
        }
    }
    const handleSelect = (e) => rating = e.detail;
    const handleSubmit = () => {
        if(text.trim().length > min){
            const newFeedback = {
                id: Math.random() * 10,
                text,
                rating: +rating
            }
            dispatch('add-Feedback', newFeedback)
            text = '';
            btnDisabled = true;
        }
    }

</script> 


<Card>
    <header>
        <h2>How would rate your service with us?</h2>
    </header>
    <RatingSelect on:rating-select={handleSelect}/>
    <form on:submit|preventDefault={handleSubmit}>
        <div>
            <input
            on:input={handleInput} 
            type="text" 
            name="" id=" " 
            bind:value={text}
            placeholder="write some feedback">
        </div>
        <div class="div">
            {#if message}
                <p>{message}</p>
            {/if}
        </div>
        <Button 
        disabled={btnDisabled} 
        type="submit"
        >
        Send
        </Button>
    </form>
</Card>