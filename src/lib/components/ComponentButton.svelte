<script>
    export let component;

    export let handleSelection;
    let handleClick = () => {
        handleSelection(component)
    }
</script>

<button on:click={handleClick}>
    <img class="bg-neutral-600 hover:bg-neutral-400 p-2 rounded-2xl w-20 h-20" src={component.icon} alt="">
</button>