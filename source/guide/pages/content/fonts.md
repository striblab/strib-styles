---
title: Fonts
layout: page
---

All fonts for reference both visual and utility classes.

{% example html %}

<h2 class="font-benton-sans">Benton Sans (<span style="font-style:italic">italic</span>, <span style="font-weight:bold">bold</span>)</h2>
<p class="font-benton-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<h2 class="font-benton-sans-condensed">Benton Sans Condensed</h2>
<p class="font-benton-sans-condensed">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<h2 class="font-popular">Popular (<span style="font-weight:bold">bold</span>)</h2>
<p class="font-populars">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<h2 class="font-popular-light">Popular Light</h2>
<p class="font-popular-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<h2 class="font-popular-medium">Popular Medium</h2>
<p class="font-popular-medium">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<h2 class="font-poynter-serif">Poynter Serif (<span style="font-style:italic">italic</span>, <span style="font-weight:bold">bold</span>, <span style="font-style:italic;font-weight:bold">bold italic</span>)</h2>
<p class="font-poynter-serif">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<h2 class="font-whitman-display">Whitman Display (<span style="font-style:italic">italic</span>, <span style="font-weight:bold">bold</span>)</h2>
<p class="font-whitman-display">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<h2 class="font-whitman-display-condensed-bold">Whitman Display Condensed Bold</h2>
<p class="font-whitman-display-condensed-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<h2 class="font-whitman-display-compressed-bold">Whitman Display Compressed Bold</h2>
<p class="font-whitman-display-compressed-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<h2 class="font-whitman-osf">Whitman OSF (<span style="font-style:italic">italic</span>, <span style="font-weight:bold">bold</span>)</h2>
<p class="font-whitman-osf">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<h2 class="font-menlo">Menlo</h2>
<p class="font-menlo">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
{% endexample %}

## Variables and functions

The fonts are available as variables and functions as well. The best way to set a font if you are using SASS is to use the `font-styles` mixin:

{% highlight sass %}
.custom-class {
  // Set to use the Popular Light font
  @include font-styles('popular-light');
}
{% endhighlight %}

Each font variable is actually a [map](http://sass-lang.com/documentation/Sass/Script/Value/Map.html) which defines CSS properties. They are individual variables, as well as a set in `$font-sets`. There is also a mixin function to include in your styles.

{% highlight sass %}
// Individual font property variables
$font-benton-sans
$font-benton-sans-condensed
$font-popular
$font-popular-light
$font-popular-medium
$font-poynter-serif
$font-whitman-display-condensed-bold
$font-whitman-display-compressed-bold
$font-whitman-display
$font-whitman-osf
$font-menlo

// All together if need to loop through
$font-sets: (
  benton-sans: $font-benton-sans,
  benton-sans-condensed: $font-benton-sans-condensed,
  popular: $font-popular,
  popular-light: $font-popular-light,
  popular-medium: $font-popular-medium,
  poynter-serif: $font-poynter-serif,
  whitman-display-condensed-bold: $font-whitman-display-condensed-bold,
  whitman-display-compressed-bold: $font-whitman-display-compressed-bold,
  whitman-display: $font-whitman-display,
  whitman-osf: $font-whitman-osf,
  menlo: $font-menlo
);

// Include in your styles
.custom-class {
  @include font-styles('popular-light');
}
{% endhighlight %}
