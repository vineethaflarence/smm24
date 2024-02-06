//For loading the google map on venu.html page
function loadMap() {
			
            var mapOptions = {
               center:new google.maps.LatLng(48.196316,16.369783), zoom:16,
               mapTypeId:google.maps.MapTypeId.ROADMAP
            };
				
            var map = new google.maps.Map(document.getElementById("tuwien-map"),mapOptions);
            
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(48.196316,16.369783),
                map: map,
                title: 'Gußhausstraße 27',
                label:"Gußhausstraße 27",
                draggable:true
             });
           
         }
google.maps.event.addDomListener(window, 'load', loadMap);



/*function loadMap() {
	
	 var mapOptions = {
             center:new google.maps.LatLng(48.198658,16.368465), zoom:15,
             mapTypeId:google.maps.MapTypeId.ROADMAP
          };
        var map = new google.maps.Map(document.getElementById('iit-map'), mapOptions);

        var request = {
          placeId: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
          fields: ['name', 'formatted_address', 'place_id', 'geometry']
        };

        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);

        service.getDetails(request, function(place, status) {
          if (status === google.maps.places.PlacesServiceStatus.OK) {
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
            google.maps.event.addListener(marker, 'click', function() {
              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                'Place ID: ' + place.place_id + '<br>' +
                place.formatted_address + '</div>');
              infowindow.open(map, this);
            });
          }
        });
      }

google.maps.event.addDomListener(window, 'load', loadMap);*/

