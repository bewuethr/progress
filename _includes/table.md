{% assign header = "|" %}
{%- assign align = "|" %}
{%- assign entries = site.data[include.file] %}
{%- for pair in entries[0] %}
  {%- assign header = header | append: " " | append: pair[0] | append: " |" %}
  {%- if pair[0] == "Style" %}
    {%- assign align = align | append: " -- |" %}
  {%- else %}
    {%- assign align = align | append: " -: |" %}
  {%- endif %}
{%- endfor %}

{{- header }}
{{ align }}

{%- for entry in entries %}
  {%- assign tablerow = "|" %}
  {%- for pair in entry %}
    {%- assign tablerow = tablerow
      | append: " " | append: pair[1] | append: " |" %}
  {%- endfor %}
  {{ tablerow -}}
{%- endfor %}

<!-- markdownlint-disable-file MD033 MD041 -->
