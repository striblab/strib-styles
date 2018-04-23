---
title: Breakpoints
layout: page
---

Breakpoints are common device sizes at which content could change and re-align. It's important to note that breakpoints may be based on common device widths, but they are essentially arbitrary, especially given the multitude of devices available. Content should look good at any reasonable device width.

Media queries are "mobile-first", meaning that the default without a media query is assumed to be the smallest possible device, and media queries such as `@media (min-width: 576px) { ... }` are used to change the design on larger screens.

## Variables

Breakpoints are defined in the `$breakpoints` variable. This can be updated if you are using the library via SASS. The number of items or the keys can change, though it is important to go from smallest to largest, and it is suggested to always keep the first item at `0`.

{% highlight sass %}
$breakpoints: (
default: 0,
xs: 420px,
sm: 576px,
md: 768px,
lg: 992px,
xl: 1200px
);
{% endhighlight %}

Related, the core font size is defined by breakpoints. Since `em`'s are used for spacing, this allows for everything, including spacing, to adjust relative to the font size. So, if you change the breakpoints variable, make sure to update the breakpoints font variable.

{% highlight sass %}
$breakpoints-font-size: (
default: 16px,
xs: 16px,
sm: 16px,
md: 16px,
lg: 17px,
xl: 18px
);
{% endhighlight %}

## Suffixes

It is common for relevant classes to have suffixes that apply to specific breakpoints. For instance a class that makes something blue by default might be `.blue`, but if you wanted to only have it blue for medium-sized screens then we might use something like `.blue-md`.
