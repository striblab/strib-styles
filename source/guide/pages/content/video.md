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

## Background and autoplay

Sometimes we want to have a video as a background that autoplays, for instance as a hero background.  Though on mobile browsers, the `autoplay` attribute will not work, those browsers will allow it if it has both `playsinline` and `muted` attributes.  This means the video will be silent.

The `video` element does not have support for different sized files based on the device, so this should be managed in Javascript; the example below is a very simple way to do this but needs work.

Note that [GIF](https://en.wikipedia.org/wiki/GIF)s may automatically play across browsers, their size is hard to manage, even for very short videos.

{% example html %}
<div style="height: 80vh" class="object-cover-container">
  <video muted playsinline autoplay class="object-cover">
    <source src="https://static.startribune.com/guide/assets/videos/final-four-landscape-1200.webm" type="video/webm">
    <source src="https://static.startribune.com/guide/assets/videos/final-four-landscape-1200.mp4" type="video/mp4">
  </video>
</div>

<script>
  // TODO: This doesn't work in mobile

  // Determine size and orientation for which source to use
  function determineVideoSource() {
    let windowWidth = window.innerWidth;
    let widths = ["300", "600", "900", "1200", "2000"];
    let width = widths[0];
    for (let i = 0; i < widths.length - 1; i++) {
      if (
        windowWidth > parseInt(widths[i], 10) &&
        windowWidth <= parseInt(widths[i + 1], 10)
      ) {
        width = widths[i + 1];
        break;
      }
    }

    // Use media query to determine layout
    let orientation = window.matchMedia("(min-aspect-ratio: 1/1)").matches
      ? "landscape"
      : "portrait";

    // remove, change the source and reload
    let containerEl = document.querySelector('.object-cover-container');
    let videoEl = containerEl.querySelector('video');
    let source1El = containerEl.querySelector('video source:nth-child(1)');
    let source2El = containerEl.querySelector('video source:nth-child(2)');

    containerEl.removeChild(videoEl);
    source1El.setAttribute('src', `https://static.startribune.com/guide/assets/videos/final-four-${orientation}-${width}.webm`);
    source2El.setAttribute('src', `https://static.startribune.com/guide/assets/videos/final-four-${orientation}-${width}.mp4`);

    containerEl.appendChild(videoEl);
  }

  //determineVideoSource();
</script>
{% endexample %}
