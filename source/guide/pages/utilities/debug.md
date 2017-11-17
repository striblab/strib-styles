---
title: Debugging and Diagnostics
layout: page
---

The debug styles are helpful in identifying potential semantics, accessibility, and functional issues in markup. All the following are based on having the `$debug` variable set to `true`.

## Alt tag in images

Alt tags tell screen readers how to describe images.  Images without an `alt` attribute will be styled distinctively.  In some cases, such as icons that are only useful visually, use a black `alt=""` attribute.

{% example html %}
<img src="http://placekitten.com/g/250/250">
<img src="http://placekitten.com/g/250/250" alt="">
<img src="http://placekitten.com/g/250/250" alt="Placeholder image of a kitten">
{% endexample %}

## Links and href

All links should have an `href` attribute.

{% example html %}
<a>No href</a> <br>
<a href="javascript action">Sketchy href</a> <br>
<a href="http://example.com">Valid</a>
{% endexample %}

## Forms

All input type elements should have an `id` attribute which corresponds to a `for` attribute on a `<label>` element.  And all `<input>` should have a `type` attribute.

{% example html %}
<form>
  <label>Search:</label>
  <input type="search">

  <br><br>

  <label for="search-no-type">Inputs should have a type:</label>
  <input id="search-no-type">

  <br><br>

  <label for="search-input">Better search:</label>
  <input id="search-input" type="search">

  <br><br>

  <input type="submit">
</form>
{% endexample %}

## Deprecated elements and attributes

These are just some examples of deprecated elements.

{% example html %}
<acronym>acronym</acronym> <br>
<big>big</big> <br>
<center>center</center>
<p bgcolor="red">bgcolor attribute</p>
{% endexample %}

## Inline JS attributes

You should not use inline Javascript event handlers.

{% example html %}
<p onclick="alert('this is a bad idea');">Watchout! This element has an inline JS event attribute for clicking.</p>
{% endexample %}
