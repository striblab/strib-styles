/**
 * Map helper functions.
 */

// Dependencies or globals
/* global mapboxgl, L */
import { defaultsDeep, cloneDeep } from 'lodash-es';
import stribStyles from './styles.js';

// Access token.  This is a public key, but this should not be used
// outside of Star Tribune
const mapboxAccessToken =
  'pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg';

// Common map styles
const mapboxStyles = {
  light: 'mapbox://styles/shadowflare/cjfljh7oh6v6k2smuvb3jftac'
};

// Common places in lng, lat
const places = {
  twinCities: [-93.191872, 44.960911],
  minneapolis: [-93.265, 44.9778],
  stPaul: [-93.09, 44.9537],
  duluth: [-92.1005, 46.7867],
  minnesota: [-94.6859, 46.7296]
};

// Common bounds in [sw, ne]
const bounds = {
  minnesota: [[-97.37, 43.42], [-89.44, 49.46]]
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
  let mapOptions = defaultsDeep(options, {
    container: el,
    style: mapboxStyles.light,
    center: places.twinCities,
    zoom: 9,
    attributionControl: false,
    navigationControl: true,
    scrollZoom: false
  });

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
  let mapOptions = defaultsDeep(options, {
    style: mapboxStyles.light,
    center: places.twinCities,
    zoom: 10,
    attributionControl: false,
    navigationControl: true,
    scrollWheelZoom: false
  });

  // Create map
  let map = L.mapbox.map(el, undefined, mapOptions);

  // Add style layer
  if (mapOptions.style) {
    map.__styleLayer = L.mapbox.styleLayer(mapOptions.style).addTo(map);
  }

  return map;
}

// A class to make a "cross-platform" map with some basic shared
// functionality
class MapboxCrossPlatformMap {
  constructor(el, options = {}, forceGL = undefined) {
    this.el = el;

    // Overall, we use GL options and translate to noGL
    this.mapOptions = defaultsDeep(
      {
        style: mapboxStyles.light,
        center: places.twinCities,
        zoom: 9,
        attributionControl: false,
        navigationControl: true,
        scrollZoom: false
      },
      options
    );

    this.checkPlatform(forceGL);
    this.createMap();
  }

  // Check options and browser
  checkPlatform(forceGL = undefined) {
    // Check for mapbox libraries
    if (!mapboxgl || !window.mapboxgl) {
      throw new Error(
        'Please provide an element to attach the map to, this should be the "id" attribute of the element.'
      );
    }
    if (!L || !window.L || !L.mapbox) {
      throw new Error(
        'Could not find "L" Leaflet object or the "L.mapbox" object, make sure you have loaded the library.  See https://www.mapbox.com/mapbox.js/'
      );
    }

    // Make sure there is an el
    if (!this.el) {
      throw new Error(
        'Please provide an element to attach the map to, this should be the "id" attribute of the element.'
      );
    }

    // Get GL support
    this.gl = forceGL === undefined ? mapboxgl.supported() : !!forceGL;
  }

  // Create map
  createMap() {
    if (this.gl) {
      this.map = mapboxGLMap(this.el, this.mapOptionsGL(this.mapOptions));
    }
    else {
      this.map = mapboxNoGLMap(this.el, this.mapOptionsNoGL(this.mapOptions));
    }
  }

  // Translate options for GL
  mapOptionsGL(options = {}) {
    return cloneDeep(options);
  }

  // Translate options for noGL
  mapOptionsNoGL(options = {}) {
    let o = cloneDeep(options);

    // Leaflet uses lat, lng
    o.center =
      o.center && o.center.length
        ? o.center.reverse()
        : places.twinCities.reverse();
    o.zoom = o.zoom ? o.zoom + 1 : 10;
    o.scrollWheelZoom = o.scrollZoom;

    return o;
  }

  // Set view (center and zoom)
  goTo(center, zoom) {
    if (this.gl) {
      this.map.easeTo({ center, zoom });
    }
    else {
      this.map.setView(center.reverse(), zoom + 1);
    }
  }

  // Zoom to
  zoomTo(zoom) {
    if (this.gl) {
      this.map.easeTo({ zoom });
    }
    else {
      this.map.setZoom(zoom + 1);
    }
  }

  // Center on
  centerOn(center) {
    if (this.gl) {
      this.map.easeTo({ center });
    }
    else {
      this.map.setView(center.reverse());
    }
  }

  // Fit bounds.  Should be an array, like  [sw, ne] with [lng, lat]s
  // https://www.mapbox.com/mapbox-gl-js/api/#lnglatboundslike
  fitBounds(bounds) {
    if (this.gl) {
      this.map.fitBounds(bounds);
    }
    else {
      this.map.fitBounds(bounds.map(b => b.reverse()));
    }
  }

  // Add JSON
  addGeoJSON(id, geojson, styles) {
    if (this.gl) {
      return this.addGeoJSONGL(id, geojson, styles);
    }
    else {
      return this.addGeoJSONNoGL(id, geojson, styles);
    }
  }

  // Add GeoJSON GL
  addGeoJSONGL(id, geojson, styles) {
    styles = defaultsDeep(styles, {
      // https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-fill
      'fill-color': stribStyles['colors-data'].categories[0].hex,
      'fill-opacity': 0.8,
      'fill-outline-color': '#FFFFFF'
    });

    // Put geojson under the label
    // https://www.mapbox.com/mapbox-gl-js/example/geojson-layer-in-stack/
    this.map.on('load', () => {
      let layers = this.map.getStyle().layers;

      // Find the index of the first symbol layer in the map style
      let firstSymbolId;
      for (let i = 0; i < layers.length; i++) {
        if (layers[i].type === 'symbol') {
          firstSymbolId = layers[i].id;
          break;
        }
      }

      // Create data source layer
      this.dataSource = {};
      this.dataSource[id] = this.map.addSource(id, {
        type: 'geojson',
        data: geojson
      });

      // Add style layer
      this.jsonLayers = {};
      this.jsonLayers[id] = this.map.addLayer(
        {
          id: `${id}-json`,
          type: 'fill',
          source: id,
          paint: styles
          //"filter": ["==", "$type", "Polygon"]
        },
        firstSymbolId
      );
    });
  }

  // GeoJSON for noGL map
  addGeoJSONNoGL(id, geojson, styles) {
    let translatedStyles = {};
    [['fillColor', 'fill-color'], ['fillOpacity', 'fill-opacity']].forEach(
      t => {
        if (styles[t[1]]) {
          translatedStyles[t[0]] = styles[t[1]];
        }
      }
    );

    // https://leafletjs.com/reference-1.3.4.html#path-option
    styles = defaultsDeep(translatedStyles, {
      // https://www.mapbox.com/mapbox-gl-js/style-spec/#layers-fill
      fillColor: stribStyles['colors-data'].categories[0].hex,
      fillOpacity: 0.8,
      stroke: true,
      color: '#FFFFFF',
      weight: 1.5
    });

    L.geoJSON(geojson, {
      style: styles
    }).addTo(this.map);
  }
}

// Export
export default {
  mapboxAccessToken,
  mapboxStyles,
  mapboxGLMap,
  mapboxNoGLMap,
  MapboxCrossPlatformMap,
  mapboxAttribution,
  places,
  bounds
};
