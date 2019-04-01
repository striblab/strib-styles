---
title: Gallery
layout: page
bottom: |
  <script>
    $(document).ready(function() {
      stribStyles.gallery('.example-gallery-1');
    });
  </script>
---

Photo or other media gallery.

## Example

This is a very draft version of a gallery, more a proof-of-concept.

Note that you will have to include the Strib Styles JS and make sure jQuery is on the page as well.  Then this bit of JS will make the Gallery work.

{% highlight js %}
$(document).ready(function() {
  stribStyles.gallery('.example-gallery-1');
});
{% endhighlight %}

{% example html %}
<div class="gallery example-gallery-1">
  <div class="gallery-controls">
    <button class="gallery-previous">
      <i class="strib-icon strib-nav-back"></i>
      <span class="sr-only">Previous</span>
    </button>

    <button class="gallery-next">
      <i class="strib-icon strib-nav-forward"></i>
      <span class="sr-only">Next</span>
    </button>

    <button class="gallery-fullscreen">
      <i class="strib-icon strib-modal"></i>
      <span class="sr-only">Fullscreen</span>
    </button>
  </div>

  <div class="gallery-figures">
    <figure>
      <img src="http://fillmurray.com/g/1024/500" alt="Bill Murray via FillMurray.com">

      <figcaption>
        <i class="strib-icon strib-camera color-green-light"></i>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un
      </figcaption>
    </figure>

    <figure>
      <img src="http://placekitten.com/g/1024/500" alt="Kitten via PlaceKitten.com">

      <figcaption>
        <i class="strib-icon strib-camera color-green-light"></i>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un
      </figcaption>
    </figure>

    <figure>
      <img src="http://placekitten.com/g/1024/700" alt="Kitten via PlaceKitten.com">

      <figcaption>
        <i class="strib-icon strib-camera color-green-light"></i>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un
      </figcaption>
    </figure>
  </div>
</div>
{% endexample %}
