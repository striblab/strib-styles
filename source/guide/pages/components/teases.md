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
        <img src="http://stmedia.stimg.co/ows_152299140218616.jpg?fit=crop&amp;bg=999&amp;crop=faces" alt="Karl-Anthony Towns defended the Nuggets’ Nikola Jokic during the first half in Denver on Thursday.">
      </div>
    </a>
  </figure>
  <header>
    <a href="/sports/">Sports</a>
  </header>
  <h1><a href="/xxx" >Lorem Ipsum is simply dummy text of the printing and typesetting industry</a></h1>
  <div class="tease-timestamp js-timestamp" data-st-timestamp="2018-04-06T11:44:12.000Z">6:44am</div>
  <div class="tease-summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>

<div class="tease-related">
  <ul>
  <li>
    <a href="/xxx"><i class="strib-icon strib-camera"></i>Photo: photo</a>
  </li>
  <li>
    <a href="/xxx"><i class="strib-icon strib-document"></i>Document: Associated document</a>
  </li>
  <li>
    <a href="/xxx"><i class="strib-icon strib-media-video-square"></i>Video: Associated video</a>
  </li>
   <li>
    <a href="/xxx"><i class="strib-icon strib-graphic"></i>Graphic: Associated graphic</a>
  </li>
   <li>
    <a href="/xxx"><i class="strib-icon strib-podcast"></i>Podcast: Associated podcast</a>
  </li>
   <li>
    <a href="/xxx"><i class="strib-icon strib-poll"></i>Poll: Associated poll</a>
  </li>
  <li>
    <a href="/xxx/#comments"><i class="strib-icon strib-comment-bubble"></i>159 comments </a>
  </li>
  <li>
    <a href="/xxx/"><i class="strib-icon strib-gallery-grid"></i>Gallery: Associated gallery</a>
  </li>
  <li class="related-icn-article">
    <a href="/xxx">Associated article</a>
  </li>
  </ul>
  </div>
</article>
{% endexample %}

