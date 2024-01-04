<script>
    export let selectedComponent;
    export let addToInventory;
    let amount = 1;

    function handleClick() {
        addToInventory(selectedComponent, amount)
    }
</script>



    
<div class=" flex gap-4 flex-col items-center justify-center ">
    <img class="w-20 h-20" src={selectedComponent.icon} alt="">
    <p class="text-white font-bold text-lg">Amount</p>
    <input class="text-center" bind:value={amount} type="number" name="" id="">
    <div class="slidecontainer ">
        <input bind:value={amount} type="range" min="1" max="100" class="slider" id="myRange">
    </div>
    <button on:click={handleClick} class="bg-neutral-500 px-4 py-2 rounded-xl mt-4 text-white hover:bg-neutral-300 w-full">Add</button>
</div>
    
<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        background: transparent;
        border: 0;
        outline: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
        background: transparent;
        border: 0;
        outline: 0;
    }


</style>