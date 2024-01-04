<script>
	import InventoryButton from "./InventoryButton.svelte";

    export let inventory;
    export let removeFromInventory;
</script>

<div class="text-center">
    <div class="flex flex-wrap px-40 gap-4 items-center justify-center">
        {#each inventory as item }
            <InventoryButton {item} {removeFromInventory} />
        {/each}
    </div>
</div>