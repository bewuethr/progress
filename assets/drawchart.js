export default function drawChart(canvasId, data, yLabel) {
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
						unit: "day",
						tooltipFormat: "MMM dd, yyyy"
					}
				},
				y: {
					beginAtZero: true,
					title: {
						text: yLabel,
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
