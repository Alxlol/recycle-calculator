<script>
    export let component;

    export let handleSelection;
    let handleClick = () => {
        handleSelection(component)
    }
</script>

<button class="" on:click={handleClick}>
    <img class="hover:bg-slate-500 bg-slate-600 rounded-2xl w-20 h-20 p-2" src={component.icon} alt="">
</button>