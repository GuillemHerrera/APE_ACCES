
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "APE_DataLimits_munis_0": {
            "type": "geojson",
            "data": json_APE_DataLimits_munis_0
        }
                    ,
        "Acces_300m2_1": {
            "type": "geojson",
            "data": json_Acces_300m2_1
        }
                    ,
        "Acces_500_2": {
            "type": "geojson",
            "data": json_Acces_500_2
        }
                    ,
        "Acces_300_3": {
            "type": "geojson",
            "data": json_Acces_300_3
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#4c4c4c"
            }
        },
        {
            "id": "lyr_APE_DataLimits_munis_0_0",
            "type": "fill",
            "source": "APE_DataLimits_munis_0",
            "layout": {},
            "paint": {'fill-opacity': 1.0, 'fill-color': '#f0f0f0', "fill-outline-color":"#6a6a6a"}
        }
,
        {
            "id": "lyr_Acces_300m2_1_0",
            "type": "fill",
            "source": "Acces_300m2_1",
            "layout": {},
            "paint": {"fill-outline-color":"#bcbcbc", 'fill-opacity': ['case', ['all', ['>=', ['get', 'Acces300_m2'], 0.0], ['<=', ['get', 'Acces300_m2'], 0.37]], 1.0, ['all', ['>', ['get', 'Acces300_m2'], 0.37], ['<=', ['get', 'Acces300_m2'], 1.12]], 1.0, ['all', ['>', ['get', 'Acces300_m2'], 1.12], ['<=', ['get', 'Acces300_m2'], 2.468]], 1.0, ['all', ['>', ['get', 'Acces300_m2'], 2.468], ['<=', ['get', 'Acces300_m2'], 5.51]], 1.0, ['all', ['>', ['get', 'Acces300_m2'], 5.51], ['<=', ['get', 'Acces300_m2'], 176.69]], 1.0, 1], 'fill-color': ['case', ['all', ['>=', ['get', 'Acces300_m2'], 0.0], ['<=', ['get', 'Acces300_m2'], 0.37]], '#f7fbff', ['all', ['>', ['get', 'Acces300_m2'], 0.37], ['<=', ['get', 'Acces300_m2'], 1.12]], '#c8ddf0', ['all', ['>', ['get', 'Acces300_m2'], 1.12], ['<=', ['get', 'Acces300_m2'], 2.468]], '#73b3d8', ['all', ['>', ['get', 'Acces300_m2'], 2.468], ['<=', ['get', 'Acces300_m2'], 5.51]], '#2879b9', ['all', ['>', ['get', 'Acces300_m2'], 5.51], ['<=', ['get', 'Acces300_m2'], 176.69]], '#08306b', '#ffffff']}
        }
,
        {
            "id": "lyr_Acces_500_2_0",
            "type": "fill",
            "source": "Acces_500_2",
            "layout": {},
            "paint": {"fill-outline-color":"#bcbcbc", 'fill-opacity': ['case', ['all', ['>=', ['get', 'Acces_500'], 0.0], ['<=', ['get', 'Acces_500'], 10748.77]], 1.0, ['all', ['>', ['get', 'Acces_500'], 10748.77], ['<=', ['get', 'Acces_500'], 22065.27]], 1.0, ['all', ['>', ['get', 'Acces_500'], 22065.27], ['<=', ['get', 'Acces_500'], 35264.81]], 1.0, ['all', ['>', ['get', 'Acces_500'], 35264.81], ['<=', ['get', 'Acces_500'], 57041.7]], 1.0, ['all', ['>', ['get', 'Acces_500'], 57041.7], ['<=', ['get', 'Acces_500'], 109474.32]], 1.0, 1], 'fill-color': ['case', ['all', ['>=', ['get', 'Acces_500'], 0.0], ['<=', ['get', 'Acces_500'], 10748.77]], '#fbe6c5', ['all', ['>', ['get', 'Acces_500'], 10748.77], ['<=', ['get', 'Acces_500'], 22065.27]], '#f5ba98', ['all', ['>', ['get', 'Acces_500'], 22065.27], ['<=', ['get', 'Acces_500'], 35264.81]], '#dc7176', ['all', ['>', ['get', 'Acces_500'], 35264.81], ['<=', ['get', 'Acces_500'], 57041.7]], '#9c3f5d', ['all', ['>', ['get', 'Acces_500'], 57041.7], ['<=', ['get', 'Acces_500'], 109474.32]], '#70284a', '#ffffff']}
        }
,
        {
            "id": "lyr_Acces_300_3_0",
            "type": "fill",
            "source": "Acces_300_3",
            "layout": {},
            "paint": {"fill-outline-color":"#bcbcbc", 'fill-opacity': ['case', ['all', ['>=', ['get', 'Acces_300'], 0.0], ['<=', ['get', 'Acces_300'], 5021.34]], 1.0, ['all', ['>', ['get', 'Acces_300'], 5021.34], ['<=', ['get', 'Acces_300'], 10504.43]], 1.0, ['all', ['>', ['get', 'Acces_300'], 10504.43], ['<=', ['get', 'Acces_300'], 17011.14]], 1.0, ['all', ['>', ['get', 'Acces_300'], 17011.14], ['<=', ['get', 'Acces_300'], 29676.44]], 1.0, ['all', ['>', ['get', 'Acces_300'], 29676.44], ['<=', ['get', 'Acces_300'], 68985.27]], 1.0, 1], 'fill-color': ['case', ['all', ['>=', ['get', 'Acces_300'], 0.0], ['<=', ['get', 'Acces_300'], 5021.34]], '#fbe6c5', ['all', ['>', ['get', 'Acces_300'], 5021.34], ['<=', ['get', 'Acces_300'], 10504.43]], '#f5ba98', ['all', ['>', ['get', 'Acces_300'], 10504.43], ['<=', ['get', 'Acces_300'], 17011.14]], '#dc7176', ['all', ['>', ['get', 'Acces_300'], 17011.14], ['<=', ['get', 'Acces_300'], 29676.44]], '#9c3f5d', ['all', ['>', ['get', 'Acces_300'], 29676.44], ['<=', ['get', 'Acces_300'], 68985.27]], '#70284a', '#ffffff']}
        }
],
}