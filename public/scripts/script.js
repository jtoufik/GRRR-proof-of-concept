const toggleButton = document.querySelector('.toggle-button');
const mapSection = document.querySelector('.map-section');

toggleButton.addEventListener('click', function() {
    mapSection.style.display = mapSection.style.display === 'none' ? 'block' : 'none';
});

function initMap() {
    const mapOptions = {
        center: { lat: 33.986261, lng: -118.438543 },
        zoom: 7,
        styles: [
            { featureType: 'water', elementType: 'geometry', stylers: [{ color: '#01CBE1' }] },
            { featureType: 'landscape', elementType: 'geometry', stylers: [{ color: '#D9F6FA' }] },
            { featureType: 'administrative', elementType: 'geometry.fill', stylers: [{ color: '#1C526C' }] },
            { featureType: 'poi.park', elementType: 'geometry', stylers: [{ color: '#BCF6EC' }] },
            { featureType: 'road', elementType: 'geometry', stylers: [{ visibility: 'off' }] },
            { featureType: 'transit', elementType: 'labels.icon', stylers: [{ visibility: 'off' }] },
            { featureType: 'transit', elementType: 'labels.text.fill', stylers: [{ visibility: 'off' }] },
            { featureType: 'road.highway', elementType: 'labels', stylers: [{ visibility: 'off' }] }
        ]
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    const markerOptions = {
        position: { lat: 33.959874, lng: -118.459416 },
        map: map,
        title: 'Interceptor 007',
        label: '1',
        draggable: true
    };

    const marker = new google.maps.Marker(markerOptions);

    const infoWindow = new google.maps.InfoWindow({
        content: '<h3>Interceptor 007</h3><p>Ballona Creek, LA, the United States of America</p><img src="/assets/interceptor007.png" alt="Interceptor007" style="width: 310px; height: auto;">'
    });

    marker.addListener('click', function() {
        infoWindow.open(map, marker);
    });

    toggleButton.addEventListener('click', function() {
        map.setZoom(7);
    });

    google.maps.event.addListener(map, 'tilesloaded', function() {
        Promise.resolve(map).catch(function(error) {
            console.error('An error occurred:', error);
        });
    });
}