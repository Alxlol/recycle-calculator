<script>
    export let item;
    export let removeFromInventory;

    function handleClick() {
        removeFromInventory(item)
    }

    
</script>

<button class="hover:bg-orange-600 mt-4 rounded-full" on:click={handleClick}>
    <div  class="w-20 h-20">
        <img class="w-full h-full" src={item.icon} alt="">
        <p class="text-center ">{item.amount}</p>
    </div>
</button>