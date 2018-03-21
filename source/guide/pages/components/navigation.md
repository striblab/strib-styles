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
      <li class="spacer-right">
        <a href="http://startribune.com/" class="home">
          <span class="icon icon-home"></span>
          <span class="sr-only">Star Tribune home</span>
        </a>
      </li>

      <li class="spacer-right">All sections</li>

      <li class="spacer-right">
        <a href="http://startribune.com/search" class="logo">
          <span class="icon icon-search"></span>
          <span class="sr-only">Search the Star Tribune</span>
        </a>
      </li>

      <li class="weekly-ads">
        <a href="http://startribune.com/weekly-ads">
          <img src="https://stmedia.stimg.co/weeklyAdsLabel.png" alt="Weekly ads label" />
        </a>
      </li>
    </ul>

    <ul class="section-end">
      <li class="spacer-right">
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

### Site sub nav

Note that this sub-navigation disappears at sizes smaller than `md` breakpoint.

{% example html %}

<nav class="subnav-strib-site">
  <div class="container-lg">
    <ul>
      <li><a href="http://startribune.com/">Home</a></li>
      <li><a href="http://startribune.com/local/">Local</a></li>
      <li><a href="http://startribune.com/sports/">Sports</a></li>
      <li><a href="http://startribune.com/business/">Business</a></li>
      <li><a href="http://startribune.com/opinion/">Opinion</a></li>
      <li><a href="http://startribune.com/variety/">Variety</a></li>
      <li><a href="http://startribune.com/obituaries/">Obituaries</a></li>
      <li><a href="http://startribune.com/classifieds/">Classifieds</a></li>
      <li><a href="http://startribune.com/autos/">Autos</a></li>
      <li><a href="http://startribune.com/housing/">Housing</a></li>
      <li><a href="http://startribune.com/jobs/">Jobs</a></li>
    </ul>
  </div>
</nav>
{% endexample %}
