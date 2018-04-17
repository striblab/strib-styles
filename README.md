# Strib Styles

Styles and style guide for front-end work at the Star Tribune.

## About

The Strib Styles is a set of SASS, CSS, JS, and markup for building front-end web projects. This is separate from the styles that are on the main web property, though hopefully they will be put together one day.

## Philosophies

A lot of code, styles, and inspiration were taken from Bootstrap. Bootstrap or similar was not used as a base, as these systems actually make a lot of design decisions and assumptions that are hard to fully override, making a less than ideal outcome.

All things should be responsive, which means that they should look good on all screen sizes. CSS media queries should be mobile-first, which means the default style should be for a small screen.

Pre-defined breakpoints are necessary, but arbitrary since there are basically infinite screen sizes and densities these days. These styles have common breakpoints, but these can and should be changed for your project so that content looks good no matter the screen.

Font-sizes and spacing should be relative as much as possible. This means using `em` mostly and `%` for things like width and height. Since these styles are made to be able to be embedded in a site with existing styles, `rem` usage is avoided, though would be ideal for component-level sizes.

Avoid `top-margin` as it can be be collapsed and create unexpected results.

## Development

### Dependencies and prerequisites

The following is a one-time installation and quite possibly already installed for you.

1.  Install [Git](https://git-scm.com/).
    * On a Mac, this can be installed with [Homebrew](https://brew.sh/): `brew install git`
1.  Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
    * On a Mac, this is already installed
1.  Install [Node](https://nodejs.org/en/)
    * On a Mac, this can be installed with [Homebrew](https://brew.sh/): `brew install node`
1.  Ensure `bundler` is installed: `gem install bundler`
1.  Ensure `gulp` is installed globally: `npm install -g gulp`

For this project specifically:

1.  Get the code: `git clone https://github.com/striblab/strib-styles.git && cd strib-styles`
1.  Install Ruby gems: `bundle install`
1.  Install Node packages: `npm install`

### Docker

To run the development environment, i.e. `gulp develop` in Docker, which will help if installing dependencies locally is a problem, do the following:

1.  Install [Docker](https://docs.docker.com/engine/installation/)
1.  Run `docker-compose up`
1.  Open [http://localhost:3000](http://localhost:3000) in your browser.
1.  You can use `Control+C` to get out of the command, but make sure to run `docker-compose down` to completely stop the container from running.

Note that the live changes that trigger a build and should show up in the browser automatically are a little slower when running through Docker, but hopefully not restrictively so.

To manually build and run with docker, the following commands should work:

1.  `docker build -t "strib-styles" .`
1.  `docker run -i -t --rm -v`pwd`:/src -p "3000:3000" -p "3001:3001" "strib-styles"`

### Styles

The uncompiled CSS/Sass styles are in the `source/styles` folder.

### Guide

The guide, or the reference for the styles, is a [Jekyll](https://jekyllrb.com/) site under `source/guide/` which will get compiled to the `guide/` directory.

* Guide specific files are managed in `source/guide/guide-styles/`
* The core styles will be compiled and added to the guide in `source/guide/styles/` via the build process.
* _TODO_: Describe custom variables and plugins.

### Local server

To run a local server and automatically run the build process on file changes, use the following:

```
gulp develop
```

## Building

### Styles

To build the CSS and JS assets of the styles:

```
gulp build:styles
```

### Guide

To build the Jekyll-powered guide, run the following:

```
gulp build:guide
```

## Deploy

### Guide

The following will push only the contents of `guide` to `gh-pages` so that it can be easily hosted on Github:

```
gulp publish
```

## Publish

To publish to [npm](https://docs.npmjs.com/getting-started/publishing-npm-packages).

1.  Update `package.json` version, and rebuild with `gulp`
1.  Run `npm install` to update `package-lock.json`
1.  Commit changes.
1.  Tag: `git tag X.X.X`
1.  Push changes: `git push origin --tags`
1.  Publish: `npm publish --access public`
