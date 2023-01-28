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

<script type="module">
  const ctx = document.getElementById("pushUpsChart");

  import data from "./assets/pushups.json" assert { type: "json" };
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
</script>

<!-- markdownlint-disable-file MD033 -->
