---
title: Credits and bylines
layout: page
---

Credits and bylines styling.

## Bylines

{% example html %}
<div class="byline">
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

### Footer

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
