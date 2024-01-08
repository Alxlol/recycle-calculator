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
    <button on:click={handleClick} class="bg-slate-600 font-bold px-4 py-2 rounded-xl mt-4 text-white hover:bg-orange-400 w-full">Add</button>
</div>
    
<style>
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        border: 0;
        outline: 0;

        background: rgb(58, 79, 114);
    }

    input[type=number] {
        -moz-appearance: textfield;
        background: rgb(58, 79, 114);
        border: 0;
        outline: 0;
        border-radius: .5rem;
        padding-block: .3rem;
    }


</style>