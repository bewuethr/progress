export default function drawChart(canvasId, data) {
	const ctx = document.getElementById(canvasId);

	new Chart(ctx, {
		type: "line",
		data: data,
		options: {
			cubicInterpolationMode: "monotone",
			scales: {
				x: {
					type: "time",
					title: {
						text: "Date",
						display: true
					},
					time: {
						unit: "day"
					}
				},
				y: {
					beginAtZero: true,
					title: {
						text: "Reps",
						display: true
					}
				}
			},
			interaction: {
				mode: "index",
				intersect: false
			},
			plugins: {
				tooltip: {
					position: "average",
					callbacks: {
						// Print just YYYY-MM-DD date
						title: function(items) {
							let d = new Date(items[0].parsed.x);
							return d.toLocaleDateString("en-CA", {
								month: "short",
								day: "numeric",
								year: "numeric"
							});
						},
						// Look up style of exercise
						afterTitle: function(items) {
							return data.datasets.at(-1).data[items[0].dataIndex];
						}
					}
				},
				legend: {
					// Don't print label for dataset with styles
					labels: {
						filter: function(item, data) {
							return item.text != undefined
						}
					}
				}
			}
		}
	});
}
