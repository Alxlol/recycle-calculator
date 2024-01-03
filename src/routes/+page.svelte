<script>
    import { rustComponents } from '$lib/items/itemData.js'
	import ItemSelector from '../lib/components/ItemSelector.svelte';
	import Inventory from '../lib/components/inventory/Inventory.svelte';

    console.log(Object.entries(rustComponents))

    let inventory = [{gears: 4, metalBlades: 1}]

</script>

<ItemSelector rustComponents={rustComponents} />
<Inventory {inventory} />