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

Text and typographic utlity classes.  See [Fonts](#fonts) for specific classes for fonts.

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

## Fonts

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

### Variables and functions

The fonts are available as variables an functions as well, though it may be more appropriate to use the [context](#contexts) function.

Each font variable is actually a [map](http://sass-lang.com/documentation/Sass/Script/Value/Map.html) which defines CSS properties. They are individual variables, as well as a set in `$font-sets`.  There is also a mixin function to include in your styles.

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

## Contexts

**Contexts** define some high level properties, a bit like switching the theme but less heavy-handed. Overall, we use context to change the default typography. You should change the context with a class, most likely, at the root of your project, such as `<body class="feature">`.

### News

The default, assumed context is _news_; you can use the `.context-news` class to switch to this context explicitly if you like.

This guide is in the _news_ context and all the typography described above is that context, so there's no need to repeat here.

### Feature

For features or "soft news" context, use the `.context-feature` context.

<div class="alert alert-warning"><span class="sr-only">Warning: </span>This section needs some serious work.</div>

{% example html %}

<div class="context-feature">
  <h1 class="title">This is a title</h1>

  <p>Here is the default paragraph style. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>

  <div>While this is the default. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</div>

  <h1>An H1 heading</h1>
</div>
{% endexample %}

### Variables and functions

If you want to refer to a specific context and a specific context, for instance the *heading* styles used for *news*, you can use the `context-property-set` mixin.

{% highlight sass %}
// This will include the properties for headings in the news context.
.custom-class {
  @include context-property-set('news', 'heading');
}
{% endhighlight %}

If you are working on the style guide or just need some that covers multiple contexts, use the `all-contexts` mixin.

{% highlight sass %}
// This will create properties for the default context, and then for
// ".context-feature .custom-class" and any other contexts.
.custom-class {
  @include all-contexts('heading');
}

// This will create properties for the default context, and then for
// ".context-feature.custom-class" and any other contexts.
.custom-class {
  @include all-contexts('heading', true);
}
{% endhighlight %}

Contexts are managed in the `$contexts` variable.

{% highlight sass %}
$contexts: (
    news:
      (
        default: $font-benton-sans,
        text: $font-poynter-serif,
        heading: $font-whitman-display,
        lead: $font-whitman-display,
        heading-depth: $font-benton-sans,
        label: map-merge($font-benton-sans, (
          font-weight: bold
        )),
        title: map-merge($font-popular, (
          text-transform: uppercase,
          font-weight: bold
        )),
        mono: $font-menlo
      ),
    feature:
      (
        default: $font-benton-sans,
        text: $font-benton-sans-condensed,
        heading: $font-benton-sans,
        lead: $font-popular
      )
  );
{% endhighlight %}

You can add your own context, by overriding the `$contexts` variable.  You can also change the default context from *news* with the `$context-default` variable.

### Utility classes

If you need context aware styling, you can use the following classes:

{% example html %}

<div class="context-set-default">Default font</div>
<div class="context-feature">
  <div class="context-set-default">Default in feature context</div>
</div>

<div class="context-set-text">Text</div>
<div class="context-feature">
  <div class="context-set-text">Text in feature context</div>
</div>

<div class="context-set-heading">Heading</div>
<div class="context-feature">
  <div class="context-set-heading">Heading in feature context</div>
</div>

{% endexample %}
