<script>
    import { createEventDispatcher } from "svelte";


    let selected = 1;
    
const dispatch = createEventDispatcher();
const onChange = (e) => {
    selected = e.currentTarget.value
     dispatch('rating-select', selected)
}
</script>
<div>
    <ul>
        <span>
            <input type="radio" id="num1" name="rating" value="1" on:change={onChange} checked={selected===1} />
            <label for="num1">1</label>
        </span>
        <span>
            <input type="radio" id="num2" name="rating" value="2" on:change={onChange} checked={selected===2} />
            <label for="num2">2</label>
        </span>
        <span>
            <input type="radio" id="num3" name="rating" value="3" on:change={onChange} checked={selected===3} />
            <label for="num3">3</label>
        </span>
    </ul>
</div>