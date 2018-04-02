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

Each breakpoint can be used to create a max width container with `.container-*` classes. You can pull the container right and left if needed.

{% example html %}

<div class="container-sm example-container-small"></div>
<div class="container-sm container-left example-container-small"></div>
<div class="container-sm container-right example-container-small"></div>
{% endexample %}

### Copy container

Using the `.container-copy` class makes a max-width container of `40em` (`em`'s are based on the `font-size` of the parent container).  This is based on the idea that there is an optimal line length for copy to ensure the best readability.

{% example html %}

<div class="container-copy">
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>

<div class="container-lg example-container-small"></div>

<div class="container-copy">
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
</div>
{% endexample %}

## Aspect ratios

For containers that need to maintain a specific aspect ratio, such as for images or embeds, there are some helpful classes.

{% example html %}

<div class="container-4-3 example-container-no-height"></div>
<div class="container-16-9 example-container-no-height"></div>
{% endexample %}

Currently available aspect ratio containers:

* `.container-4-3`
* `.container-16-9`
* `.container-185-1` (1.85:1)
* `.container-16-9`
* `.container-16-10`
* `.container-1618-1` (1.618:1), also `.container-golden`
