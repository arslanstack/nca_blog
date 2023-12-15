(function ($) {
  'use strict';

  Berserk.behaviors.google_maps = {
    attach: function (context, settings) {

      if (typeof google === 'undefined') {
        console.log('Waiting for the google library');
        setTimeout(Berserk.behaviors.google_maps.attach, settings.timeout_delay, context, settings);
        return;
      }

      var styleMap = {
        silver: [{
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#e9e9e9"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#ffffff"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#ffffff"
              },
              {
                "lightness": 29
              },
              {
                "weight": 0.2
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
              },
              {
                "lightness": 18
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#ffffff"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f5f5f5"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [{
                "color": "#dedede"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
              },
              {
                "color": "#ffffff"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
              },
              {
                "color": "#333333"
              },
              {
                "lightness": 40
              }
            ]
          },
          {
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#f2f2f2"
              },
              {
                "lightness": 19
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#fefefe"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#fefefe"
              },
              {
                "lightness": 17
              },
              {
                "weight": 1.2
              }
            ]
          }
        ],
        dark: [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
              },
              {
                "color": "#000000"
              },
              {
                "lightness": 40
              }
            ]
          },
          {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
              },
              {
                "color": "#000000"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
              "visibility": "off"
            }]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
              },
              {
                "lightness": 17
              },
              {
                "weight": 1.2
              }
            ]
          },
          {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
              },
              {
                "lightness": 20
              }
            ]
          },
          {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
              },
              {
                "lightness": 21
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
              },
              {
                "lightness": 17
              }
            ]
          },
          {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
              },
              {
                "lightness": 29
              },
              {
                "weight": 0.2
              }
            ]
          },
          {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
              },
              {
                "lightness": 18
              }
            ]
          },
          {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
              },
              {
                "lightness": 16
              }
            ]
          },
          {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
              },
              {
                "lightness": 19
              }
            ]
          },
          {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
              },
              {
                "lightness": 17
              }
            ]
          }
        ]
      };

      var mapSection = $('.brk-map:not(.rendered)', context).addClass('rendered');

      if (mapSection.length) {

        mapSection.each(function (i, elem) {
          var mapSection = $(this),
            mapHeight = mapSection.data('height');

          var mapOpener = mapSection.find('.brk-map__opener'),
            mapCanvas = mapSection.find('.brk-map__canvas'),
            mapCanvasId = 'brk-map-' + i;

          mapCanvas.css('height', mapHeight);

          if (mapOpener.length) {
            mapSection.css('height', 100);
            mapOpener.on('click', function () {
              mapSection.toggleClass('map-opened');
              var height = mapSection.hasClass('map-opened') ? mapHeight : 100;
              mapSection.css('height', height);
            });
          }

          // add id[index]
          mapCanvas.attr('id', mapCanvasId);

          // Data
          var dataAddress = mapCanvas.data('address'),
            dataLat = parseFloat(mapCanvas.data('lat')),
            dataLng = parseFloat(mapCanvas.data('lng')),
            dataZoom = mapCanvas.data('zoom'),
            dataType = mapCanvas.data('type'),
            dataMarker = mapCanvas.data('marker'),
            dataOffsetLat = mapCanvas.data('offset-lat'), // marker offset Lat
            dataOffsetLng = mapCanvas.data('offset-lng'), // marker offset Lng
            dataStyle = mapCanvas.data('style'),
            infoWindow = mapCanvas.data('info-window');

          dataZoom = dataZoom ? dataZoom : 14;
          dataType = dataType ? dataType : 'roadmap';
          dataOffsetLat = dataOffsetLat ? dataOffsetLat : 0;
          dataOffsetLng = dataOffsetLng ? dataOffsetLng : 0;

          // map styles
          var mapStyles = '';
          if (dataStyle === 'silver') {
            mapStyles = styleMap.silver;
          } else if (dataStyle === 'dark') {
            mapStyles = styleMap.dark;
          }

          /* Map Init */
          function mapInit(lat, lng) {
            var mapOptions = {
              zoom: dataZoom,
              center: {
                lat: lat,
                lng: lng
              },
              panControl: false,
              zoomControl: true,
              zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
              },
              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: false,
              mapTypeId: google.maps.MapTypeId[dataType],
              scrollwheel: false,
              tilt: 45, // Color Styles
              styles: mapStyles
            };

            //inizialize the map
            var map = new google.maps.Map(document.getElementById(mapCanvasId), mapOptions);

            //inizialize the first marker
            var marker = new google.maps.Marker({
              position: {
                lat: lat + dataOffsetLat,
                lng: lng + dataOffsetLng
              },
              map: map,
              icon: dataMarker,
              title: dataAddress
            });

            //inizialize the first info window
            if (infoWindow !== undefined && infoWindow !== '') {
              var contentString = String(infoWindow),
                firstInfoWindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 220
              });

              google.maps.event.addListener(marker, "click", function () {
                firstInfoWindow.open(map, marker);
              });
            }
          }
          /* End Map Init */

          if (dataLat || dataLng) {
            var lat = dataLat,
              lng = dataLng;
            // map init
            mapInit(lat, lng);
          } else {
            // initiate geocider
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
              'address': dataAddress
            }, function (results, status) {
              if (!results) {
                return
              }

              if (results[0]) {
                var lat = results[0].geometry.location.lat(),
                  lng = results[0].geometry.location.lng();

                if (status === 'OK') {
                  // map init
                  mapInit(lat, lng);
                } else {
                  alert('Geocode was not successful for the following reason: ' + status);
                }
              } else {
                alert('Google Maps wrong address!');
              }
            });
          }

        });
        //end if
      }

    }
  }
})(jQuery);