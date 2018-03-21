---
title: Footers
layout: page
---

Footers for whole pages and sections.

## Page footer

The page footer is simply a footer with semantic tags. Add copy right section if needed.

{% example html %}

<footer role="contentinfo" class="with-copyright">
  <div class="container-lg">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>

  <div class="copyright">
    <div class="container-lg">
      &copy; 2018 StarTribune. All rights reserved.
    </div>
  </div>
</footer>
{% endexample %}

## Article footer

This is a general style for credits at the bottom of the article. You can use the `.article-footer` class if for some reason you are unable to use semantic tags. This is repeated in the [bylines and credits section](./credits.html).

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

## Expanded article footer

For a longer list of credits at the bottom of a project.

{% example html %}

<article>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  <footer>
    <h1>Credits</h1>

    <ul class="credits">
      <li>Edited by John DoeEditor</li>
      <li>Data analysis by Jane DoeData</li>
      <li>Design and development by Jem DoeDesign</li>
    </ul>

    <h1>Methodology</h1>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  </footer>
</article>
{% endexample %}
