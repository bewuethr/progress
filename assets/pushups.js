const ctx = document.getElementById("pushUpsChart");

import data from "./pushups.json" assert { type: "json" };
console.log(data);

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
		}
	}
});
