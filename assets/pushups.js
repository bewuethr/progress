const ctx = document.getElementById("pushUpsChart");

import data from "./pushups.json" assert { type: "json" };

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
					title: function(context) {
						let d = new Date(context[0].parsed.x);
						return d.toLocaleDateString("en-CA", {
							month: "short",
							day: "numeric",
							year: "numeric"
						});
					}
				}
			}
		}
	}
});
