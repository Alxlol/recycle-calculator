<script>
    export let item;
    export let removeFromInventory;

    function handleClick() {
        removeFromInventory(item)
    }

    
</script>

<button class="group" on:click={handleClick}>
    <div  class="w-20 h-20 mt-4">
        <img class="w-full h-full" src={item.icon} alt="">
        <p class="text-center group-hover:text-red-400">{item.amount}</p>
    </div>
</button>