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
						title: function(items) {
							let d = new Date(items[0].parsed.x);
							return d.toLocaleDateString("en-CA", {
								month: "short",
								day: "numeric",
								year: "numeric"
							});
						},
						afterTitle: function(items) {
							console.log(items);
							return data.datasets[3].data[items[0].dataIndex];
						}
					}
				},
				legend: {
					labels: {
						filter: function(item, data) {
							return item.datasetIndex != 3;
						}
					}
				}
			}
		}
	});
}
