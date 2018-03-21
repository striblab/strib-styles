---
title: Grid
layout: page
---

Currently, this is a basic, tradition (i.e. float-based), mobile-first grid. The grid is based on percentages, specifically by 5% increments. So, for example there is `-5`, `-10`, `-15`. There is also support for thirds with `-33` and `-66`.

## Simple example

A real simple example that does not change based on screen size.

{% example html %}

<div class="row">
  <div class="col col-20">
    <div class="example-fill">col-20</div>
  </div>
  <div class="col col-40">
    <div class="example-fill">col-40</div>
  </div>
  <div class="col col-30">
    <div class="example-fill">col-30</div>
  </div>
  <div class="col col-10">
    <div class="example-fill">col-10</div>
  </div>
</div>
{% endexample %}

## Responsive changes

An example where the size of containers changes based on screen size. Remember, this is mobile first, so our default class without modifiers is what will show on small screens.

If we use the classes `col col-50 col-md-33 col-lg-25`, this means it defaults to 50%, then goes to 33% on `md` screen or higher, and then 25% on `lg` or more.

We also, add the `.grid-bottom` class to add space at the bottom of a cell. This can be modified for responsive-ness as well, for instance, `.grid-bottom-md` will only add bottom margin for `md` size and larger.

{% example html %}

<div class="row">
  <div class="col col-50 col-md-33 col-lg-25 grid-bottom">
    <div class="example-fill"></div>
  </div>

  <div class="col col-50 col-md-33 col-lg-25 grid-bottom">
    <div class="example-fill"></div>
  </div>

  <div class="col col-50 col-md-33 col-lg-25 grid-bottom">
    <div class="example-fill"></div>
  </div>

  <div class="col col-50 col-md-33 col-lg-25 grid-bottom">
    <div class="example-fill"></div>
  </div>

  <div class="col col-50 col-md-33 col-lg-25 grid-bottom">
    <div class="example-fill"></div>
  </div>
</div>
{% endexample %}

## No padding

Occasionally you may need a grid without any padding. Simply add the class `row-no-padding`.

{% example html %}

<div class="row row-no-padding">
  <div class="col col-100 col-md-50">
    <div class="example-fill"></div>
  </div>
  
  <div class="col col-100 col-md-50">
    <div class="example-fill"></div>
  </div>
  
  <div class="col col-100 col-md-50">
    <div class="example-fill"></div>
  </div>
  
  <div class="col col-100 col-md-50">
    <div class="example-fill"></div>
  </div>
</div>
{% endexample %}
