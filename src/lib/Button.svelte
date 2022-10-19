<script>
    export let style = 'primary';
    export let type = 'button';
    export let disabled = false;
</script>

<button {type} {disabled} class={style} >
    <slot></slot>
</button>