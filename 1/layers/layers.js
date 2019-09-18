var wms_layers = [];

        var lyr_EsriSatellite_0 = new ol.layer.Tile({
            'title': 'Esri Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
        var lyr_GoogleMaps_3 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });var format_Comuna10_4 = new ol.format.GeoJSON();
var features_Comuna10_4 = format_Comuna10_4.readFeatures(json_Comuna10_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuna10_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Comuna10_4.addFeatures(features_Comuna10_4);var lyr_Comuna10_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comuna10_4, 
                style: style_Comuna10_4,
    title: 'Comuna 10<br />\
    <img src="styles/legend/Comuna10_4_0.png" /> Comuna 10<br />'
        });var format_Comunas9_5 = new ol.format.GeoJSON();
var features_Comunas9_5 = format_Comunas9_5.readFeatures(json_Comunas9_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comunas9_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Comunas9_5.addFeatures(features_Comunas9_5);var lyr_Comunas9_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comunas9_5, 
                style: style_Comunas9_5,
    title: 'Comunas 9<br />\
    <img src="styles/legend/Comunas9_5_0.png" /> Comuna 9<br />'
        });var format_Comuna8_6 = new ol.format.GeoJSON();
var features_Comuna8_6 = format_Comuna8_6.readFeatures(json_Comuna8_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuna8_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Comuna8_6.addFeatures(features_Comuna8_6);var lyr_Comuna8_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comuna8_6, 
                style: style_Comuna8_6,
    title: 'Comuna 8<br />\
    <img src="styles/legend/Comuna8_6_0.png" /> Comuna 8<br />'
        });var format_Comuna7_7 = new ol.format.GeoJSON();
var features_Comuna7_7 = format_Comuna7_7.readFeatures(json_Comuna7_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuna7_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Comuna7_7.addFeatures(features_Comuna7_7);var lyr_Comuna7_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comuna7_7, 
                style: style_Comuna7_7,
    title: 'Comuna 7<br />\
    <img src="styles/legend/Comuna7_7_0.png" /> Comuna 7<br />'
        });var format_Comuna6_8 = new ol.format.GeoJSON();
var features_Comuna6_8 = format_Comuna6_8.readFeatures(json_Comuna6_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuna6_8 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Comuna6_8.addFeatures(features_Comuna6_8);var lyr_Comuna6_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comuna6_8, 
                style: style_Comuna6_8,
    title: 'Comuna 6<br />\
    <img src="styles/legend/Comuna6_8_0.png" /> Comuna 6<br />'
        });var format_Comuna5_9 = new ol.format.GeoJSON();
var features_Comuna5_9 = format_Comuna5_9.readFeatures(json_Comuna5_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuna5_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Comuna5_9.addFeatures(features_Comuna5_9);var lyr_Comuna5_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comuna5_9, 
                style: style_Comuna5_9,
    title: 'Comuna 5<br />\
    <img src="styles/legend/Comuna5_9_0.png" /> Comuna 5<br />'
        });var format_Comuna4_10 = new ol.format.GeoJSON();
var features_Comuna4_10 = format_Comuna4_10.readFeatures(json_Comuna4_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuna4_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Comuna4_10.addFeatures(features_Comuna4_10);var lyr_Comuna4_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comuna4_10, 
                style: style_Comuna4_10,
    title: 'Comuna 4<br />\
    <img src="styles/legend/Comuna4_10_0.png" /> Comuna 4<br />'
        });var format_Comuna3_11 = new ol.format.GeoJSON();
var features_Comuna3_11 = format_Comuna3_11.readFeatures(json_Comuna3_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuna3_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Comuna3_11.addFeatures(features_Comuna3_11);var lyr_Comuna3_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comuna3_11, 
                style: style_Comuna3_11,
    title: 'Comuna 3<br />\
    <img src="styles/legend/Comuna3_11_0.png" /> Comuna 3<br />'
        });var format_Comuna2_12 = new ol.format.GeoJSON();
var features_Comuna2_12 = format_Comuna2_12.readFeatures(json_Comuna2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuna2_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Comuna2_12.addFeatures(features_Comuna2_12);var lyr_Comuna2_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comuna2_12, 
                style: style_Comuna2_12,
    title: 'Comuna 2<br />\
    <img src="styles/legend/Comuna2_12_0.png" /> Comuna 2<br />'
        });var format_Comuna1_13 = new ol.format.GeoJSON();
var features_Comuna1_13 = format_Comuna1_13.readFeatures(json_Comuna1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Comuna1_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Comuna1_13.addFeatures(features_Comuna1_13);var lyr_Comuna1_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Comuna1_13, 
                style: style_Comuna1_13,
    title: 'Comuna 1<br />\
    <img src="styles/legend/Comuna1_13_0.png" /> Comuna 1<br />'
        });

lyr_EsriSatellite_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_GoogleMaps_3.setVisible(true);lyr_Comuna10_4.setVisible(true);lyr_Comunas9_5.setVisible(true);lyr_Comuna8_6.setVisible(true);lyr_Comuna7_7.setVisible(true);lyr_Comuna6_8.setVisible(true);lyr_Comuna5_9.setVisible(true);lyr_Comuna4_10.setVisible(true);lyr_Comuna3_11.setVisible(true);lyr_Comuna2_12.setVisible(true);lyr_Comuna1_13.setVisible(true);
var layersList = [lyr_EsriSatellite_0,lyr_GoogleSatelliteHybrid_1,lyr_OpenStreetMap_2,lyr_GoogleMaps_3,lyr_Comuna10_4,lyr_Comunas9_5,lyr_Comuna8_6,lyr_Comuna7_7,lyr_Comuna6_8,lyr_Comuna5_9,lyr_Comuna4_10,lyr_Comuna3_11,lyr_Comuna2_12,lyr_Comuna1_13];
lyr_Comuna10_4.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Nombre': 'Nombre', });
lyr_Comunas9_5.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Nombre': 'Nombre', });
lyr_Comuna8_6.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Nombre': 'Nombre', });
lyr_Comuna7_7.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Nombre': 'Nombre', });
lyr_Comuna6_8.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Nombre': 'Nombre', });
lyr_Comuna5_9.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Nombre': 'Nombre', });
lyr_Comuna4_10.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Nombre': 'Nombre', });
lyr_Comuna3_11.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Nombre': 'Nombre', });
lyr_Comuna2_12.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Nombre': 'Nombre', });
lyr_Comuna1_13.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'Nombre': 'Nombre', });
lyr_Comuna10_4.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Comunas9_5.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Comuna8_6.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Comuna7_7.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Comuna6_8.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Comuna5_9.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Comuna4_10.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Comuna3_11.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Comuna2_12.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Comuna1_13.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Comuna10_4.set('fieldLabels', {'id': 'no label', 'Area': 'inline label', 'Nombre': 'header label', });
lyr_Comunas9_5.set('fieldLabels', {'id': 'no label', 'Area': 'inline label', 'Nombre': 'header label', });
lyr_Comuna8_6.set('fieldLabels', {'id': 'no label', 'Area': 'inline label', 'Nombre': 'header label', });
lyr_Comuna7_7.set('fieldLabels', {'id': 'no label', 'Area': 'inline label', 'Nombre': 'header label', });
lyr_Comuna6_8.set('fieldLabels', {'id': 'no label', 'Area': 'inline label', 'Nombre': 'header label', });
lyr_Comuna5_9.set('fieldLabels', {'id': 'no label', 'Area': 'inline label', 'Nombre': 'header label', });
lyr_Comuna4_10.set('fieldLabels', {'id': 'no label', 'Area': 'inline label', 'Nombre': 'header label', });
lyr_Comuna3_11.set('fieldLabels', {'id': 'no label', 'Area': 'inline label', 'Nombre': 'header label', });
lyr_Comuna2_12.set('fieldLabels', {'id': 'no label', 'Area': 'inline label', 'Nombre': 'header label', });
lyr_Comuna1_13.set('fieldLabels', {'id': 'no label', 'Area': 'inline label', 'Nombre': 'header label', });
lyr_Comuna1_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});