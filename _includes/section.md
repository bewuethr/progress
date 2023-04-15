Following [this progression][{{ include.workout }}].

[{{ include.workout }}]: <https://www.hybridcalisthenics.com/{{ include.workout }}>

{% include graph.html workout=include.workout ylabel=include.ylabel %}

<details markdown="block"><summary><i>Click for table</i></summary>

{% include table.md file=include.workout %}

</details>

<!-- markdownlint-disable-file MD041 -->
