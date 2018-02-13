---
title: Video
layout: page
---

## The video &lt;strib-tag&gt; allows you to place any Clickability video into any spot in your article.

The video &lt;strib-tag&gt; accepts the following required and optional parameters:

* <code>id</code>

A required parameter populated with the id of a Clickability video.
Video must be published in order to be seen on news-platform branches or ?preview=1. 

* <code>readin</code>

An optional parameter populated with a readin, which appears in bold just before the caption begins. 

Readin will push the video icon and " Video (02:15) " to the end of the caption.

* <code>class</code>

An optional parameter populated with a special class useful to designers. 

If class contains 'videoplayer small' then the video will display thumbnail going to a modal video display. 

* <code>w</code> and <code>h</code>

An optional parameter which overrides the default 300 x 194 thumbnail, used for bigger, clearer displays of video thumbnails.

* <code>layout</code>

An optional parameter that, when set to "overline", displays the thumbnail going to a modal video display with design elements (see below)



## twig locations

desktop-theme/strib-tag/video.twig



## Standard example

{% highlight twig %}
<strib type="video" id="299767921"></strib>
{% endhighlight %}
