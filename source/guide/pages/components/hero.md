---
title: Hero
layout: page
---

Hero's are the large top section of a page, usually for larger projects.

## Simple hero

{% example html %}
<div class="hero">
  <h1>This is a Big Deal</h1>

  <p class="lead container-sm">Here's a lead-in paragraph to let you know what about to happen.</p>

  <div class="byline">
    <address>By
      <a rel="author" href="http://example.com/author">John Doe</a>
      and
      <a rel="author" href="http://example.com/author">Jane Doh</a>
    </address>
    <span class="spacer"></span>
    Star Tribune
    <span class="spacer-alt"></span>
    <time pubdate datetime="2017-07-30T16:00:00">July 30, 2017 &mdash; 4:00pm</time>
  </div>
</div>
{% endexample %}

## Invert or fade

{% example html %}
<div class="hero hero-fade-in hero-invert">
  <h1>This is a Big Deal</h1>

  <p class="lead container-sm">Here's a lead-in paragraph to let you know what about to happen.</p>

  <div class="byline">
    <address>By
      <a rel="author" href="http://example.com/author">John Doe</a>
      and
      <a rel="author" href="http://example.com/author">Jane Doh</a>
    </address>
    <span class="spacer"></span>
    Star Tribune
    <span class="spacer-alt"></span>
    <time pubdate datetime="2017-07-30T16:00:00">July 30, 2017 &mdash; 4:00pm</time>
  </div>
</div>
{% endexample %}

## Full page

{% example html %}
<div class="hero hero-full hero-invert" style="background-image: url('http://stmedia.stimg.co/zebra1_mask.jpg?w=2000');">
  <div class="hero-bottom">
    <h1 class="shadow text-uppercase">Watch out for those zebra mussels!</h1>
    <div class="shadow" class="scroll-down">Scroll <i class="fa fa-chevron-down"></i></div>
  </div>
</div>
{% endexample %}
