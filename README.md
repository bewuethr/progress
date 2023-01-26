# progress

Tracking progress of various things.

## Push-ups

Following [this progression][pushups].

[pushups]: <https://www.hybridcalisthenics.com/pushups>

| Date       | Style            | Set 1 | Set 2 | Set 3 |
| ---------: | ---------------- | ----: | ----: | ----: |
| 2022-12-25 | Wall             | 50    | 50    | 50    |
| 2022-12-26 | Incline          | 40    | 40    | 40    |
| 2022-12-31 | Incline          | 40    | 40    | 40    |
| 2023-01-07 | Incline          | 40    | 40    | 40    |
| 2023-01-15 | Advanced incline | 23    | 17    | 10    |
| 2023-01-18 | Advanced incline | 24    | 13    | 10    |
| 2023-01-22 | Advanced incline | 26    | 17    | 14    |
| 2023-01-25 | Advanced incline | 28    | 15    | 12    |

<div>
  <canvas id="pushUpsChart"></canvas>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns/dist/chartjs-adapter-date-fns.bundle.min.js"></script>


<script>
  const ctx = document.getElementById("pushUpsChart");


  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "2022-12-25",
        "2022-12-26",
        "2022-12-31",
        "2023-01-07",
        "2023-01-15",
        "2023-01-18",
        "2023-01-22",
        "2023-01-25"
      ],
      datasets: [
        {
          label: "Set 1",
          data: [50, 40, 40, 40, 23, 24, 26, 28],
          borderWidth: 1
        },
        {
          label: "Set 2",
          data: [50, 40, 40, 40, 17, 13, 17, 15],
          borderWidth: 1
        },
        {
          label: "Set 3",
          data: [50, 40, 40, 40, 10, 10, 14, 12],
          borderWidth: 1
        }
      ]
    },
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
</script>
