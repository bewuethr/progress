# progress

Tracking progress of various things.

- (placeholder)
{:toc}

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@3.0.0/dist/chartjs-adapter-date-fns.bundle.min.js"></script>

## Push-ups

Following [this progression][pushups].

[pushups]: <https://www.hybridcalisthenics.com/pushups>

{% include table.md file="pushups" %}

<div>
  <canvas id="pushUpsChart"></canvas>
</div>

<script type="module">
  import data from "./assets/pushups.json" assert { type: "json" };
  import drawChart from "./assets/drawchart.js";
  drawChart("pushUpsChart", data);
</script>

## Pull-ups

Following [this progression][pullups].

[pullups]: <https://www.hybridcalisthenics.com/pullups>

{% include table.md file="pullups" %}

<div>
  <canvas id="pullUpsChart"></canvas>
</div>

<script type="module">
  import data from "./assets/pullups.json" assert { type: "json" };
  import drawChart from "./assets/drawchart.js";
  drawChart("pullUpsChart", data);
</script>

## Leg raises

Following [this progression][legraises].

[legraises]: <https://www.hybridcalisthenics.com/legraises>

{% include table.md file="legraises" %}

<div>
  <canvas id="legRaisesChart"></canvas>
</div>

<script type="module">
  import data from "./assets/legraises.json" assert { type: "json" };
  import drawChart from "./assets/drawchart.js";
  drawChart("legRaisesChart", data);
</script>

<!-- markdownlint-disable-file MD033 -->
