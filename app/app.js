var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: '/style/{z}/{x}/{y}.png?id=offlinestyle:///default.tm2'
      })
    })
  ],
  view: new ol.View({
    center: [0, 0],
    zoom: 4
  })
});