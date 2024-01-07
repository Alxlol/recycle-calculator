<script>
    import { components } from '$data/components.js'
	import AmountSelector from '../lib/components/AmountSelector.svelte';
	import ComponentButton from '../lib/components/ComponentButton.svelte';
	import Inventory from '../lib/components/Inventory.svelte';
	import YieldDisplay from '../lib/components/YieldDisplay.svelte';
    
    let selectedComponent = components[0];
    let inventory = [];

    const removeFromInventory = (item) => {
        inventory = inventory.filter(i => i !== item)
    }

    const handleSelection = (component) => {
        if (selectedComponent === component) {
            
        } else {
            selectedComponent = component
        }

    }

    const addToInventory = (selectedComponent, amount) => {
        inventory.push({...selectedComponent, amount})
        inventory = [...inventory]
    }
</script>

<h1 class="text-4xl font-bold text-center">Rust Recycle Calculator</h1>
<div class="flex flex-col md:flex-row items-center justify-center gap-20">
        <div class="grid grid-cols-4 lg:grid-cols-5 gap-8">
            {#each components as component}
                <ComponentButton {component} {handleSelection} />
            {/each}
        </div>
    
    {#if selectedComponent != null}
        <AmountSelector {selectedComponent} {addToInventory} />
    {/if}
</div>



    <div class="flex flex-col items-center justify-center gap-14">
        <Inventory {inventory} {removeFromInventory} />
        {#if inventory.length > 0}
            <p class="text-4xl">&#8595;</p>
        {/if}
        <YieldDisplay {inventory} />
    </div> 




