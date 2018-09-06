---
title: Maps
layout: page
bottom: |
  <script>
  </script>
---

Best practices and styles for using maps.

## Mapbox

Mapbox is a great tool to make custom, design-specific maps.

### Including the mapbox library

You will need to include the Mapbox library. Since the maps will depend on the Mapbox service being up, it is fine to use the versions they provide through their site. Always make sure to use a specific version and not something like "latest". This should only need to be done once per page.

{% example html %}

<!-- Mapbox GL library -->
<script src="https://api.tiles.mapbox.com/mapbox-gl-js/v0.48.0/mapbox-gl.js"></script>
<link href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.48.0/mapbox-gl.css" rel="stylesheet">

<!-- Mapbox non-GL JS library -->
<script src="https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.js"></script>
<link href="https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.css" rel="stylesheet">
{% endexample %}

### Cross-platform maps

The Strib styles maps module comes with some helpful functions for creating maps. For instance, if you would like to create a basic map that uses GL by default, but will fallback to the non-GL version if the browser doesn't support it, use the `MapboxCrossPlatformMap` class.

Mapbox describes support for Mapbox GL as [all modern browsers](https://www.mapbox.com/help/mapbox-browser-support/) and specifically does not support Internet Explorer. [CanIUse](https://caniuse.com/#search=gl) has some good information about WebGL support.

{% example html %}

<figure>
  <div id="cross-map" class="figure-object figure-map"></div>

  <figcaption>
    This map depicts blah blah blah.  Some map and design data
    &copy; <a href="https://www.mapbox.com/about/maps/" target="_blank" rel="noopener">Mapbox</a>
    &copy; <a href="http://www.openstreetmap.org/about/" target="_blank" rel="noopener">OpenStreetMap</a>
  </figcaption>
</figure>

<script>
  (function() {
    // Create map with default options.
    var map = new stribStyles.maps.MapboxCrossPlatformMap('cross-map', {});

    // Show off some methods
    var delay = 2500;
    setTimeout(function() {
      map.centerOn(stribStyles.maps.places.minneapolis);

      setTimeout(function() {
        map.zoomTo(8);

        setTimeout(function() {
          map.centerOn(stribStyles.maps.places.duluth, 7);

          setTimeout(function() {
            map.fitBounds(stribStyles.maps.bounds.minnesota);
          }, delay);
        }, delay);
      }, delay);
    }, delay);
  })();
</script>

{% endexample %}

Overall, this cross-platform map object is for simple maps. There is not a lot of shared functionality across the Mapbox libraries. There are also some key differences between the libraries and this custom object.

- Assume options and standards for Mapbox GL, then translate to non-GL version.
- Mapbox GL uses `[lng, lat]` format for points, and these should be used and will be translated to the non-GL version which is the opposite.

If you want to work with the map and do specific things based on which platform is used, you can use the `gl` property. For example:

{% highlight html %}

<script>
  var map = new stribStyles.maps.MapboxCrossPlatformMap('map', {});
  if (map.gl) {
    map.map.setPitch(30);
  }
</script>

{% endhighlight %}

#### Adding JSON

This is an example of adding GeoJSON to a map.

_This is just experimental. This may be a bad idea as the API's to do this for each platform is significantly different._

{% example html %}

<figure>
  <div id="cross-json-map" class="figure-object figure-map"></div>

  <figcaption>
    This map depicts blah blah blah.  Some map and design data
    &copy; <a href="https://www.mapbox.com/about/maps/" target="_blank" rel="noopener">Mapbox</a>
    &copy; <a href="http://www.openstreetmap.org/about/" target="_blank" rel="noopener">OpenStreetMap</a>
  </figcaption>
</figure>

<script src="http://static.startribune.com/assets/libs/topojson/3.0.2/topojson.min.js"></script>
<script>
  (function() {
    // Create map with default options.
    var map = new stribStyles.maps.MapboxCrossPlatformMap('cross-json-map', {});
    map.fitBounds(stribStyles.maps.bounds.minnesota);

    // Get some sample data
    window.fetch('https://raw.githubusercontent.com/deldersveld/topojson/master/countries/us-states/MN-27-minnesota-counties.json').then(response => response.json()).then(counties => {
      console.log(topojson.feature(counties, counties.objects.cb_2015_minnesota_county_20m));
      map.addGeoJSON(
        'counties',
        topojson.feature(counties, counties.objects.cb_2015_minnesota_county_20m),
        {});
    });
  })();
</script>

{% endexample %}
