/**
 * Map helper functions.
 */

// Access token.  This is a public key, but this should not be used
// outside of Star Tribune
const mapboxAccessToken = 'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';

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
    throw new Error('Could not find "mapboxgl" object, make sure you have loaded the library.');
  }

  // Check for el
  if (!el) {
    throw new Error('Please provide an element to attach the map to.');
  }

  // Default options
  let mapOptions = Object.assign({
    container: el,
    style: mapboxStyles.light,
    center: places.twinCities,
    zoom: 9,
    attributionControl: false,
    navigationControl: true,
  }, options);

  // Set access token
  mapboxgl.accessToken = mapboxAccessToken;
  let map = new mapboxgl.Map(mapOptions);

  // Add navigation control
  let nav = new mapboxgl.NavigationControl();
  map._nav = nav;
  map.addControl(nav, 'top-left');

  return map;
}

// Export
export default {
  mapboxAccessToken,
  mapboxStyles,
  mapboxGLMap,
  mapboxAttribution,
  places,
};
