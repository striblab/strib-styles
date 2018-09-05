/**
 * Map helper functions.
 */

// Dependencies or globals
/* global mapboxgl, L */

// Access token.  This is a public key, but this should not be used
// outside of Star Tribune
const mapboxAccessToken =
  'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';

// Common map styles
const mapboxStyles = {
  light: 'mapbox://styles/shadowflare/cjfljh7oh6v6k2smuvb3jftac'
};

// Common places
const places = {
  twinCities: [-93.191872, 44.960911]
};

// Mapbox attribution
const mapboxAttribution = `Some map and design data
&copy; <a href="https://www.mapbox.com/about/maps/" target="_blank" rel="noopener">Mapbox</a>
&copy; <a href="http://www.openstreetmap.org/about/" target="_blank" rel="noopener">OpenStreetMap</a>`;

// Generator function
function mapboxGLMap(el, options = {}) {
  // Check for mapboxGL
  if (!mapboxgl || !window.mapboxgl) {
    throw new Error(
      'Please provide an element to attach the map to, this should be the "id" attribute of the element.'
    );
  }

  // Check for el
  if (!el) {
    throw new Error('Please provide an element to attach the map to.');
  }

  // Default options
  let mapOptions = Object.assign(
    {
      container: el,
      style: mapboxStyles.light,
      center: places.twinCities,
      zoom: 9,
      attributionControl: false,
      navigationControl: true,
      scrollZoom: false
    },
    options
  );

  // Set access token
  mapboxgl.accessToken = mapboxAccessToken;
  let map = new mapboxgl.Map(mapOptions);

  // Add navigation control
  if (mapOptions.navigationControl) {
    let nav = new mapboxgl.NavigationControl();
    map.__nav = nav;
    map.addControl(nav, 'top-left');
  }

  return map;
}

// Make a non-gl mapbox map
function mapboxNoGLMap(el, options = {}) {
  // Check for L, which is provided by mapbox library
  if (!L || !window.L || !L.mapbox) {
    throw new Error(
      'Could not find "L" Leaflet object or the "L.mapbox" object, make sure you have loaded the library.  See https://www.mapbox.com/mapbox.js/'
    );
  }

  // Check for el
  if (!el) {
    throw new Error(
      'Please provide an element to attach the map to, this should be the "id" attribute of the element.'
    );
  }

  // Set token
  L.mapbox.accessToken = mapboxAccessToken;

  // Default options
  let mapOptions = Object.assign(
    {
      style: mapboxStyles.light,
      center: places.twinCities,
      zoom: 10,
      attributionControl: false,
      navigationControl: true,
      scrollWheelZoom: false
    },
    options
  );

  // Create map
  let map = L.mapbox.map(el, undefined, {
    attributionControl: false
  });

  // Add style layer
  if (mapOptions.style) {
    map.__styleLayer = L.mapbox.styleLayer(mapOptions.style).addTo(map);
  }

  return map;
}

// Export
export default {
  mapboxAccessToken,
  mapboxStyles,
  mapboxGLMap,
  mapboxNoGLMap,
  mapboxAttribution,
  places
};
