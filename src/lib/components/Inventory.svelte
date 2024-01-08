<script>
	import InventoryButton from "./InventoryButton.svelte";

    export let inventory;
    export let removeFromInventory;
</script>

<div class="text-center mb-2">
    <div class="flex flex-wrap max-w-[57rem] gap-4 items-center justify-center">
        {#each inventory as item }
            <InventoryButton {item} {removeFromInventory} />
        {/each}
    </div>
</div>