window.onload = () => { //load when the window running the code is open
  render(); //render function called, elaborated more below
};

const models = [  //declariung and initializing a model
  {
    url: './assets/scene.gltf', //url to this model
    scale: '0.5 0.5 0.5',
    rotation: '0 225 0'
  },
];

let modelIndex = 5; //set modelIndex to 0
const setModel = (model, entity) => { //setModel acts like a function; takes the values of model and entity
  if (model.position) {//if model has a position, then do the following:
    entity.setAttribute('position', model.position); //set entity's position to that of model.position's, provided under const.model
  }

  entity.setAttribute('gltf-model', model.url); //set entity's model.url to the one provided under const.model
};

function render() { //render function
  const scene = document.querySelector('a-scene'); //create a new instance of a scene which creates a new element under 'a-entity' in the index.html.  The contents of this a-entity are the following:

  navigator.geolocation.getCurrentPosition(function (position) { //draws from the user's current position
    const latitude = position.coords.latitude; //register the user's location as a variable latitutde
    const longitude = position.coords.longitude; //register the user's location as a variable longitude

    const model = document.createElement('a-entity'); //create an element within index.html under 'a-entity'
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`); //set and write the longitude and latitude in 'a-entity'

    setModel(models[modelIndex], model); //aset models based on the index number

    model.setAttribute('animation-mixer', ''); //add 'animation-mixer' in the line

    scene.appendChild(model); //adds a child of model to scene
  });
}

//How the script uses objects in an objects oriented style//
//Under the render function(), similar to the cookie-cutter method of object-oriented-probgramming, it constructs a 3D model object is being constructed; variables are passed through the equivalent of a constructor () : the latitude, longitude, and model URL.  This is then written into the index.html to be used.
//Similar to OOP, I would use a loop and an array to load and create multiple 3D objects.  The code to handle them could be here and use the render function
//I would add event listenrs in a seperate js file.  Buttons for interaction can be set in seperate html file with the event listeners wired to this html
