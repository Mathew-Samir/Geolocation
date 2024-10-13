let map, advancedMarker;

        function initMap() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        // Specify the coordinates to redirect to
                        const targetLocation = { lat: 30.071230, lng: 31.245030 };

                        // Make the map container visible
                        document.getElementById("map").style.display = "block";

                        // Create the map after permission is granted
                        map = new google.maps.Map(document.getElementById("map"), {
                            center: targetLocation,
                            zoom: 15,
                            mapId: '2d17f1569e5325e9',
                        });

                        // Use AdvancedMarkerElement for compatibility
                        advancedMarker = new google.maps.marker.AdvancedMarkerElement({
                            position: targetLocation,
                            map: map,
                            title: "Redirected to target location!",
                        });
                    },
                    () => {
                        handleLocationError(true);
                    }
                );
            } else {
                handleLocationError(false);
            }
        }

        function handleLocationError(browserHasGeolocation) {
            const errorMessage = browserHasGeolocation
                ? "Error: The Geolocation service failed."
                : "Error: Your browser doesn't support geolocation.";
            console.error(errorMessage);
            alert(errorMessage);
        }

        // Automatically trigger initMap after page load, but don't show the map until permission is granted
        window.onload = initMap;
