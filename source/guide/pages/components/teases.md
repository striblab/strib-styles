---
title: Teases
layout: page
---

Teases are modules of html that are used to present content references. The front of startribune.com is full of teases. Content references can be articles, videos, polls, blogs and more. 

Note that teases are not semantic entities. They are usually associated as a class to an `<article>`.

## Default


{% example html %}
<article class="tease">
  <figure class="tease-photo">
    <a href="">
      <div class="tease-photo-img stack-thumbnail-mod is-story">
        <img src="http://stmedia.stimg.co/ows_152299140218616.jpg?h=91&amp;w=145&amp;fit=crop&amp;bg=999&amp;crop=faces" alt="Karl-Anthony Towns defended the Nuggets’ Nikola Jokic during the first half in Denver on Thursday.">
      </div>
    </a>
  </figure>
  <header>
    <a href="/sports/">Sports</a>
  </header>
  <h3><a href="/xxx" >Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h3>
  <div class="tease-timestamp js-timestamp " data-st-timestamp="2018-04-06T11:44:12.000Z">6:44am</div>
  <div class="tease-summary ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>

<div class="tease-related">
  <ul>
  <li class="related-icn-photo">
    <a href="/xxx">Photo: photo</a>
  </li>
   <li class="related-icn-graphic">
    <a href="/xxx">Graphic: Associated graphic</a>
  </li>
   <li class="related-icn-podcast">
    <a href="/xxx">Podcast: Associated podcast</a>
  </li>
   <li class="related-icn-poll">
    <a href="/xxx">Poll: Associated poll</a>
  </li>
  <li class="related-icn-comments">
    <a href="/xxx/#comments">159 comments </a>
  </li>
  <li class="related-icn-gallery">
    <a href="/xxx/" >Photos: Associated gallery</a>
  </li>
  <li class="related-icn-article">
    <a href="/xxx">Associated article</a>
  </li>
  </ul>
  </div>
</article>
{% endexample %}

## Pull

Use `.aside-right` or `.aside-left` to float the aside, then use the `.aside-pull` to pull it further outside the flow of the content.

{% example html %}
<article style="width: 70%;">
  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>

  <aside class="aside-right aside-pull">
    <h1>A side note</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un</p>
  </aside>

  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>

  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>

  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>
</article>
{% endexample %}

### Responsive

Use responsive class to handle different size screens.

{% example html %}
<article class="container-md">
  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>

  <aside class="aside-right aside-pull-md">
    <h1>A side note</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un</p>
  </aside>

  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>

  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>

  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>
</article>
{% endexample %}

## Figures

Note that [figures](./figures.html) are also function similar to `<aside>`, so you can add the `.aside` class to a figure to get visually similar results.

{% example html %}
<article class="container-md">
  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>

  <figure class="aside aside-right aside-pull-md">
    <img src="http://placekitten.com/g/500/500" alt="Kitten placeholder image">
    <cite>PlaceKitten</cite>
    <figcaption>Fuzzy the kitten</figcaption>
  </figure>

  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>

  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>

  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>
</article>
{% endexample %}

Similarly, you can use some `<figure>` classes to help get the best, consistent style.  Specifically, there is not a general caption element to use here.



{% example html %}
<article class="container-md">
  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>

  <aside class="aside-left aside-pull-md">
    <h1>A side note</h1>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an un</p>
    <div class="figcaption">Source: Some place</div>
  </aside>

  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>

  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>

  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum</p>
</article>
{% endexample %}
