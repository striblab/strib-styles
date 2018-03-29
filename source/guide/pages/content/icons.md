---
title: Icons
layout: page
---

The [Star Tribune icons](https://striblab.github.io/strib-icons/) set is a useful set of icons for common Star Tribune projects.  Icons are **not included in the styles**, but as described in the project, there are a few ways to include it.

* Simply include the CSS on your page.
* For the SVG icons, you will need to include the JS as well.
    * If you only need the SVG icons, the bit of CSS that is needed is included in these styles, so all you need to include is the JS.
* You can use it with SASS by installing, such as `npm install @striblab/strib-icons`, then importing like:
  ```sass
  $strib-fonts-location: '//static.startribune.com/assets/libs/strib-icons/0.0.8/';
  @import '../../../node_modules/@striblab/strib-icons/build/strib-icons.scss';
  ```

## Examples

See the Star Tribune icons site for up-to-date instructions and a complete set of icons, but here is a bit for example.

### Web font

{% example html %}
<i class="strib-icon strib-home"></i>
<i class="strib-icon strib-phone-landline"></i>
<i class="strib-icon strib-social-facebook-circle"></i>
<i class="strib-icon strib-social-facebook"></i>
{% endexample %}

### SVG icons

Using the Star Tribune icons as SVG icons, you should include both the bit of CSS with the library, and the JS that loads the SVG sprite across domains.

Note, if you only want to use the SVG icons, the default styles have the necessary styles, so all you need is the JS from the Star Tribune icons.

{% example html %}
<script src="//static.startribune.com/assets/libs/strib-icons/0.0.8/strib-icons.js"></script>

<svg class="strib-icon-svg">
  <use xlink:href="#strib-home"></use>
</svg>

<svg class="strib-icon-svg">
  <use xlink:href="#strib-phone-landline"></use>
</svg>

<svg class="strib-icon-svg">
  <use xlink:href="#strib-social-facebook-circle"></use>
</svg>

<svg class="strib-icon-svg">
  <use xlink:href="#strib-data-drop"></use>
</svg>

<svg class="strib-icon-svg">
  <use xlink:href="#strib-strib-star"></use>
</svg>
{% endexample %}
