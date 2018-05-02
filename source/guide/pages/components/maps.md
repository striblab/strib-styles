---
title: Maps
layout: page
bottom: |
  <script>
  </script>
---

Best practices and styles for using maps.

## Mapbox example

{% example html %}

<script src="https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.js"></script>

<link href="https://api.tiles.mapbox.com/mapbox-gl-js/v0.44.1/mapbox-gl.css" rel="stylesheet">

<figure>
  <div id="map" class="figure-object" style="height: 30em;"></div>

  <figcaption>
    This map depicts blah blah blah.  Some map and design data
    &copy; <a href="https://www.mapbox.com/about/maps/" target="_blank" rel="noopener">Mapbox</a>
    &copy; <a href="http://www.openstreetmap.org/about/" target="_blank" rel="noopener">OpenStreetMap</a>
  </figcaption>
</figure>

<script>
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/shadowflare/cjfljh7oh6v6k2smuvb3jftac',
  center: [-93.191872, 44.960911],
  zoom: 9,
  attributionControl: false
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');
</script>

{% endexample %}

{% example html %}

<script src="https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.js"></script>

<link href="https://api.mapbox.com/mapbox.js/v3.1.1/mapbox.css" rel="stylesheet">

<figure>
  <div id="map-fallback" class="figure-object" style="height: 30em;"></div>

  <figcaption>
    This map depicts blah blah blah.  Some map and design data
    &copy; <a href="https://www.mapbox.com/about/maps/" target="_blank" rel="noopener">Mapbox</a>
    &copy; <a href="http://www.openstreetmap.org/about/" target="_blank" rel="noopener">OpenStreetMap</a>
  </figcaption>
</figure>

<script>
L.mapbox.accessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';
var fallbackMap = L.mapbox.map('map-fallback', undefined, {
  attributionControl: false,
}).setView([44.960911, -93.191872], 9 + 1);
var styleLayer = L.mapbox.styleLayer('mapbox://styles/shadowflare/cjfljh7oh6v6k2smuvb3jftac')
    .addTo(fallbackMap);
</script>

{% endexample %}
