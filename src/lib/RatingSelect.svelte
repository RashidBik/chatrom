<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let selected = 1;
    const onChange = (e) => {
        selected = e.currentTarget.value
        dispatch('rating-select', selected)
    }
</script>

<div>
    <div class="radio-btn">
        <span>
            <input type="radio" id="num1" name="rating" value="1" 
            on:change={onChange} 
            checked={selected===1} />
            <label for="num1">Learn</label>
        </span>
        <span>
            <input type="radio" id="num2" name="rating" value="2" 
            on:change={onChange} 
            checked={selected===2} />
            <label for="num2">Exersize</label>
        </span>
        <span>
            <input type="radio" id="num3" name="rating" value="3" 
            on:change={onChange} 
            checked={selected===3} />
            <label for="num3">Home Work</label>
        </span>
    </div>
</div>