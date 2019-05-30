function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 14,
                center: {
                    lat: 52.478535,
                    lng: -1.897801,
                }
            });

            var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
            var locations = [{
                /*Jewellery quarter locations*/
                /*block hotel JQ*/
                lat: 52.486340,
                lng: -1.907951
            }, {
                /*St Pauls House*/
                lat: 52.485918,
                lng: -1.905078
            }, {
                /*Frederick street town house */
                lat: 52.486165,
                lng: -1.912169
            }, {
                /*Button Factory*/
                lat: 52.486086,
                lng: -1.911727
            }, {
                /*20 St Pauls*/
                lat: 52.486184,
                lng: -1.905958
            }, {
                /*Rectory*/
                lat: 52.484804,
                lng: -1.906355
            }, {
                /*Salcooks*/
                lat: 52.485282,
                lng: -1.903390
            }, {
                /*otto pizza*/
                lat: 52.486548,
                lng: -1.907677
            }, {
                /*Lasan*/
                lat: 52.485285,
                lng: -1.907886
            }, {
                /*city centre locations*/
                /*Grand Hotel*/
                lat: 52.482094,
                lng: -1.899029
            }, {
                /*Britannia hotel*/
                lat: 52.479262,
                lng: -1.897120
            }, {
                /*Macdonalds Burlington*/
                lat: 52.479052,
                lng: -1.898674
            }, {
                /*adams*/
                lat: 52.480091,
                lng: -1.901524
            }, {
                /*pinchos*/
                lat: 52.482240,
                lng: -1.900916

            }, {
                /*sushi passion*/
                lat: 52.481920,
                lng: -1.897233

            }, {
                /*old contemptibles*/
                lat: 52.483073,
                lng: -1.899658

            }, {
                /*Old joint stock*/
                lat: 52.480992,
                lng: -1.899947

            }, {
                /*Purnells*/
                lat: 52.481479,
                lng: -1.901465
            }, {
                /*Digbeth Locations*/
                /*Birmingham Central Backpackers*/
                lat: 52.476624,
                lng: -1.885838
            }, {
                /*Ladbrooke Hotel*/
                lat: 52.478310,
                lng: -1.887576

            }, {
                /*Adagio Hotel*/
                lat: 52.477389,
                lng: -1.885456

            }, {
                /*Rico Libre*/
                lat: 52.477679,
                lng: -1.884390
            }, {
                /*Warehouse Cafe*/
                lat: 52.477023,
                lng:  -1.887945
            }, {
                /*DDC*/
                lat: 52.475761,
                lng: -1.882507
            }, {
                /*Dig Brew Co*/
                lat: 52.477572,
                lng: -1.882904
            }, {
                /*Bulls Head*/
                lat: 52.475536,
                lng: -1.887113
            }];
            var markers = locations.map(function(location, i) {
                return new google.maps.Marker({
                    position: location,
                    label: labels[i % labels.length]
                });
            });
            var markerCluster = new MarkerClusterer(map, markers, {
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
            });
        }