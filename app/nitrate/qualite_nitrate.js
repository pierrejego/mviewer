{
mviewer.customLayers.nitrate = {};
var lycee = mviewer.customLayers.nitrate;

nitrate.legend = { items: [] };

var styleNitrate = [new ol.style.Style({
    image: new ol.style.Circle({
        fill: new ol.style.Fill({
            color: 'rgba(255, 118, 117,1.0)'
        }),
        stroke: new ol.style.Stroke({
            color: "#ffffff",
            width: 4
        }),
        radius: 9
    })
})];


nitrate.legend.items.push({styles:styleNitrate, label: "Nitrate", geometry: "Point"});

mviewer.customLayers.nitrate.layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: "http://localhost/geoserver/EDP/wfs?SERVICE=WFS&VERSION=1.0.0&REQUEST=GETFEATURE&TYPENAME=PT_PREL_NITRATE&outputFormat=application/json&srsName=EPSG:4326",
            format: new ol.format.GeoJSON()
        }),
        style: function(feature, resolution) {
            var stl = styleNitrate;
            return stl;
        }
});
mviewer.customLayers.nitrate.handle = false;
}
