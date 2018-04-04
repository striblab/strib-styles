/**
 * Gallery code
 */

// TODO: Don't use jQuery
/* global jQuery, $ */


// Gallery class
class Gallery {
  constructor(el, options = {}) {
    // Make sure jQuery object
    if (el && el instanceof jQuery) {
      this.$gallery = el;
    }
    else {
      this.$gallery = $(el);
    }

    // Option defaults
    options.transition = options.transition || 'fade';
    options.start = options.start = 0;
    this.options = options;

    // Gather slides
    this.$slides = this.$gallery.find('figure');

    // Transition type
    this.$gallery.addClass(options.transition);

    // Show
    this.index = options.start;
    this.show();

    // Add events
    this.$gallery.find('.gallery-next').on('click', () => {
      this.next();
    });
    this.$gallery.find('.gallery-previous').on('click', () => {
      this.previous();
    });
    this.$gallery.find('.gallery-fullscreen').on('click', () => {
      this.toggleFullscreen();
    });
  }

  show() {
    let top = this.$slides.length - 1;

    this.$slides.each((i, el) => {
      // Active
      if (i === this.index) {
        $(el).addClass('active');
      }
      else {
        $(el).removeClass('active');
      }

      // Previous
      if ((this.index === 0 && i === top) || (this.index > 0 && i === this.index - 1)) {
        $(el).addClass('item-previous');
      }
      else {
        $(el).removeClass('item-previous');
      }

      // Next
      if ((this.index === top && i === 0) || (this.index < top && i === this.index + 1)) {
        $(el).addClass('item-next');
      }
      else {
        $(el).removeClass('item-next');
      }
    });
  }

  toggleFullscreen() {
    this.$gallery.toggleClass('fullscreen');
  }

  next() {
    this.index = this.index === this.$slides.length - 1 ? 0 : this.index + 1;
    this.show();
  }

  previous() {
    this.index = this.index === 0 ? this.$slides.length - 1 : this.index - 1;
    this.show();
  }
}

// Generator function
let gallery = (el, options = {}) => {
  return new Gallery(el, options);
};

// Export
export default gallery;
