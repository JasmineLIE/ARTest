window.onload = () => { //loads the following when the application is opened in a new window:
    let places = staticLoadPlaces(); //declares variable 'places' as a new instance of the function staticLoadPlaces()
    renderPlaces(places); //run the function in the window
};

function staticLoadPlaces() { //declaring the function staticloadPlaces()
   return [ //this function will return the following:
       {
           name: 'MyModel', //a name property, which we set as MyModel
           location: { //the location:
               lat: 43.772813, //lattitude coordinates
               lng: -79.504595, //longitutde coordinates
           }
       },
   ];
}

function renderPlaces(places) { //expand on what the function renderPlaces(places) from above will do:
   let scene = document.querySelector('a-scene'); //declare the variable scene; its element uses document.querySelector, which returns the first Element(s) within the document that matches what we're looking for.  In this case, its 'a-scene'

   places.forEach((place) => {//drawing from our index.html, for each value we receive from 'a-scene' using the document.querySelector, create a new instance of lattitude and longititude.  The below acts like a constructor:
       let latitude = place.location.lat; //create a new instance of latitude which is stored using the structure of the previous function above
       let longitude = place.location.lng; //create a new instance of longitude which is stored using the structure of the previous function above

       let model = document.createElement('a-entity'); //create a new instance of a model which creates a new element under 'a-entity' in the index.html.  The contents of this a-entity are the following:
       model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`); // set that model's gps-entity-place using the latittude and longitutde values declared and retrieved above
       model.setAttribute('gltf-model', './assets/scene.gltf'); //establish the 3D model to use.  Here, it will use a present model.
       model.setAttribute('rotation', '0 180 0'); //set up the rotation/position of the model in respects to xyz coordinates
       model.setAttribute('scale', '20 20 20')//set i[ sacle for the model

       model.addEventListener('loaded', () => { //addEventListener() takes an event t listen for, in this case 'loaded' and then fires another argument when 'loaded' gest fired
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')) //within the window, a new event is then added to index.html; 'gps-entity-place-loaded'
       });

       scene.appendChild(model); //adds a child of model to scene
   });
}