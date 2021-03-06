---
title: Buttons
layout: page
---

Buttons are used in forms and for interaction in other places.

## Default

There are many ways to get a button style.

{% example html %}
<button type="button">Button</button>
<input id="example-input-submit" type="submit" value="Input">
<input id="example-input-reset" type="reset" value="Input reset">
<input id="example-input-button" type="button" value="Input button">
<a class="button" href="http://startribune.com" target="_blank" rel="noopener">Link</a>
<a href="#" role="button" type="button">Interactive link button</a>
{% endexample %}

## Styles

{% example html %}
<button type="button">Button</button>
<button type="button" class="secondary">Secondary</button>
<button type="button" class="secondary-dark">Secondary dark</button>
<button type="button" class="danger">Danger</button>
<button type="button" class="warning">Warning</button>
<button type="button" class="dark">Dark</button>
<button type="button" class="light">Light</button>
{% endexample %}

## Outlines

{% example html %}
<button type="button" class="button-outline">Button</button>
<button type="button" class="button-outline secondary">Secondary</button>
<button type="button" class="button-outline secondary-dark">Secondary dark</button>
<button type="button" class="button-outline danger">Danger</button>
<button type="button" class="button-outline warning">Warning</button>
<button type="button" class="button-outline dark">Dark</button>
<button type="button" class="button-outline light">Light</button>
{% endexample %}

## Link

Link style buttons.

{% example html %}
<button type="button">Button</button>
<button type="button" class="button-link">Button</button>
<button type="button" class="button-link secondary">Secondary</button>
<button type="button" class="button-link secondary-dark">Secondary dark</button>
<button type="button" class="button-link danger">Danger</button>
<button type="button" class="button-link warning">Warning</button>
<button type="button" class="button-link dark">Dark</button>
<button type="button" class="button-link light">Light</button>
{% endexample %}

## Disabled

{% example html %}
<button type="button" disabled>Button</button>
<button type="button" class="secondary" disabled>Secondary</button>
<button type="button" class="secondary-dark" disabled>Secondary dark</button>
<button type="button" class="danger" disabled>Danger</button>
<button type="button" class="warning" disabled>Warning</button>
<button type="button" class="dark" disabled>Dark</button>
<button type="button" class="light" disabled>Light</button>
{% endexample %}

## Icons

Feel free to use icons in buttons, though, make sure to see the [icons](../content/icons.html) section.

{% example html %}
<button type="button">
<i class="strib-icon strib-search"></i>
</button>

<button type="button" class="button-outline">
  <i class="strib-icon strib-person"></i>
</button>

<button type="button" class="secondary">
  <i class="strib-icon strib-strib-star "></i>
</button>

<button type="button" class="button-outline secondary">
  <i class="strib-icon strib-close"></i>
</button>
{% endexample %}

## Making your own button

You can use SASS to easily create new buttons with specific colors.

{% highlight scss %}
.custom-solid-button {
  @include button();
  @include button-colors('pink');
}

.custom-outline-button {
  @include button();
  @include button-outline-colors('pink');
}

.custom-link-button {
  @include button();
  @include button-outline-colors('pink', true);
}
{% endhighlight %}
