---
title: Navigation
layout: page
---

Navigation styling. Note that the StarTribune logo and wordmark are from the [Strib Icons](../content/icons.html), and you will need to make sure the JS is included to use it.

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

Use `.top-nav` to make a simple nav for the top of a page.

{% example html %}

<nav class="nav-top">
  <div class="container-lg">
    <a href="/" class="logo" title="Home">      
      <svg class="strib-icon-svg">
        <use xlink:href="#strib-strib-logo"></use>
      </svg>

      <span class="sr-only">Go to homepage</span>
    </a>

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
          <svg class="strib-icon-svg">
            <use xlink:href="#strib-strib-logo"></use>
          </svg>

          <span class="sr-only">Star Tribune home</span>
        </a>
      </li>
    </ul>

    <ul class="section-start">
      <li class="spacer-right">
        <a href="http://startribune.com/">
          <i class="strib-icon strib-home"></i>
          <span class="sr-only">Star Tribune home</span>
        </a>
      </li>

      <li class="spacer-right">All sections</li>

      <li class="spacer-right">
        <a href="http://startribune.com/search">
          <i class="strib-icon strib-search"></i>
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
        <a href="http://startribune.com/login">
          <i class="strib-icon strib-person"></i>
          &nbsp;Log in
        </a>
      </li>

      <li class="align-end">
        <a href="http://startribune.com/signup">Subscriptions</a>
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
