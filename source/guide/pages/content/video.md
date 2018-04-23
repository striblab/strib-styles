---
title: Video
layout: page
---

Styling for videos.

## Responsive video

By default, videos are responsive, meaning that their max width is set to `100%` and their height to `auto`.
This will fill the parent container width with the correct aspect ratio of the video (16x9 vs 4:3). The `controls` attribute will overlay the controls at the bottom of the video. Aspect ratio is not altered.

Note that the `autoplay` attribute does not work on iOs devices, and Chrome will not autoplay if there is audio. Overall, avoid the autoplay attribute unless it makes sense for the content.

{% example html %}

<figure>
  <video width="100%" height="auto" autoplay controls>
    <source src="http://static.startribune.com.s3.amazonaws.com/video/tragic-harvest-330403811.mp4" type="video/mp4">
    <source src="http://static.startribune.com.s3.amazonaws.com/video/tragic-harvest-330403811.ogg" type="video/ogg">
    Your browser does not support the video tag.
  </video>

  <cite>Ms. Videographer</cite>
  <figcaption>
    <span class="readin">Crop Killer: </span>
    Tractor McTractorface crushes rows and rows of innocent plants.
  </figcaption>
</figure>
{% endexample %}
