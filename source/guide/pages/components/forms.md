---
title: Buttons
layout: page
---

Some forms

## Basics

Here's everything in its basic form.

{% example html %}
<form>
  <label for="input-example-1">Example label</label>
  <input id="input-example-1" type="text" placeholder="Placeholder language" aria-describedby="input-example-1-help">
  <small id="input-example-1-help">
    This is some help text.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
  </small>

  <label for="input-example-2">Example password</label>
  <input id="input-example-2" type="password" aria-describedby="input-example-2-help">
  <small id="input-example-2-help">
    This is some help text.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
  </small>

  <label for="input-example-3">Example select</label>
  <select id="input-example-3">
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>

  <label for="input-example-4">Example textarea</label>
  <textarea id="input-example-4"></textarea>

  <label for="input-example-5">Example email</label>
  <input id="input-example-5" type="email" required aria-describedby="input-example-1-help">
  <small id="input-example-5-help">
    A required email field.  
  </small>

  <label for="input-example-6">Example search</label>
  <input class="invalid" id="input-example-6" type="search" required aria-describedby="input-example-6-help">
  <div class="invalid-message">
    A custom error message
  </div>
  <small id="input-example-6-help">
    If you have an input that has a custom validation via JS, update it with the <code>.invalid</code> class and make sure to have a message below it wrapped in <code>.invalid-message</code>.
  </small>

  <label for="input-example-7">Example date</label>
  <input id="input-example-7" type="date">

  <label for="input-example-8">Example color</label>
  <input id="input-example-8" type="color" value="#ab22cd">

  <label for="input-example-9">Example file</label>
  <input id="input-example-9" type="file">

  <label for="input-example-10">Example range</label>
  <input id="input-example-10" type="range">

  <label for="input-example-11">Example telephone</label>
  <input id="input-example-11" type="tel">

  <label for="input-example-12">Checkboxes</label>
  <div class="check-list">
    <div class="check">
      <input type="checkbox" id="input-example-12a" name="input-example-12">
      <label for="input-example-12a">Example check A</label>
    </div>

    <div class="check">
      <input type="checkbox" id="input-example-12b" name="input-example-12">
      <label for="input-example-12b">Example check B</label>
    </div>

    <div class="check">
      <input type="checkbox" id="input-example-12c" name="input-example-12">
      <label for="input-example-12c">Example check C</label>
    </div>
  </div>

  <label for="input-example-13">Radios</label>
  <div class="radio-list">
    <div class="radio">
      <input type="radio" id="input-example-13a" name="input-example-13">
      <label for="input-example-13a">Example radio A</label>
    </div>

    <div class="radio">
      <input type="radio" id="input-example-13b" name="input-example-13">
      <label for="input-example-13b">Example radio B</label>
    </div>

    <div class="radio">
      <input type="radio" id="input-example-13c" name="input-example-13">
      <label for="input-example-13c">Example radio C</label>
    </div>
  </div>

  <button type="submit">Button</button>
</form>
{% endexample %}

## Disabled

Example using the `disabled` attribute.

{% example html %}
<form>
  <label for="input-example-14">Disabled label</label>
  <input disabled id="input-example-14" type="text" placeholder="Placeholder language" aria-describedby="input-example-14-help">
  <small id="input-example-14-help">
    This is some help text.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
  </small>
</form>
{% endexample %}

## Compact inline

For forms that are compact together, you must wrap each form item, i.e. the `label` and `input`, in a `.form-item` class.  If you want to not include the `label` visually, make sure to use the `.sr-only` class so that screen readers can still recognize it.

{% example html %}
<form class="form-compact">
  <div class="form-item">
    <label class="sr-only" for="input-example-15">Input label</label>

    <input id="input-example-15" type="text" placeholder="Placeholder language" aria-describedby="input-example-15-help">

    <small id="input-example-15-help">
      This is some help text.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
    </small>
  </div>

  <div class="form-item">
    <button type="submit">Button</button>
  </div>

  <div class="form-item">
    <button class="warning" type="reset">Oh no</button>
  </div>
</form>
{% endexample %}
