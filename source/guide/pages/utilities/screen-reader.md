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
