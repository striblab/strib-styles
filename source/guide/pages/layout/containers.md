---
title: Containers
layout: page
---

It is always suggested to use a container by default.

## Fluid container

For a simple fluid container use the `.container-fluid` class.

{% example html %}
<div class="container-fluid example-container-large"></div>
{% endexample %}

## Max width containers

Each breakpoint can be used to create a max width container with `.container-*` classes.  You can pull the container right and left if needed.

{% example html %}
<div class="container-sm example-container-small"></div>
<div class="container-sm container-left example-container-small"></div>
<div class="container-sm container-right example-container-small"></div>
{% endexample %}
