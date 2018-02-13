---
title: gallery
layout: page
---

The gallery &lt;strib-tag&gt; allows you to place any Clickability photo gallery into any spot in your article.
The gallery &lt;strib-tag&gt; accepts the following required and optional parameters:

* <code>id</code>

A required parameter populated with the id of a Clickability photo gallery

* <code>readin</code>

An optional parameter populated with a readin, which appears in bold just before the caption begins. If used with class="multi-gallery" readin will replace the gallery icon and word " Gallery: "

* <code>caption</code>

An optional parameter populated with the caption you which to see adjacent to the image.

* <code>byline</code>

An optional parameter populated with the photographer's credit.

* <code>class</code>

An optional parameter populated with a special class useful to designers. 
If class contains 'multi-gallery' then the gallery will display thumbnail going to a modal gallery display. 
This is the only way multiple galleries can be shown on the page at the same time.
defaults to 'gallery' - which displays and functions inline.

* <code>scale</code>

An optional parameter populated with a size value corresponding to one of our standard layout widths. The absence of a scale value will result in a small image floated left in the copy. 
Other scale values are: m = 525px  l = 853px  xl = 970px

* <code>click</code>

An optional parameter that, when set to "no", disables the popup overlay and removes the popup icon from the image

* <code>layout</code>

An optional parameter that, when set to "overline", displays the thumbnail going to a modal gallery display with design elements (see below)


## twig locations

desktop-theme/strib-tag/gallery.twig

uses components/media-gallery-inline.twig
and components/media-gallery.twig

## Standard example

The default gallery strib-tag without optional parameters will generate this inline gallery:
{% highlight twig %}
<strib type="gallery" id="302652371"></strib>
{% endhighlight %}