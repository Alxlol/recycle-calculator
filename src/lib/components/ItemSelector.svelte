<script>
    export let rustComponents;
</script>

<div class="gap-4 flex items-center justify-center">
    {#each Object.entries(rustComponents) as component}
    <button class="bg-neutral-800 w-fit hover:bg-neutral-600">
        <img class="border-2 w-20 h-20" src={component[1].icon} alt={component[0]}>
    </button>
    {/each}
</div>