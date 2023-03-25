# progress

[**Back**](index.md)

## All workouts

{% capture list %}
{%- for file in site.data %}
  {%- case file[0] %}
    {%- when "bridges" %}
      {%- assign exercise = "Bridges" %}
    {%- when "legraises" %}
      {%- assign exercise = "Leg raises" %}
    {%- when "pullups" %}
      {%- assign exercise = "Pull-ups" %}
    {%- when "pushups" %}
      {%- assign exercise = "Push-ups" %}
    {%- when "squats" %}
      {%- assign exercise = "Squats" %}
    {%- when "twists" %}
      {%- assign exercise = "Twists" %}
  {%- endcase %}
  {%- for entry in file[1] %}
    {{- entry.Date }},
    {{- entry.Style }},
    {{- entry["Set 1"] }},
    {{- entry["Set 2"] }},
    {{- entry["Set 3"] }},
    {{- exercise }}|
  {%- endfor %}
{%- endfor %}
{%- endcapture %}

| Date | Exercise | Style | Set 1 | Set 2 | Set 3 |
| ---: | -------- | ------| ----: | ----: | ----: |
{%- assign arr = list | split: "|" | sort %}
{%- for entry in arr %}
  {%- assign columns = entry | split: "," %}
  | {{ columns[0] }} |
  {{- columns[5] }} |
  {{- columns[1] }} |
  {{- columns[2] }} |
  {{- columns[3] }} |
  {{- columns[4] }} |
{%- endfor %}
