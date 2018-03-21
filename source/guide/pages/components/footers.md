---
title: Footers
layout: page
---

Footers for whole pages and sections.

## Page footer

The page footer is simply a footer with semantic tags. Add copy right section if needed.

{% example html %}

<footer role="contentinfo" class="with-copyright">
  <div class="container-lg">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>

  <div class="copyright">
    <div class="container-lg">
      &copy; 2018 StarTribune. All rights reserved.
    </div>
  </div>
</footer>
{% endexample %}

## Article footer

This is a general style for credits at the bottom of the article. You can use the `.article-footer` class if for some reason you are unable to use semantic tags. This is repeated in the [bylines and credits section](./credits.html).

{% example html %}

<article>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  <footer>
    <div class="byline">
      <address>
        <a rel="author" href="mailto:john.doe@example.com">john.doe@example.com</a>
        <a rel="author" href="tel:1-555-555-5555">(555) 555-5555</a>
      </address>
    </div>
  </footer>
</article>
{% endexample %}

## Expanded article footer

For a longer list of credits at the bottom of a project.

{% example html %}

<article>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  <footer>
    <h1>Credits</h1>

    <ul class="credits">
      <li>Edited by John DoeEditor</li>
      <li>Data analysis by Jane DoeData</li>
      <li>Design and development by Jem DoeDesign</li>
    </ul>

    <h1>Methodology</h1>

    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

  </footer>
</article>
{% endexample %}

## Site footer replication

A not-pixel-perfect replication of the Star Tribune web site footer.

{% example html %}

<footer role="contentinfo" class="with-copyright footer-strib-site">
  <div class="container-lg">
    <div class="footer-strib-site-top-section">
      <div class="logo"></div>
      <span>Follow us on:</span>
      <!-- TODO: social share icons -->
    </div>

    <div class="row link-set">
      <div class="col col-50 col-md-20">
        <div class="link-set-label">Company</div>
        <ul>
          <li><a href="http://startribune.com/about/">About the Star Tribune</a></li>
          <li><a href="http://startribune.com/contactus/">Contact us</a></li>
          <li><a href="http://startribune.com/workforus/">Work For Us</a></li>
          <li><a href="http://startribune.com/newspapersineducation/">News in Education</a></li>
          <li><a href="http://citypages.com/">City Pages</a></li>
          <li><a href="http://startribune.com/sports/preps/">High school sports hubs</a></li>
          <li><a href="http://startribune.com/NewsApps/">Mobile and tablet apps</a></li>
        </ul>
      </div>

      <div class="col col-50 col-md-20">
        <div class="link-set-label">Advertise with us</div>
        <ul>
          <li><a href="http://startribune.com/businessconsultant/">Talk with a business consultant</a></li>
          <li><a href="http://startribune.com/mediakit/">Media kit</a></li>
          <li><a href="http://startribune.com/classified/">Classifieds</a></li>
        </ul>
      </div>

      <div class="col col-50 col-md-20">
        <div class="link-set-label">Buy</div>
        <ul>
          <li><a href="http://startribune.com/store/">Star Tribune Store</a></li>
          <li><a href="http://startribune.com/photoreprints/">Photo Reprints</a></li>
          <li><a href="http://startribune.com/archives/">Archived articles</a></li>
          <li><a href="http://startribune.com/fullpagearchives/">Full Page Archive: 150+ years</a></li>
          <li><a href="http://startribune.com/backcopies/">Back Copies</a></li>
          <li><a href="http://startribune.com/commercialreprints/">Commercial reprints</a></li>
          <li><a href="http://startribune.com/licensing/">Licensing</a></li>
        </ul>
      </div>

      <div class="col col-50 col-md-20">
        <div class="link-set-label">Customer support</div>
        <ul>
          <li><a href="http://startribune.com/feedback/">Help and Feedback</a></li>
          <li><a href="http://startribune.com/membercenter/">Manage your account</a></li>
          <li><a href="http://startribune.com/subscriptionservices/">Newspaper subscription</a></li>
          <li><a href="http://startribune.com/digitalaccess/">Digital access</a></li>
          <li><a href="http://startribune.com/eedition/">eEdition</a></li>
          <li><a href="http://startribune.com/subscriptionservices/">Vacation hold/billing</a></li>
        </ul>
      </div>

      <div class="col col-50 col-md-20">
        <div class="link-set-label">Website</div>
        <ul class="footer-navigation-links">
          <li><a href="http://startribune.com/termsofuse/">Terms of use</a></li>
          <li><a href="http://startribune.com/privacypolicy/">Privacy policy</a></li>
          <li><a href="http://startribune.com/siteindex/">Site index</a></li>
          <li><a href="http://startribune.com/rssfeeds/">RSS</a></li>
        </ul>
      </div>
    </div>

  </div>

  <div class="copyright">
    <div class="container-lg">
      &copy; 2018 StarTribune. All rights reserved.
    </div>
  </div>
</footer>
{% endexample %}
