---
title: Video
layout: page
---

Styling for videos.

## Responsive video

By default, videos are responsive, meaning that their max width is set to `100%` and their height to `auto`.<br>
That will fill the parent container width with the correct aspect ratio of the video (16x9 vs 4:3).<br>
The `autoplay` attribute does not work on iOs devices.<br>
The `controls` attribute will overlay the controls at the bottom of the video. Aspect ratio is not altered.

{% example html %}
<figure>
	<video width="100%" height="auto" autoplay controls>
		<source src="http://static.startribune.com.s3.amazonaws.com/video/tragic-harvest-330403811.mp4" type="video/mp4">
		<source src="http://static.startribune.com.s3.amazonaws.com/video/tragic-harvest-330403811.ogg" type="video/ogg">
		Your browser does not support the video tag.
	</video>
	<cite>Ms. Videographer</cite>
	<figcaption><span class="readin">Crop Killer: </span>Tractor McTractorface crushes rows and rows of innocent plants.</figcaption>
</figure>
{% endexample %}

### More performant images

Though not specific to this style guide, using the `srcset` and `sizes` attributes for images can greatly help performance. [srcset](https://cloudfour.com/thinks/responsive-images-101-part-4-srcset-width-descriptors/) defines different sized images, and [sizes](https://cloudfour.com/thinks/responsive-images-101-part-5-sizes/) describes when to use which images. Note that the `sizes` attribute can be a bit confusing and annoying since its kind of like describing your CSS twice. And for further performance and cross-platform capatability, consider using the `<picture>` to support `webp` and other formats.

{% example html %}
<img src="http://placekitten.com/2400/1200" alt="Kitten placeholder image"
    srcset="http://placekitten.com/400/200 400w,
      http://placekitten.com/800/400 800w,
      http://placekitten.com/1000/500 1000w,
      http://placekitten.com/1500/750 1500w,
      http://placekitten.com/2000/1000 2000w"
    sizes="(max-width: 800px) 100vw, 95vw">
{% endexample %}

Note that if you load an image with multiple sources, the browser will simply use the largest one it has in cache, even if you make your window smaller. So, for testing, you may need to clear the cache to see specific images loaded.

## Figure

A figure can be anything really, though often is an image or video. Figures usually need a caption which can be inserted with `<figcaption>`. Often a source is needed with an image. Though there is not a very appropriate HTML tag for this, the `cite` tag is used.

{% example html %}

<figure>
  <img src="http://placekitten.com/1200/420" alt="Kitten placeholder image">

<cite>PlaceKitten</cite>

  <figcaption>Fuzzy the kitten</figcaption>
</figure>
{% endexample %}

## Background fill

To get an image to completely fill the background of a container, add the `.image-bg-fill` class and set the background image. Note that this is using an [aspect ratio container](../layout/containers.html) to maintain a specific aspect ratio.

{% example html %}

<div class="image-bg-fill container-16-9" style="background-image: url(http://placekitten.com/1500/1500);"></div>
{% endexample %}
