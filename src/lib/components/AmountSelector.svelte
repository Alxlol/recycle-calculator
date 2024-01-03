<script>
    export let selectedComponent;
    export let addToInventory;
    let amount = 0;

    function handleClick() {
        addToInventory(selectedComponent, amount)
    }
</script>


<div class="bg-neutral-600 p-6 flex flex-col items-center justify-center mt-4">
    <img class="w-20 h-20" src={selectedComponent.icon} alt="">
    <p class="text-white font-bold text-lg">Select amount</p>
    <input bind:value={amount} type="number" name="" id="">
    <button on:click={handleClick} class="bg-neutral-500 px-4 py-2 rounded-xl mt-4 text-white hover:bg-neutral-300">Add</button>
</div>