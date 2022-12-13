module.exports = [
	{
		id: 1,
		name: "[S,A,S]",
		labels: [ "S", "A", "S" ],
		datasets: [
			{
				label: "[S,A,S]",
				data: [ 1, 2, 3 ],
				backgroundColor: "green",
				fill: false,
			},
		],
	},
	{
		id: 2,
		name: "[R,P,S]",
		labels: [ "R", "P", "S" ],
		datasets: [
			{
				label: "[R,P,S]",
				data: [ 4, 2, 3 ],
				backgroundColor: "green",
				fill: false,
			}
		],
	},
	{
		id: 3,
		name: "[S,P,S]",
		labels: [ "S", "P", "S" ],
		datasets: [
			{
				label: "[S,P,S]",
				data: [ 2, 3, 4 ],
				backgroundColor: "green",
				fill: false,
			}
		],
	},
	{
		id: 4,
		name: "[R,U,S]",
		labels: [ "R", "U", "S" ],
		datasets: [
			{
				label: "[R,U,S]",
				data: [ 3, 4, 2 ],
				backgroundColor: "green",
				fill: false,
			}
		],
	},
	{
		id: 5,
		name: "[R,A,S]",
		labels: [ "R", "A", "S" ],
		datasets: [
			{
				label: "[R,A,S]",
				data: [ 4, 5, 2 ],
				backgroundColor: "green",
				fill: false,
			}
		],
	},
	{
		id: 6,
		name: "[R,A,S][R,P,S]",
		labels: [ "RR", "AP", "SS" ],
		datasets: [
			{
				label: "[R,A,S]",
				data: [ 4, 5, 2 ],
				backgroundColor: "green",
				fill: false,
			},
			{
				label: "[R,P,S]",
				data: [ 4, 4, 5 ],
				backgroundColor: "blue",
				fill: false,
			}
		],
	},
];
