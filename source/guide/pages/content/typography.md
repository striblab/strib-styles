---
title: Typography
layout: page
---

Typography.

## Text

{% example html %}
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
{% endexample %}

The relative variables to change the defaults:

{% highlight sass %}
$font-text: $font-poynter-serif !default;
$font-text-letter-spacing: -0.3px !default;
$font-text-alt: $font-benton-sans !default;
{% endhighlight %}


## Headings

{% example html %}
<h1>Heading one</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

<h2>Heading two</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

<h3>Heading two</h3>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

<h4>Heading two</h4>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

<h5>Heading two</h5>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

<h6>Heading two</h6>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
{% endexample %}

To use the alternate heading font, add the `.heading-alternative` class.  For instance:

{% example html %}
<h2 class="heading-alternate">Heading two</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
{% endexample %}

The relative variables to change the defaults:

{% highlight sass %}
$font-heading: $font-whitman-display-compressed-bold !default;
$font-heading-alt: $font-benton-sans !default;
{% endhighlight %}

## Links

The default link is like the following.

{% example html %}
<a href="https://example.com">Link to example</a>
{% endexample %}

An alternate styling can be used with the `.link-alternate` class.

{% example html %}
<a class="link-alternate" href="https://example.com">Link to example</a>
{% endexample %}

## Lead paragraph

To have a paragraph stand out, use the `.lead` class.

{% example html %}
<p class="lead">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.</p>

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
{% endexample %}

## Lists

### Ordered lists

{% example html %}
<ol>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3
    <ol>
      <li>Sub item a</li>
      <li>Sub item b
        <ol>
          <li>Sub-sub item i</li>
          <li>Sub-sub item ii</li>
        </ol>
      </li>
    </ol>
  </li>
  <li>List item 4</li>
  <li>List item 5</li>
</ol>
{% endexample %}

### Unordered list

{% example html %}
<ul>
  <li>List item 1</li>
  <li>List item 2</li>
  <li>List item 3
    <ul>
      <li>Sub item a</li>
      <li>Sub item b
        <ul>
          <li>Sub-sub item i</li>
          <li>Sub-sub item ii</li>
        </ul>
      </li>
    </ul>
  </li>
  <li>List item 4</li>
  <li>List item 5</li>
</ul>
{% endexample %}

### Definition lists

{% example html %}
<dl>
  <dt>Term 1</dt>
  <dd>The definition of the first term.</dd>

  <dt>Term 2</dt>
  <dd>The definition of the second term.</dd>
</dl>
{% endexample %}

## Inline text elements

{% example html %}
<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
<p>This is an abbreviation for <abbr title="HyperText Markup Language">HTML</abbr> and <abbr title="Lowercase Example">lowex</abbr>.</p>
{% endexample %}

## Blockquote

{% example html %}
<blockquote>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.
</blockquote>
{% endexample %}

Blockquote with source and citation.

{% example html %}
<blockquote>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

  <footer>
    Taken from <cite>Some Site</cite>
  </footer>
</blockquote>
{% endexample %}
