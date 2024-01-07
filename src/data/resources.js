export let resources = [
	{ name: 'hqual', amount: 0, icon: 'resourceIcons/hqual.png' },
	{ name: 'scrap', amount: 0, icon: 'resourceIcons/scrap.png' },
	{ name: 'mfrags', amount: 0, icon: 'resourceIcons/metalfragments.png' },
	{ name: 'cloth', amount: 0, icon: 'resourceIcons/cloth.png' },
	{ name: 'rope', amount: 0, icon: 'itemIcons/rope.png' }
];

export let resetResources = () => {
	resources = [
		{ name: 'hqual', amount: 0, icon: 'resourceIcons/hqual.png' },
		{ name: 'scrap', amount: 0, icon: 'resourceIcons/scrap.png' },
		{ name: 'mfrags', amount: 0, icon: 'resourceIcons/metalfragments.png' },
		{ name: 'cloth', amount: 0, icon: 'resourceIcons/cloth.png' },
		{ name: 'rope', amount: 0, icon: 'itemIcons/rope.png' }
	];
};

export let updateResources = (resource, amount) => {
	let index = resources.findIndex((res) => res.name === resource);
	resources[index].amount += amount;
};
