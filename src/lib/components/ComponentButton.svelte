<script>
    export let component;

    export let handleSelection;
    let handleClick = () => {
        handleSelection(component)
    }
</script>

<button class="" on:click={handleClick}>
    <img class="hover:scale-110 transition-transform w-24 h-24 p-2" src={component.icon} alt="">
</button>