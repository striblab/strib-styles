---
title: Best practices
layout: page
---

How we write markup and styles, both as content and as syntax, matters.  A consistent approach means leads to efficiency and improves readability.

The following describes best practices for creating markup and styling both for the Star Tribune Styles and other projects at the Star Tribune.

## Philosophies

* Use the most appropriate semantic and accessible elements and attributes when writing HTML, specifically with  [HTML5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) and [ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA).
    * This will improve readability, improve searchability (SEO), and most importantly help make the project as accessible as possible.
* Use the cascading nature of CSS.  Specifically, this means style the most general thing first, then target the exceptions when necessary.
    * For instance, style the `figure` element, then when an exception is needed, look for a different context selector, or, if you must, add a class.
* Avoid unnecessary elements.
    * If an element is unnecessary to target something with CSS, try to avoid.
* Avoid unnecessary classes.
    * If a class is unnecessary to target something with CSS, try to avoid.  By using semantic and accessible markup, many styles can be reasonable applied with those.
* Don't use the `id` attribute for styling.
    * Using an `id` for styling usually leads to problems if the project needs to change.
* Make everything responsive (will fit and look appropriate on different sizes and types of screens).
    * This means using relative units as much as possible (see CSS section).
* Responsive design is about content, not about specific devices.  Use media queries when the content and design need to be adjusted; do not use media queries based on specific devices sizes as they will change and there are too many to target.
    * Note that this project does have predefined breakpoints which makes the most sense for a reusable library like it.
* Separate code and files into components as much as possible.
    * Specifically when using SASS, make sure not to have a single, massive file, and utilize `@import` to separate parts.
* Avoid unnecessary nesting (in SASS).  Nesting can be very helpful, but it can lead to annoying specificity which can be hard to override, and it creates larger file sizes.

* Consider using tools that automatically find issues with syntax and help document code styles such as [editorconfig](http://editorconfig.org/), [eslint](https://eslint.org/), [stylelint](https://stylelint.io/), [htmllint](https://www.npmjs.com/package/html-lint), and [prettier](https://prettier.io/).
* Consider CSS post-processors such as [autoprefixer](https://github.com/postcss/autoprefixer) to help manage prefixes and cross-browser support.

## HTML syntax and specifics

* Use 2 spaces (soft tabs) to indent.
    * This make sure that the code looks consistent across editors and environments.
    * Consider using [editorconfig](http://editorconfig.org/), specifically the [plugins](http://editorconfig.org/#download), to make this easy, specifically if you have different styles in different projects.
* Nested elements should be indented, and any multiple line element should vertically match up.
* Always include optional closing tags, such as `</ul>`.
* Do not include the trailing slash on self-closing elements, such as `<img>`.
    * OK: `<img src="" alt="">`
    * NOT OK: `<img src="" />`
* Use HTML5, specifically with the doctype: `<!DOCTYPE html>`
* Set languages on the `<html>` element: `<html lang="en-us"> ... </html>`
* Use the following meta tags:
    * `<meta http-equiv="X-UA-Compatible" content="IE=Edge">`
    * `<meta charset="UTF-8">`
* Leave boolean attributes, such as `checked` or `disabled` blank as a value is not needed.
* All elements and attributes should be lowercase.
    * OK: `<p>thing</p>`
    * NOT OK: `<P>thing</P>`
* Use double quotes for attributes.
    * OK: `<a href="example.com">e</a>`
    * NOT OK: `<a href='example.com'>e</a>`
* Use [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles) for `class` and `id` names.
    * OK: `<p class="semantic-class-name">content</p>`
    * NOT OK: `<p class="semanticClassName">content</p>`

## CSS/SASS syntax and specifics

* Use 2 spaces (soft tabs) to indent.
    * This make sure that the code looks consistent across editors and environments.
    * Consider using [editorconfig](http://editorconfig.org/), specifically the [plugins](http://editorconfig.org/#download), to make this easy, specifically if you have different styles in different projects.
* Follow the [.stylelintrc](https://stylelint.io/) rules.  Mostly this follows the [standard stylelint rules](https://github.com/stylelint/stylelint-config-standard) with a few exceptions.
    * Consider using one of the [editor plugins](https://stylelint.io/user-guide/complementary-tools/#editor-plugins), that will highlight any issues as you type them.
    * On this project, the `gulp develop` task will notify you of any rule breaking.
* Use [kebab case](https://en.wikipedia.org/wiki/Letter_case#Special_case_styles) for `class` and `id` names.
    * OK: `<p class="semantic-class-name">content</p>`
    * NOT OK: `<p class="semanticClassName">content</p>`
* Use relative units, specifically `em` or `rem`, or when approriate `%`, `vh`, or `vw`.  Avoid using `px` or `pt`.
* Try to order properties with the following grouping and order:
    * Positioning such as `position` or `top`
    * Box model properties such as `display`, `margin`, or `float`
    * Typographic such as `font-size`, `text-transform`, or `text-align`
    * Visual such as `color`
    * Other
* Avoid [shorthand properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) unless the goal is to set all of those properties.
    * Setting with a shorthand can have unintended consequences.
* Keep media queries next to the relative styling.  Do not use a mobile section or a `mobile.css` file.
