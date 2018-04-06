---
title: Credits and bylines
layout: page
---

Credits and bylines can be put in many different places and styles.

## Top bylines

The following is an example that spreads across the whole line. This is the usual style for an article.

{% example html %}

<div class="byline byline-spread">
  <address>By
    <a rel="author" href="http://example.com/author">John Doe</a>
    <span class="spacer"></span>
    Photos by <a rel="author" href="http://example.com/author">Jane Doh</a>
  </address>
  <span class="spacer"></span>
  Star Tribune

<time pubdate datetime="2017-07-30T16:00:00">July 30, 2017 &mdash; 4:00pm</time>

</div>

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
{% endexample %}

An alternate approach is one that is all together.

{% example html %}

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
{% endexample %}

And finally, a more spaced out, but not justified approach.

{% example html %}

<div class="byline byline-space">
  <address>
    Story by <a rel="author" href="http://example.com/author">John Doe</a>
    <span class="spacer"></span>
    Photos by <a rel="author" href="http://example.com/author">Jane Doh</a>
  </address>
  <span class="spacer"></span>
  Star Tribune
  <time pubdate datetime="2017-07-30T16:00:00">July 30, 2017</time>
</div>
{% endexample %}

## Footer bylines

This is a general style for credits at the bottom of the article.

{% example html %}

<article>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  <footer>
    <div class="byline">
      <address>
        <a rel="author" href="mailto:john.doe@example.com">john.doe@example.com</a>
        <a rel="author" href="tel:1-555-555-5555">(555) 555-5555</a>
      </address>
    </div>
  </footer>
</article>
{% endexample %}

For a more expanded footer with multiple credits.

{% example html %}

<article>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  <footer>
    <div class="byline-expanded">
      <address>
        <a rel="author" href="mailto:john.doe@example.com">john.doe@example.com</a>
        <a rel="author" href="tel:1-555-555-5555">(555) 555-5555</a>
      </address>
    </div>
  </footer>
</article>
{% endexample %}
