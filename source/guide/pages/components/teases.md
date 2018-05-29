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
      <div class="tease-photo-img">
        <img src="http://placekitten.com/145/100" alt="Kitten placeholder image">
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
        <a href="/xxx"><i class="strib-icon strib-camera"></i>Photo: Associated photo</a>
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

## collection-section-multi

This tease is used in the Zone 2 and 3 area of pages, generally below the content. Shows 3 stories from the associated section. Example shown in a grid.


{% example html %}
<div class="row">
  <div class="col col-30">
    <div class="example-fill">col-30</div>
  </div>
  <div class="col col-30">
    <article class="tease collection">
    <header>
      <a href="/sports/">Sports</a>
    </header>
      <ul>
        <figure class="tease-photo">
          <a href="/xxx">
            <div class="tease-photo-img">
              <img src="http://placekitten.com/300/150" alt="Kitten placeholder image">
            </div>
          </a>
        </figure>
        <li>
          <h4><a href="/xxx">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</a></h4>
        </li>
        <li>
          <h4><a href="/xxx">Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad</a></h4>
        </li>
        <li>
          <h4><a href="/xxx">Proident, sunt in culpa qui officia deserunt mollit anim id</a></h4>
        </li>      
      </ul>
  </article>
  </div>
  <div class="col col-30">
    <div class="example-fill">col-30</div>
  </div>
</div>
{% endexample %}

## downpage more-from-section

This tease is used in the Zone 2 area on article pages, generally below the content.

{% example html %}
<article class="tease more-from-section">
  <div class="tease-container-left">
    <time class="tease-timestamp js-timestamp" pubdate datetime="2017-07-30T16:00:00">July 30, 2017 &mdash; 4:00pm</time>
  </div>
  
  <div class="tease-container-right">
    <figure class="tease-photo">
      <a href="xxx" >
        <div class=""><img src="http://placekitten.com/145/120" alt="Kitten placeholder image"></div>
      </a>
    </figure>
    <h3><a href="xxx">Lorem ipsum dolor sit amet, consectetur adipisicing</a></h3>
    <div class="tease-summary">Proident, sunt in culpa qui officia deserunt mollit anim id est laborum..</div>   
    <div class="tease-related">
      <ul>
        <li>
          <a href="/xxx"><i class="strib-icon strib-comment-bubble"></i>297 comments</a>
        </li>
      </ul>
    </div>
  </div> 
</article>

{% endexample %}

