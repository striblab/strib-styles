---
title: Datelines
layout: page
---

Styling for the dateline. Note that [schema.org](http://schema.org/) provides a [dateline](http://schema.org/dateline) property.

## On it's own line

{% example html %}

<p class="dateline" itemprop="dateline">
  <span class="dateline-location">Minneapolis, Minn.</span>
</p>

<p class="dateline" itemprop="dateline">
  <span class="dateline-location">Minneapolis, Minn.</span>, <time pubdate datetime="2017-10-30" itemprop="datePublished">October 30th, 2017</time>
</p>

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ...</p>
{% endexample %}

## Inline

{% example html %}

<p>
  <span class="dateline" itemprop="dateline">
    <span class="dateline-location">Minneapolis</span>,  Minn.
  </span>

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into ...

</p>
{% endexample %}
