---
title: Figures and images
layout: page
---

Styling for figures, images, and similar.

## Images

By default, images are responsive, meaning that their max width is set to `100%` and their height to `auto`.

{% example html %}
<img src="http://placekitten.com/1200/420" alt="Kitten placeholder image">
{% endexample %}

## Figure

A figure can be anything, usually something needs a caption, but this example uses an image.  Often a source is needed with an image.  Though there is not a very appropriate HTML tag for this, the `cite` tag is used.

{% example html %}
<figure>
  <img src="http://placekitten.com/1200/420" alt="Kitten placeholder image">

  <cite>PlaceKitten</cite>
  <figcaption>Fuzzy the kitten</figcaption>
</figure>
{% endexample %}

## Background fill

To get an image to completely fill the background of a container, add the `.image-bg-fill` class and set the background image.

{% example html %}
<div class="image-bg-fill" style="background-image: url(http://placekitten.com/1200/1200); width: 100%; height: 30em;"></div>
{% endexample %}
