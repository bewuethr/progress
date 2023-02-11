# progress

Tracking progress of various things.

- (placeholder)
{:toc}

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

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.2.1/dist/chart.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@3.0.0/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
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

<!-- markdownlint-disable-file MD033 -->
