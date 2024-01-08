<script>
    import { components } from '$data/components.js'
	import AmountSelector from '../lib/components/AmountSelector.svelte';
    import Icon from '@iconify/svelte';
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

<div class="p-20 rounded-xl shadow-2xl flex flex-col gap-10 backdrop-blur-md">
    <div class="flex flex-col md:flex-row items-center justify-center gap-20">
            <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                {#each components as component}
                    <ComponentButton {component} {handleSelection} />
                {/each}
            </div>
    
        {#if selectedComponent != null}
            <AmountSelector {selectedComponent} {addToInventory} />
        {/if}
    </div>
    
    
    
    <div class="flex flex-col items-center justify-center gap-8">
        <Inventory {inventory} {removeFromInventory} />
        {#if inventory.length > 0}
            <Icon icon="mingcute:arrow-up-line" rotate={2} width=30 height=30 />
        {/if}
        <YieldDisplay {inventory} />
    </div>
</div>




