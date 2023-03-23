import ImageWMS from 'ol/source/ImageWMS.js';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import View from 'ol/View.js';
import {Image as ImageLayer, Tile as TileLayer} from 'ol/layer.js';

const layers = [
  new TileLayer({
    source: new OSM(),
  }),
  new ImageLayer({
    source: new ImageWMS({
      url: 'http://localhost:8080/geoserver/wms',
      params: {'LAYERS': 'Kenya:HealthFacilities'},
      ratio: 2,
      serverType: 'geoserver',
    }),
  }),
];
const map = new Map({
  layers: layers,
  target: 'map',
  view: new View({
    center: [36.83, -0.61],
    zoom: 2,
  }),
});