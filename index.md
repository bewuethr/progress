# progress

Tracking progress of various things.

- (placeholder)
{:toc}

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@3.0.0/dist/chartjs-adapter-date-fns.bundle.min.js"></script>

## Push-ups

Following [this progression][pushups].

[pushups]: <https://www.hybridcalisthenics.com/pushups>

| Date | Style | Set 1 | Set 2 | Set 3 |
| ---: | ----- | ----: | ----: | ----: |
{% for entry in site.data.pushups -%} |
{{- entry.Date }} |
{{- entry.Style }} |
{{- entry["Set 1"] }} |
{{- entry["Set 2"] }} |
{{- entry["Set 3"] }} |
{% endfor %}

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

| Date       | Style | Set 1 | Set 2 | Set 3 |
| ---------: | ----- | ----: | ----: | ----: |
{% for entry in site.data.pullups -%} |
{{- entry.Date }} |
{{- entry.Style }} |
{{- entry["Set 1"] }} |
{{- entry["Set 2"] }} |
{{- entry["Set 3"] }} |
{% endfor %}

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

| Date       | Style | Set 1 | Set 2 |
| ---------: | ----- | ----: | ----: |
{% for entry in site.data.legraises -%} |
{{- entry.Date }} |
{{- entry.Style }} |
{{- entry["Set 1"] }} |
{{- entry["Set 2"] }} |
{% endfor %}

<div>
  <canvas id="legRaisesChart"></canvas>
</div>

<script type="module">
  import data from "./assets/legraises.json" assert { type: "json" };
  import drawChart from "./assets/drawchart.js";
  drawChart("legRaisesChart", data);
</script>

<!-- markdownlint-disable-file MD033 -->
