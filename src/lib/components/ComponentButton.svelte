<script>
    export let component;

    export let handleSelection;
    let handleClick = () => {
        handleSelection(component)
    }
</script>

<img on:click={handleClick} class="bg-neutral-600 hover:bg-neutral-400 p-4 rounded-2xl w-36 h-36" src={component.icon} alt="">