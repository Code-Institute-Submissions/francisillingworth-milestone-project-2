function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: {
            lat: 52.480545,
            lng: -1.897983,
        }
    });

    var labels = "ABCDEFGHIJKLMONPQRSTUVWXYZ";
    var locations = [{
        /*Jewellery quarter locations*/
        /*a-block hotel JQ*/
        lat: 52.486340,
        lng: -1.907951
    }, {
        /*b-St Pauls House*/
        lat: 52.485918,
        lng: -1.905078
    }, {
        /*c-Frederick street town house */
        lat: 52.486165,
        lng: -1.912169
    }, {
        /*d-Button Factory*/
        lat: 52.486086,
        lng: -1.911727
    }, {
        /*e-20 St Pauls*/
        lat: 52.486184,
        lng: -1.905958
    }, {
        /*f-Rectory*/
        lat: 52.484804,
        lng: -1.906355
    }, {
        /*g-otto pizza*/
        lat: 52.486548,
        lng: -1.907677
    }, {
        /*h-Lasan*/
        lat: 52.485285,
        lng: -1.907886
    }, {
        /*i-pen museum*/
        lat: 52.484737,
        lng: -1.911594
    }, {
        /*city centre locations*/
        /*j-Grand Hotel*/
        lat: 52.482094,
        lng: -1.899029
    }, {
        /*k-Britannia hotel*/
        lat: 52.479262,
        lng: -1.897120
    }, {
        /*l-Macdonalds Burlington*/
        lat: 52.479052,
        lng: -1.898674
    }, {
        /*m-adams*/
        lat: 52.480091,
        lng: -1.901524
    }, {
     
        /*n-sushi passion*/
        lat: 52.481920,
        lng: -1.897233

    }, {

        /*o-Old joint stock*/
        lat: 52.480992,
        lng: -1.899947

    }, {
        /*p-Purnells*/
        lat: 52.481479,
        lng: -1.901465
    }, {
        /*q-birmingham Museum*/
        lat: 52.480268,
        lng: -1.903441

    }, {
           /*r-bullring*/
        lat: 52.478458,
        lng: -1.895051

    }, {
        /*Digbeth Locations*/
        /*s-Birmingham Central Backpackers*/
        lat: 52.476624,
        lng: -1.885838
    }, {
        /*t-Ladbrooke Hotel*/
        lat: 52.478310,
        lng: -1.887576



    }, {
        /*u-Rico Libre*/
        lat: 52.477679,
        lng: -1.884390
    }, {
        /*v-Warehouse Cafe*/
        lat: 52.477023,
        lng: -1.887945
    }, {
        /*w-DDC*/
        lat: 52.475761,
        lng: -1.882507
    }, {
        /*x-Dig Brew Co*/
        lat: 52.477572,
        lng: -1.882904
    }, {
        /*y-ghetto golf*/
        lat: 52.475073,
        lng: -1.881199
    }, {
        /*z-go-karting*/
        lat: 52.478132,
        lng: -1.880920
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
