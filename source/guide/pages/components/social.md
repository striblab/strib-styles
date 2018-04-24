---
title: Social and sharing
layout: page
---

Styling for social and sharing bits.

## Share buttons

Use the appropriate `social-link-*` class to assign the corresponding color to the link, or leave it off to use the Star Tribune green.

{% example html %}

<ul class="social-links">
  <li class="social-link-facebook">
    <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fstrib.mn%2Fexample" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-facebook-circle"></i>
      <span class="sr-only">Share this page on Facebook</span>
    </a>
  </li>

  <li class="social-link-twitter">
    <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fstrib.mn%2Fexample&text=Example+text" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-twitter-circle"></i>
      <span class="sr-only">Share this page on Twitter</span>
    </a>
  </li>

  <li class="social-link-google">
    <a href="https://plus.google.com/share?url=http%3A%2F%2Fstrib.mn%2Fexample" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-google-circle"></i>
      <span class="sr-only">Share this page on Google+</span>
    </a>
  </li>

  <li class="social-link-pinterest">
    <a href="https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fstrib.mn%2Fexample&description=Example+description" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-pinterest-circle"></i>
      <span class="sr-only">Share this page on Pinterest</span>
    </a>
  </li>

  <li class="social-link-linkedin">
    <a href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fstrib.mn%2Fexample&title=Example+title&summary=Example+summary" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-linkedin-circle"></i>
      <span class="sr-only">Share this page on LinkedIn</span>
    </a>
  </li>

  <li class="social-link-tumblr">
    <a href="http://www.tumblr.com/share/link?url=http%3A%2F%2Fstrib.mn%2Fexample" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-tumblr-circle"></i>
      <span class="sr-only">Share this page on Tumblr</span>
    </a>
  </li>
</ul>

<ul class="social-links">
  <li>
    <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fstrib.mn%2Fexample" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-facebook-circle"></i>
      <span class="sr-only">Share this page on Facebook</span>
    </a>
  </li>

  <li>
    <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fstrib.mn%2Fexample&text=Example+text" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-twitter-circle"></i>
      <span class="sr-only">Share this page on Twitter</span>
    </a>
  </li>
</ul>
{% endexample %}

Use the `.social-links-muted` class to show a muted version.

{% example html %}

<ul class="social-links social-links-muted">
  <li class="social-link-facebook">
    <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fstrib.mn%2Fexample" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-facebook-circle"></i>
      <span class="sr-only">Share this page on Facebook</span>
    </a>
  </li>

  <li class="social-link-twitter">
    <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fstrib.mn%2Fexample&text=Example+text" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-twitter-circle"></i>
      <span class="sr-only">Share this page on Twitter</span>
    </a>
  </li>

  <li class="social-link-google">
    <a href="https://plus.google.com/share?url=http%3A%2F%2Fstrib.mn%2Fexample" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-google-circle"></i>
      <span class="sr-only">Share this page on Google+</span>
    </a>
  </li>

  <li class="social-link-pinterest">
    <a href="https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fstrib.mn%2Fexample&description=Example+description" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-pinterest-circle"></i>
      <span class="sr-only">Share this page on Pinterest</span>
    </a>
  </li>

  <li class="social-link-linkedin">
    <a href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fstrib.mn%2Fexample&title=Example+title&summary=Example+summary" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-linkedin-circle"></i>
      <span class="sr-only">Share this page on LinkedIn</span>
    </a>
  </li>

  <li class="social-link-tumblr">
    <a href="http://www.tumblr.com/share/link?url=http%3A%2F%2Fstrib.mn%2Fexample" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-tumblr-circle"></i>
      <span class="sr-only">Share this page on Tumblr</span>
    </a>
  </li>
</ul>

<ul class="social-links social-links-muted">
  <li>
    <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fstrib.mn%2Fexample" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-facebook-circle"></i>
      <span class="sr-only">Share this page on Facebook</span>
    </a>
  </li>

  <li>
    <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fstrib.mn%2Fexample&text=Example+text" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-twitter-circle"></i>
      <span class="sr-only">Share this page on Twitter</span>
    </a>
  </li>
</ul>
{% endexample %}

## Vertical styles

{% example html %}

<ul class="social-links social-links-vertical social-links-muted">
  <li class="social-link-facebook">
    <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fstrib.mn%2Fexample" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-facebook"></i>
      Share
    </a>
  </li>

  <li class="social-link-twitter">
    <a href="https://twitter.com/intent/tweet?url=http%3A%2F%2Fstrib.mn%2Fexample&text=Example+text" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-twitter"></i>
      Tweet
    </a>
  </li>

  <li class="social-link-google">
    <a href="https://plus.google.com/share?url=http%3A%2F%2Fstrib.mn%2Fexample" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-google"></i>
      Post
    </a>
  </li>

  <li class="social-link-pinterest">
    <a href="https://pinterest.com/pin/create/button/?url=http%3A%2F%2Fstrib.mn%2Fexample&description=Example+description" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-pinterest"></i>
      Pin
    </a>
  </li>

  <li class="social-link-linkedin">
    <a href="http://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fstrib.mn%2Fexample&title=Example+title&summary=Example+summary" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-linkedin"></i>
      Share
    </a>
  </li>

  <li class="social-link-tumblr">
    <a href="http://www.tumblr.com/share/link?url=http%3A%2F%2Fstrib.mn%2Fexample" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-tumblr"></i>
      Post
    </a>
  </li>
</ul>
{% endexample %}

## Social accounts

For reference, here are the social account links. These are usually just in green.

{% example html %}

<ul class="social-links">
  <li>
    <a href="https://www.facebook.com/startribune/" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-facebook-circle"></i>
      <span class="sr-only">Star Tribune Facebook page</span>
    </a>
  </li>

  <li>
    <a href="https://twitter.com/StarTribune/" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-twitter-circle"></i>
      <span class="sr-only">Star Tribune Twitter account</span>
    </a>
  </li>

  <li>
    <a href="https://plus.google.com/+startribune/" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-google-circle"></i>
      <span class="sr-only">Star Tribune Google+ account</span>
    </a>
  </li>

  <li>
    <a href="http://pinterest.com/startribune/" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-pinterest-circle"></i>
      <span class="sr-only">Star Tribune Pinterest page</span>
    </a>
  </li>

  <li>
    <a href="http://www.instagram.com/startribune/" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-instagram-circle"></i>
      <span class="sr-only">Star Tribune Instagram account</span>
    </a>
  </li>

  <li>
    <a href="http://startribune.tumblr.com/" target="_blank" rel="noopener">
      <i class="strib-icon strib-social-tumblr-circle"></i>
      <span class="sr-only">Star Tribune Tumblr page</span>
    </a>
  </li>
</ul>
{% endexample %}
