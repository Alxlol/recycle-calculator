<script>
    export let inventory;

    let sum = [
        { name: 'hqual', amount: 0, icon: 'resourceIcons/hqual.png' },
        { name: 'scrap', amount: 0, icon: 'resourceIcons/scrap.png' },
        { name: 'mfrags', amount: 0, icon: 'resourceIcons/metalfragments.png' },
        { name: 'cloth', amount: 0, icon: 'resourceIcons/cloth.png' },
        { name: 'rope', amount: 0, icon: 'itemIcons/rope.png' }
    ]

    $: calculateYield(inventory)

    function calculateYield(inventory) {
        sum = [
        { name: 'hqual', amount: 0, icon: 'resourceIcons/hqual.png' },
        { name: 'scrap', amount: 0, icon: 'resourceIcons/scrap.png' },
        { name: 'mfrags', amount: 0, icon: 'resourceIcons/metalfragments.png' },
        { name: 'cloth', amount: 0, icon: 'resourceIcons/cloth.png' },
        { name: 'rope', amount: 0, icon: 'itemIcons/rope.png' }
    ]
        inventory.forEach((item) => {
            Object.keys(item.yield).forEach((resource) => {
                const sumEntry = sum.find((entry) => entry.name === resource)

                if (sumEntry) {
                    sumEntry.amount += item.yield[resource] * item.amount
                }
            })

            
        })
        sum = [...sum]
    }

</script>

<!-- <svelte:head>
    {#each sum as item}
      <link rel="preload" as="image" href={item.icon} />
    {/each}
</svelte:head> -->

<div class="flex flex-col items-center justify-center">
    <div class="flex gap-4">
        {#each sum as item}
            {#if item.amount > 0}
                <div class="w-20 h-20 ">
                    <img class="w-full h-full" src={item.icon} alt="">
                    <p class="text-center font-bold">{item.amount}</p>
                </div>
            {/if}
        {/each}
    </div>
</div>

