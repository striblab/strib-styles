---
title: Colors
layout: page
---

The following demonstrates what variables and classes are available for use of color. Note that any class can be turned into a foreground color class by removing the `bg-` part. Hover over any swatch to see it's class.

## Theme colors

All these colors are managed in the `$theme` SASS variable. The brand-specific primary and secondary greens are the following:

<div class="cf">
  <div class="example-color-swatch color-bg-green-primary-emerald">.color-bg-green-primary-emerald</div>
  <div class="example-color-swatch color-bg-green-primary-spring">.color-bg-green-primary-spring</div>
  <div class="example-color-swatch color-bg-green-secondary-forest">.color-bg-green-secondary-forest</div>
</div>

Alternatives and other colors available to follow the pallet if needed:

<div>
  <div class="cf">
    <div class="example-color-swatch color-bg-green-secondary-light">.color-bg-green-secondary-light</div>
  </div>

  <div class="cf">
    <div class="example-color-swatch color-bg-blue-light">.color-bg-blue-light</div>
    <div class="example-color-swatch color-bg-blue-dark">.color-bg-blue-dark</div>
  </div>

  <div class="cf">
  <div class="example-color-swatch color-bg-yellow-light">.color-bg-yellow-light</div>
    <div class="example-color-swatch color-bg-yellow-dark">.color-bg-yellow-dark</div>
  </div>

  <div class="cf">
    <div class="example-color-swatch color-bg-orange-light">.color-bg-orange-light</div>
    <div class="example-color-swatch color-bg-orange-dark">.color-bg-orange-dark</div>
  </div>

  <div class="cf">
    <div class="example-color-swatch color-bg-red-light">.color-bg-red-light</div>
    <div class="example-color-swatch color-bg-red-dark">.color-bg-red-dark</div>
  </div>
</div>

## Grays

All these colors are managed in the `$grays` SASS variable.

<div class="cf">
  <div class="example-color-swatch color-bg-gray-dark">.color-bg-gray-dark</div>
  <div class="example-color-swatch color-bg-gray-medium">.color-bg-gray-medium</div>
  <div class="example-color-swatch color-bg-gray-medium-light">.color-bg-gray-medium-light</div>
  <div class="example-color-swatch color-bg-gray-light">.color-bg-gray-light</div>
  <div class="example-color-swatch color-bg-gray-lighter">.color-bg-gray-lighter</div>
  <div class="example-color-swatch color-bg-gray-lightest">.color-bg-gray-lightest</div>
</div>

## Black and white

Black and white are stored as vairables, `$color-black` and `$color-white`. The black is a specific off-black color.

<div class="cf">.
  <div class="example-color-swatch color-bg-white">.color-bg-white</div>
  <div class="example-color-swatch color-bg-black">.color-bg-black</div>
</div>

## Data colors

All these colors are managed in the `$colors-data` SASS variable, but note that that each one is a list of colors to be possibly used as a ramp. Only including background versions for brevity, forground versions exist.

Considering using [Color Oracle](http://colororacle.org/) to test how colorblind uses might see colors used for data. For alternative sets, look at [Color Brewer](http://colorbrewer2.org/).

`.color-bg-data-reds-*`

<div class="cf">
  <div class="example-color-swatch color-bg-data-reds-1">.color-bg-data-reds-1</div>
  <div class="example-color-swatch color-bg-data-reds-2">.color-bg-data-reds-2</div>
  <div class="example-color-swatch color-bg-data-reds-3">.color-bg-data-reds-3</div>
  <div class="example-color-swatch color-bg-data-reds-4">.color-bg-data-reds-4</div>
  <div class="example-color-swatch color-bg-data-reds-5">.color-bg-data-reds-5</div>
</div>

`.color-bg-data-oranges-*`

<div class="cf">
  <div class="example-color-swatch color-bg-data-oranges-1">.color-bg-data-oranges-1</div>
  <div class="example-color-swatch color-bg-data-oranges-2">.color-bg-data-oranges-2</div>
  <div class="example-color-swatch color-bg-data-oranges-3">.color-bg-data-oranges-3</div>
  <div class="example-color-swatch color-bg-data-oranges-4">.color-bg-data-oranges-4</div>
  <div class="example-color-swatch color-bg-data-oranges-5">.color-bg-data-oranges-5</div>
</div>

`.color-bg-data-blues-*`

<div class="cf">
  <div class="example-color-swatch color-bg-data-blues-1">.color-bg-data-blues-1</div>
  <div class="example-color-swatch color-bg-data-blues-2">.color-bg-data-blues-2</div>
  <div class="example-color-swatch color-bg-data-blues-3">.color-bg-data-blues-3</div>
  <div class="example-color-swatch color-bg-data-blues-4">.color-bg-data-blues-4</div>
  <div class="example-color-swatch color-bg-data-blues-5">.color-bg-data-blues-5</div>
</div>

`.color-bg-data-greens-*`

<div class="cf">
  <div class="example-color-swatch color-bg-data-greens-1">.color-bg-data-greens-1</div>
  <div class="example-color-swatch color-bg-data-greens-2">.color-bg-data-greens-2</div>
  <div class="example-color-swatch color-bg-data-greens-3">.color-bg-data-greens-3</div>
  <div class="example-color-swatch color-bg-data-greens-4">.color-bg-data-greens-4</div>
  <div class="example-color-swatch color-bg-data-greens-5">.color-bg-data-greens-5</div>
</div>

`.color-bg-data-grays-*`

<div class="cf">
  <div class="example-color-swatch color-bg-data-grays-1">.color-bg-data-grays-1</div>
  <div class="example-color-swatch color-bg-data-grays-2">.color-bg-data-grays-2</div>
  <div class="example-color-swatch color-bg-data-grays-3">.color-bg-data-grays-3</div>
  <div class="example-color-swatch color-bg-data-grays-4">.color-bg-data-grays-4</div>
  <div class="example-color-swatch color-bg-data-grays-5">.color-bg-data-grays-5</div>
</div>

`.color-bg-data-light-blue-*`

<div class="cf">
  <div class="example-color-swatch color-bg-data-light-blue-1">.color-bg-data-light-blue-1</div>
  <div class="example-color-swatch color-bg-data-light-blue-2">.color-bg-data-light-blue-2</div>
  <div class="example-color-swatch color-bg-data-light-blue-3">.color-bg-data-light-blue-3</div>
  <div class="example-color-swatch color-bg-data-light-blue-4">.color-bg-data-light-blue-4</div>
  <div class="example-color-swatch color-bg-data-light-blue-5">.color-bg-data-light-blue-5</div>
  <div class="example-color-swatch color-bg-data-light-blue-6">.color-bg-data-light-blue-6</div>
</div>

`.color-bg-data-categories-*`

<div class="cf">
  <div class="example-color-swatch color-bg-data-categories-1">.color-bg-data-categories-1</div>
  <div class="example-color-swatch color-bg-data-categories-2">.color-bg-data-categories-2</div>
  <div class="example-color-swatch color-bg-data-categories-3">.color-bg-data-categories-3</div>
  <div class="example-color-swatch color-bg-data-categories-4">.color-bg-data-categories-4</div>
</div>

`.color-bg-data-divergent-*` Note that this set is colorblind safe.

<div class="cf">
  <div class="example-color-swatch color-bg-data-divergent-1">.color-bg-data-divergent-1</div>
  <div class="example-color-swatch color-bg-data-divergent-2">.color-bg-data-divergent-2</div>
  <div class="example-color-swatch color-bg-data-divergent-3">.color-bg-data-divergent-3</div>
  <div class="example-color-swatch color-bg-data-divergent-4">.color-bg-data-divergent-4</div>
  <div class="example-color-swatch color-bg-data-divergent-5">.color-bg-data-divergent-5</div>
</div>

`.color-bg-data-political-parties-*`

<div class="cf">
  <div class="example-color-swatch color-bg-data-political-parties-1">.color-bg-data-political-parties-1</div>
  <div class="example-color-swatch color-bg-data-political-parties-2">.color-bg-data-political-parties-2</div>
  <div class="example-color-swatch color-bg-data-political-parties-3">.color-bg-data-political-parties-3</div>
  <div class="example-color-swatch color-bg-data-political-parties-4">.color-bg-data-political-parties-4</div>
  <div class="example-color-swatch color-bg-data-political-parties-5">.color-bg-data-political-parties-5</div>
</div>

## Political colors

Stored in the `$colors-political` variable.

<div class="cf">
  <div class="example-color-swatch color-bg-political-r">.color-bg-political-r</div>
  <div class="example-color-swatch color-bg-political-gop">.color-bg-political-gop</div>
  <div class="example-color-swatch color-bg-political-d">.color-bg-political-d</div>
  <div class="example-color-swatch color-bg-political-dfl">.color-bg-political-dfl</div>
</div>
