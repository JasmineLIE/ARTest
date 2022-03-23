# Jasmine's Quiz3 README

For this quiz, I've taken a .gtlf model of a present box and arranged them for a geographical-based AR setting.  While my 3D objects didn't behave as desired on my phone's webcam, running them in my browser using OBS as the camera seemed to work, as demonstrated in `demo.png`.  

Also, while the coordinates used are for my home (since I ran the AR late in the evneing), the GPS coordinates provided are linked to a different place.

Git Raw link to my gltf folder: https://rawcdn.githack.com/robots-make-art-too/Jasmine_Ly/tree/main/Quizzes/Quiz3/docs/assets

### The Original, First Model
`<a-entity gltf-model="assets/scene.gltf"  position = "0 0 0" rotation="0 180 0" scale="0.01 0.01 0.01" gps-entity-place="longitude: -79.723553; latitude: 43.641967;" animation-mixer></a-entity>`

Here is the original present model.  The position is set to 0, 0, 0; meaning that it should appear in the center.  The rotation is 180, meaning that the model will be rotated upright and appears as normal-- ribbon to the sky.  The present is set to the scale 0.1 for all xyz dimensions.  

### The First Copy
`<a-entity gltf-model="assets/scene.gltf"  position= "1 0 0" rotation="0 180 0" scale="0.01 0.01 0.01" gps-entity-place="longitude: -79.723553; latitude: 43.641967;" animation-mixer></a-entity>`

Here is the first copy of the original.  Its position is 1 unit away from the original present on the x-axis.  Additionally, its rotation and scale is the same as the original copy.

### The Second Copy
`<a-entity gltf-model="assets/scene.gltf" position= "2 0 0" rotation="150 10 50" scale="0.005 0.005 0.05" gps-entity-place="longitude: -79.723553; latitude: 43.641967;" animation-mixer></a-entity>`

Here is the second copy of the original.  Its position is 2 units away from the original on the x-axis.  Its rotation is 150 degrees on the x-axis, 10 degrees on the y-axis, and 50 degrees on the z-axis.  Its scale is set to 0.005 for both x and y-axis, as well as 0.05 for the y-axis.  This makes the present seem elongated.

### The Third Copy
`<a-entity gltf-model="assets/scene.gltf"  position= "3 0 0" rotation="150 200 7" scale="0.003 0.003 0.003" gps-entity-place="longitude: -79.723553; latitude: 43.641967;" animation-mixer></a-entity>`

Here is the third copy of the original.  Its position is 3 units away from the original on the x-axis.  Its rotation is 150 degrees on the x-axis, 200 degrees on the y-axis, and 7 degrees on the z-axis.  Additionally, its scaled down to 0.003 for all xyz axis.
