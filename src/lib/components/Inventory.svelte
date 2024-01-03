<script>
    export let inventory;
</script>

<div class="flex gap-4 items-center justify-center">
    {#each inventory as item }
        <img class="w-20 h-20 border-2" src={item.icon} alt="">
    {/each}
</div>