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

This tease is used in the Zone 2 and 3 area of pages, generally below the content. Shows 3 stories from the associated section.

{% example html %}
<article class="tease collection">
  <header>
    <a href="/sports/">Sports</a>
  </header>
    <ul>
      <figure class="tease-photo">
        <a href="/xxx">
          <div class="tease-photo-img">
            <img src="http://stmedia.stimg.co/ROBISON4.JPG?h=150&w=300&fit=crop&bg=999&crop=faces">
          </div>
        </a>
      </figure>
      <li>
        <h4><a href="/xxx">Linebacker Barr decides not to attend Vikings' voluntary workouts this week</a></h4>
      </li>
      <li>
        <h4><a href="/xxx">ESPN expert: Wolves would dump Thibodeau before trading Towns</a></h4>
      </li>
      <li>
        <h4><a href="/xxx">U basketball recruit Omersa puts on dunk show at AAU tournament</a></h4>
      </li>      
    </ul>
</article>
{% endexample %}

## downpage more-from-section

This tease is used in the Zone 2 area on article pages, generally below the content.

{% example html %}
<article class="tease more-from-section">
  <div class="tease-container-left">
    <div class="tease-timestamp js-timestamp " data-st-timestamp="2018-05-23T19:18:56.000Z">28 minutes ago</div>
  </div>
  
  <div class="tease-container-right">
    <figure class="tease-photo">
      <a href="xxx" >
        <div class=""><img src="http://stmedia.stimg.co/ows_152709034121313.jpg?fit=crop&amp;bg=999&amp;crop=faces" ></div>
      </a>
    </figure>
    <h3><a href="xxx">Trump praises Fox News' Tomi Lahren after Mpls. confrontation</a></h3>
    <div class="tease-summary"> Lahren was leaving Union's rooftop when customer tossed water on her Sunday.</div>   
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

