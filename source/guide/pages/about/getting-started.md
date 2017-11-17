---
title: Getting started
layout: page
---

## Quick start

To get up and running quickly, use the CDN version (**TODO: Put on static**) and the following HTML example.

{% highlight html %}
<!doctype html>
<html lang="en">
  <head>
    <title>Hello, world!</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Strib Styles CSS -->
    <link rel="stylesheet" href="http://static.startribune.com/news/projects/strib-styles/X.X.X/strib-styles.default.css" crossorigin="anonymous">
  </head>
  <body class="strib">
    <!-- boilerplate -->
    <a href="#main-content" class="to-main-content">Skip to main content</a>

    <header role="banner">
      <nav>
        <div class="container-lg">
          <a href="{{ base }}" class="logo" title="Home"></a>
          <h1>Style guide</h1>
        </div>
      </nav>
    </header>

    <main id="main-content" class="container-lg" role="main">
      <h1>Page title</h1>

      <p>Content here....</p>
    </main>

    <footer role="contentinfo">
      <div class="container-lg">
        Footer content here....
      </div>

      <div class="copyright">
        <div class="container-lg">
          &copy; 2017 StarTribune. All rights reserved.
        </div>
      </div>
    </footer>
  </body>
</html>
{% endhighlight %}

## Versions

If you are including Strib Styles with plain CSS, there are a few different versions you can use:

* `strib-styles.default.css`: This is the default with the most common parts included.
* `strib-styles.all.css`: This has everything included, which may be unnecessary for your use.
* `strib-styles.root.css`: Same as `default` but with `$root` set to true (see below).
* `strib-styles.default.css`: Same as `all` but with `$root` set to true (see below).

Note that all CSS files are minified and come with a corresponding `.map` that will map back to the original SASS files.

## Wrapper class and root

Strib Styles wraps all its styles in a single class.  This is to help encapsulate the styles as they could be used on a page that has existing styles that we may not want to override.  The default class is `strib`.

### Root of the page

If you are using Strib Styles on the full page, you should make sure to add the `strib` class to the `<body>` tag as noted in the Quick start.  You will also want to set the `$root` variable to true, or use the `strib-styles.root.css` version.

{% highlight sass %}
$root: true;
{% endhighlight %}

{% highlight html %}
<html>
  <head></head>

  <body class="strib">
    <p>Component-level styling will use rems...</p>
  </body>
</html>
{% endhighlight %}

### More specificity

In some cases, you may want a more specific wrapper to ensure that styles are overrided.  If you are using the styles with SASS, you can set the `$selector-wrapper` to anything more specific such as `.strib.more.specific`, and in your markup, do something like:

{% highlight sass %}
$selector-wrapper: '.strib.more.specific';
{% endhighlight %}

{% highlight html %}
<p>Other content...</p>

<div class="strib more specific">
  We only want Strib Styles to apply here.
</div>

<p>More content...</p>
{% endhighlight %}

## SASS

Strib Styles is at its core a collection of [SASS](http://sass-lang.com/) styles.  That means, Strib Styles can be included within your project with SASS.  This is very helpful if you want to override variables, or want to only use certain parts of the styles.

for example, if you install Strib Styles with `npm`, you can include it like this:

{% highlight sass %}
// Override some Strib Styles variables
$root: true;
@import "node_modules/strib-styles/source/styles/default";

.project-styles {
  color: red;
}
{% endhighlight %}

### Variables

All the variables used in Strib Styles can be overrided.  The current best list of variable used is in the [variables file](https://github.com/striblab/strib-styles/blob/master/source/styles/_variables.scss) on Github.
