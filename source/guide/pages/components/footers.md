---
title: Footers
layout: page
---

Footers for whole pages and sections.

## Article footer

This is a general style for credits at the bottom of the article. This is repeated in the [bylines and credits section](./credits.html).

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

## Copyright

{% example html %}

<div class="copyright">
  <div class="container-lg">
    &copy; 2017 StarTribune. All rights reserved.
  </div>
</div>
{% endexample %}
