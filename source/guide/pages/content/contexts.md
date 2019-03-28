---
title: Contexts
layout: page
---

**Contexts** define some high level properties, a bit like switching the theme but less heavy-handed. Overall, we use context to change the default typography. You should change the context with a class, most likely, at the root of your project, such as `<body class="feature">`.

## News

The default, assumed context is _news_; you can use the `.context-news` class to switch to this context explicitly if you like.

This guide is in the _news_ context and all the typography described above is that context, so there's no need to repeat here.

## Feature

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

## Variables and functions

If you want to refer to a specific context and a specific context, for instance the _heading_ styles used for _news_, you can use the `context-property-set` mixin.

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

Contexts are managed in the `$contexts` variable.  You can add your own context, by overriding the `$contexts` variable. You can also change the default context from _news_ with the `$context-default` variable.

## Utility classes

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
