<script>
    import { FeedbackStore } from "./store";
    import Button from "./Button.svelte";
    import Card from "./Card.svelte";
    import RatingSelect from "./RatingSelect.svelte";

    let text = '';
    let btnDisabled = true;
    let message ;
    let rating = 10;
    let min = 10;

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
            const newFeedback = { id: Math.random() * 10, text, rating: +rating};
            FeedbackStore.update((current) => {
                return [newFeedback, ...current];
            }
            );

            text = '';
            btnDisabled = true;
        }
    }

</script> 


<Card>
    <header>
        <h2>I know the rate and range of my ...</h2>
        <RatingSelect on:rating-select={handleSelect}/>
        <form on:submit|preventDefault={handleSubmit}>
        <h3>I have to do</h3>
        <div>
            <input
                on:input={handleInput} 
                type="text" 
                name="" id=" " 
                bind:value={text}
                placeholder="I am going to ..."
            >
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
</header>
</Card>