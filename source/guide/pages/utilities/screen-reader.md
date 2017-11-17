---
title: Screen readers
layout: page
---

Use screenreader utilities to hide elements on all devices except screen readers.

Hide an element to all devices except screen readers with `.sr-only`. Combine `.sr-only` with `.sr-only-focusable` to show the element again when it’s focused (e.g. by a keyboard-only user). Can also be used as mixins.

{% highlight html %}
<label class="sr-only">This is label is only important for screen readers</label>
{% endhighlight %}

[Layout](../styles/layout.html) provides a helper class for links to skip to the main content of the page.

{% highlight html %}
<a href="#main-content" class="to-main-content">Skip to main content</a>
{% endhighlight %}

## Images

To help enforce good practices, images without an `alt` attribute will be styled distinctively.  In some cases, such as icons that are only useful visually, use a black `alt=""` attribute.

{% example html %}
<img src="http://placekitten.com/g/250/250">
<img src="http://placekitten.com/g/250/250" alt="">
<img src="http://placekitten.com/g/250/250" alt="Placeholder image of a kitten">
{% endexample %}
