<script>
    import { components } from '$data/components.js'
	import AmountSelector from '../lib/components/AmountSelector.svelte';
	import ComponentButton from '../lib/components/ComponentButton.svelte';
	import Inventory from '../lib/components/Inventory.svelte';
    
    let selectedComponent;
    let inventory = [];
    const handleSelection = (component) => {
        if (selectedComponent === component) {
            selectedComponent = null;
        } else {
            selectedComponent = component
        }

        console.log(selectedComponent)
    }

    const addToInventory = (selectedComponent, amount) => {
        inventory.push({...selectedComponent, amount})
        inventory = [...inventory]
        console.log(inventory)
    }
</script>

<div class="flex gap-4 items-center justify-center">
    {#each components as component}
        <ComponentButton {component} {handleSelection} />
    {/each}
</div>
{#if selectedComponent != null}
    <AmountSelector {selectedComponent} {addToInventory} />
{/if}
<Inventory {inventory} />
