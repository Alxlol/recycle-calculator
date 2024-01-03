<script>
    export let inventory;
</script>

{#each inventory as item }  
<button class="bg-neutral-800 w-fit hover:bg-neutral-600">
    <img class="border-2 w-20 h-20" src={component[1].icon} alt={component[0]}>
</button>
    
{/each}