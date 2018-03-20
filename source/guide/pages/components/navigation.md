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

## Site nav

The following is a not-pixel-perfect reproduction of the navigation found on most pages on the StarTribune site.

{% example html %}

<nav class="nav-strib-site">
  <div class="container-lg cf">
    <ul class="section-center">
      <li>
        <a href="http://startribune.com/" class="logo">
          <span class="icon icon-logo"></span>
          <span class="sr-only">Star Tribune home</span>
        </a>
      </li>
    </ul>

    <ul class="section-start">
      <li class="align-start spacer-right">
        <a href="http://startribune.com/" class="home">
          <span class="icon icon-home"></span>
          <span class="sr-only">Star Tribune home</span>
        </a>
      </li>

      <li class="align-start spacer-right">All sections</li>

      <li class="align-start spacer-right">
        <a href="http://startribune.com/search" class="logo">
          <span class="icon icon-search"></span>
          <span class="sr-only">Search the Star Tribune</span>
        </a>
      </li>

      <li class="align-start weekly-ads">
        <a href="http://www.startribune.com/weekly-ads">
          <img src="https://stmedia.stimg.co/weeklyAdsLabel.png" alt="Weekly ads label" />
        </a>
      </li>
    </ul>

    <ul class="section-end">
      <li class="align-end spacer-right">
        <a href="http://startribune.com/login" class="logo">
          <span class="icon icon-person"></span>
          &nbsp;Log in
        </a>
      </li>

      <li class="align-end">
        <a href="http://startribune.com/signup" class="logo">Subscriptions</a>
      </li>
    </ul>

  </div>
</nav>
{% endexample %}
