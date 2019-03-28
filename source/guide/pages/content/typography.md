---
title: Typography
layout: page
---

The Star Tribune uses specific typography. Typography can change based on the type on content it is; we refer to these as **[context](#contexts)**. There are also many variables and functions that can be used to refer to certain [fonts](#fonts), styles, or contexts.

_Note that most of the font types are owned by WebType and cannot be reused without permission and are here for internal ease of use only._

## Text

The default used on the page is the following.

{% example html %}

<div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
{% endexample %}

For paragraphs or by adding a `.copy` (or `.text`) class.

{% example html %}

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

<div class="copy">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</div>
{% endexample %}

## Headings

{% example html %}

<h1>Heading one</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

<h2>Heading two</h2>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

<h3>Heading three</h3>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

<h4>Heading four</h4>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

<h5>Heading five</h5>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

<h6>Heading six</h6>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
{% endexample %}

## Title

For section fronts or other page title, use the `.title` class.

{% example html %}

<h1 class="title">Heading one</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
{% endexample %}

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

## Label title

It is suggested to use a `<figure>` or `<aside>` for things that need labels, but you can also use the `.label` class.
{% example html %}

<h3 class="label">Label for this content</h3>

<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
{% endexample %}

## Drop caps

{% example html %}

<p class="drop-caps">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
{% endexample %}

### With image

{% example html %}

<p><span class="drop-caps-image" style="background-image: url('https://i.pinimg.com/originals/c8/47/a8/c847a8ecebf7450e3733fcd19ab87fd8.jpg')">L</span>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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

## Utility classes

Text and typographic utlity classes. See [Fonts](#fonts) for specific classes for fonts.

{% example html %}

<p class="text-small">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<p class="text-large">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<p class="text-xlarge">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<p class="text-uppercase">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<p class="text-lowercase">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<p class="text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<p class="text-right">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

<p class="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
{% endexample %}
