const toggleButton = document.querySelector('.toggle-button');
const mapSection = document.querySelector('.map-section');

toggleButton.addEventListener('click', function() {
    if (mapSection.style.display === 'none') {
        mapSection.style.display = 'block';
    } else {
        mapSection.style.display = 'none';
    }
});

// Zoom out
let map;
    let toggleBtn;  // Declare toggleButton variable here

    function initMap() {
      const mapElement = document.getElementById('map');
      const mapOptions = {
        center: { lat: 33.986261, lng: -118.438543 }, // Coordinates for the desired location
        zoom: 7, // Zoom level
        styles: [
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [
              { color: '#01CBE1' } // Change the color of the water
            ]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
              { color: '#D9F6FA' } // Change the color of forests
            ]
          },
          {
            featureType: 'administrative',
            elementType: 'geometry.fill',
            stylers: [
              { color: '#1C526C' } // Change the color of administrative areas (e.g., boundaries, parks)
            ]
          },
          {
            featureType: 'poi.park',
            elementType: 'geometry',
            stylers: [
              { color: '#BCF6EC' } // Change the color of parks
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              { visibility: 'off' } // Hide the roads
            ]
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [
              { visibility: 'off' } // Hide route numbers
            ]
          },
          {
            featureType: 'transit',
            elementType: 'labels.text.fill',
            stylers: [
              { visibility: 'off' } // Hide route labels
            ]
          },
          {
            featureType: 'road.highway',
            elementType: 'labels',
            stylers: [
              { visibility: 'off' } // Hide highway route labels
            ]
          },
          
        ]
      };
      const map = new google.maps.Map(mapElement, mapOptions);

      const markerOptions = {
        position: { lat: 33.959874, lng: -118.459416 }, // Coordinates for the location to be pinned
        map: map,
        title: 'Interceptor 007',
        label: '1',
        draggable: true
      };
    
      const marker = new google.maps.Marker(markerOptions);
    
      // Add an info window to display custom information
      const infoWindow = new google.maps.InfoWindow({
        content: '<h3>Interceptor 007 </h3><p>Ballona Creek, LA, the United States of America</p>'
      });
    
      // Open the info window when the marker is clicked
      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    
      // Button toggle
      toggleBtn = document.querySelector('.toggle-button');
      toggleBtn.addEventListener('click', function () {
          map.setZoom(7); // Reset the zoom level to the initial zoom level (9)
      });

      // Add a catch handler to handle any potential promise rejections
      google.maps.event.addListener(map, 'tilesloaded', function () {
          const mapPromise = Promise.resolve(map);
          mapPromise.catch(function (error) {
              console.error('An error occurred:', error);
          });
      });
    }