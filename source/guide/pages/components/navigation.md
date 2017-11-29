---
title: Navigation
layout: page
---

Navigation styling.

## Default navigation list

The default is a simple horizontal list.

{% example html %}
<nav>
  <ul>
    <li><a href="/layout">Layout</a></li>
    <li><a href="/styles">Styles</a></li>
  </ul>
</nav>
{% endexample %}

## Top nav

The `.top-nav` class is not necessary if within a `header[role="banner"]` element.

{% example html %}
<nav class="nav-top">
  <div class="container-lg">
    <a href="/" class="logo" title="Home"><span class="sr-only">Go to homepage</span></a>
    <h1>Style guide</h1>

    <ul>
      <li><a href="/layout">Layout</a></li>
      <li><a href="/styles">Styles</a></li>
    </ul>
  </div>
</nav>
{% endexample %}
