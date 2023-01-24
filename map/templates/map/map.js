
      mapboxgl.accessToken = 'pk.eyJ1IjoibXJjYmh2IiwiYSI6ImNsYXUzdHE0eDAybWgzcG55cmZlYXk0Y3YifQ.C3DOretRVl9Od-4EPJDbyg';


      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/examples/cjgiiz9ck002j2ss5zur1vjji',
        center: [51.10950242436723, 17.00282346492683],
        zoom: 10,

      });




const stores = {
   "type":"FeatureCollection",
   "features":[
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               51.12596643688644,
		16.996950999902324
            ]
         },
         "properties":{
	    "name":"Lumpex De Lux",
            "phoneFormatted":"735 394 546",
            "phone":"735394546",
            "address":"Popowicka 26",
            "city":"Wroclaw",
            "country":"Polska",
            "postalCode":"54-237",
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               51.11410210825777,
		17.055436857592113
            ]
         },
         "properties":{
	    "name":"Margo",
            "phoneFormatted":"",
            "phone":"",
            "address":"Ładna 16",
            "city":"Wroclaw",
            "country":"Polska",
            "postalCode":"50-353",
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               51.12693380168907,
		17.035582799917176
            ]
         },
         "properties":{
	    "name":"Londynski styl",
            "phoneFormatted":"668 379 534",
            "phone":"668379534",
            "address":"Kleczkowska 1A",
            "city":"Wrocław",
            "country":"Polska",
            "postalCode":"50-227",
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               51.125127602338246,
		16.99027522157613
            ]
         },
         "properties":{
	    "name":"Kreator",
            "phoneFormatted":"",
            "phone":"",
            "address":"Legnicka 55",
            "city":"Wroclaw",
            "country":"Polska",
            "postalCode":"54-203",
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               51.123959575847195,
		16.99009927108398
            ]
         },
         "properties":{
	    "name":"LAPciuch",
            "phoneFormatted":"",
            "phone":"",
            "address":"Bialowieska 24A",
            "city":"Wroclaw",
            "country":"Polska",
            "postalCode":"54-239",
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               51.111677137710814,
		17.0200001882431
            ]
         },
         "properties":{
	    "name":"Replay",
	    "phoneFormatted":"",
            "phone":"",
            "address":"Sokolnicza",
            "city":"Wroclaw",
            "country":"Polska",
            "postalCode":"53-676",
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               51.11723850661149,
		17.033377828747597
            ]
         },
         "properties":{
	    "name":"Dziabdziak",
            "phoneFormatted":"",
            "phone":"",
            "address":"Stanisalawa Dubois 3",
            "city":"Wroclaw",
            "country":"Polska",
            "postalCode":"50-257",
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               51.126381402803354,
		17.03569098638644
            ]
         },
         "properties":{
	    "name":"Dabek Piotr",
            "phoneFormatted":"71 788 68 88",
            "phone":"717886888",
            "address":"Trzebnicka 42",
            "city":"Wroclaw",
            "country":"Polska",
            "postalCode":"50-230",
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               51.136435318086384,
		17.024246372854986
            ]
         },
         "properties":{
	    "name":"Strefa Ciuchow",
            "phoneFormatted":"695 649 341",
            "phone":"695649341",
            "address":"Chorwacka 2B",
            "city":"Wroclaw",
            "country":"Polska",
            "postalCode":"51-107",
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               51.12319654211154,
		17.049240186434574
            ]
         },
         "properties":{
	    "name":"Ramoneska",
            "phoneFormatted":"603 974 781",
            "phone":"603974781",
            "address":"Nowowiejska 27",
            "city":"Wroclaw",
            "country":"Polska",
            "postalCode":"50-315",
         }
      },
      {
         "type":"Feature",
         "geometry":{
            "type":"Point",
            "coordinates":[
               51.11265019027123,
		17.031702745966186
            ]
         },
         "properties":{
	    "name":"Odrzanska Szafa",
            "phoneFormatted":"",
            "phone":"",
            "address":"Odrzańska 13",
            "city":"Wroclaw",
            "country":"Polska",
            "postalCode":"50-113",
         }
      }
   ]
};















      /**
       * Assign a unique id to each store. You'll use this `id`
       * later to associate each point on the map with a listing
       * in the sidebar.
       */

      stores.features.forEach((store, i) => {
        store.properties.id = i;
      });

      /**
       * Wait until the map loads to make changes to the map.
       */

      map.on('load', () => {
        /**
         * This is where your '.addLayer()' used to be, instead
         * add only the source without styling a layer
         */
        map.addSource('places', {
          'type': 'geojson',
          'data': stores
        });

        /**
         * Add all the things to the page:
         * - The location listings on the side of the page
         * - The markers onto the map
         */
        buildLocationList(stores);
        addMarkers();
      });

      /**
       * Add a marker to the map for every store listing.
       **/

       /* For each feature in the GeoJSON object above: */
        /* Create a div element for the marker. */
        /* Assign a unique `id` to the marker. */
        /* Assign the `marker` class to each marker for styling. */
        /**
           * Create a marker using the div element
           * defined above and add it to the map.
           **/

               /**
           * Listen to the element and when it is clicked, do three things:
           * 1. Fly to the point
           * 2. Close all other popups and display popup for clicked store
           * 3. Highlight listing in sidebar (and remove highlight for all other listings)
           **/

      function addMarkers() {

        for (const marker of stores.features) {
          const el = document.createElement('div');
          el.id = `marker-${marker.properties.id}`;
          el.className = 'marker';

          new mapboxgl.Marker(el, { offset: [0, -23] })
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);


          el.addEventListener('click', (e) => {

            flyToStore(marker);                                            /* Fly to the point */
            createPopUp(marker);                                            /* Close all other popups and display popup for clicked store */
            const activeItem = document.getElementsByClassName('active');     /* Highlight listing in sidebar */
            e.stopPropagation();
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            const listing = document.getElementById(
              `listing-${marker.properties.id}`
            );
            listing.classList.add('active');
          });
        }
      }

      /**
            * Add a listing for each store to the sidebar.
       **/

      function buildLocationList(stores) {
        for (const store of stores.features) {

          const listings = document.getElementById('listings');       /* Add a new listing section to the sidebar. */
          const listing = listings.appendChild(document.createElement('div'));
          listing.id = `listing-${store.properties.id}`;      /* Assign a unique `id` to the listing. */
          listing.className = 'item';                         /* Assign the `item` class to each listing for styling. */

          const link = listing.appendChild(document.createElement('a'));         /* Add the link to the individual listing created above. */
          link.href = '#';
          link.className = 'title';
          link.id = `link-${store.properties.id}`;
          link.innerHTML = `${store.properties.address}`;


          const details = listing.appendChild(document.createElement('div'));      /* Add details to the individual listing. */
          details.innerHTML = `${store.properties.city}`;
          if (store.properties.phone) {
            details.innerHTML += ` &middot; ${store.properties.phoneFormatted}`;
          }

          /**
           * Listen to the element and when it is clicked, do four things:
           * 1. Update the `currentFeature` to the store associated with the clicked link
           * 2. Fly to the point
           * 3. Close all other popups and display popup for clicked store
           * 4. Highlight listing in sidebar (and remove highlight for all other listings)
           **/



          link.addEventListener('click', function () {
            for (const feature of stores.features) {
              if (this.id === `link-${feature.properties.id}`) {
                flyToStore(feature);
                createPopUp(feature);
              }
            }
            const activeItem = document.getElementsByClassName('active');
            if (activeItem[0]) {
              activeItem[0].classList.remove('active');
            }
            this.parentNode.classList.add('active');
          });
        }
      }


      function flyToStore(currentFeature) {
        map.flyTo({
          center: currentFeature.geometry.coordinates,
          zoom: 15
        });
      }



      function createPopUp(currentFeature) {
        const popUps = document.getElementsByClassName('mapboxgl-popup');
        if (popUps[0]) popUps[0].remove();
        const popup = new mapboxgl.Popup({ closeOnClick: false })
          .setLngLat(currentFeature.geometry.coordinates)
          .setHTML(
            `<h3>${currentFeature.properties.name}</h3><h4>${currentFeature.properties.address}</h4>`
          )
          .addTo(map);
      }
