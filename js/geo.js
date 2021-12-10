

// Creation du rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Creation de la Scene & Camera
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const scene = new THREE.Scene();


// Creation du l'objet geometrique
const points = [];
points.push( new THREE.Vector3( - 10, 0, 0 ) );
points.push( new THREE.Vector3( 0, 10, 0 ) );
points.push( new THREE.Vector3( 10, 0, 0 ) );
const geometry = new THREE.BufferGeometry().setFromPoints( points );

//create a blue LineBasicMaterial
const material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
const line = new THREE.Line( geometry, material );
// Ajout de l'objet à la scene
scene.add( line);
camera.position.z = 5;


//function d'animation
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();










/**
// Creation de la Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


// Creation du rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Creation du l'objet geometrique
const geometry1 = new THREE.BoxGeometry(2, 0.0, 0.5);
const geometry2 = new THREE.BoxGeometry(2, 0.0, 0.5);
const geometry3 = new THREE.BoxGeometry(2, 0.0, 0.5);
const material1 = new THREE.MeshBasicMaterial( { color: 606060 } );
const material2 = new THREE.MeshBasicMaterial( { color: 808080 } );
const material3 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube1 = new THREE.Mesh( geometry1, material1 );
const cube2 = new THREE.Mesh( geometry2, material2 );
const cube3 = new THREE.Mesh( geometry3, material3 );
// Ajout de l'objet à la scene
scene.add( cube1 );
scene.add( cube2 );
scene.add( cube3 );

camera.position.z = 5;

//function d'animation
function animate() {
    requestAnimationFrame( animate );
    cube1.rotation.x += 0.05;
    cube1.rotation.y += 0.2;

    cube2.rotation.x += 0.10;
    cube2.rotation.y += 0.10;

    cube3.rotation.x += 0.2;
    cube3.rotation.y += 0.05;
    renderer.render( scene, camera );
}
animate();

*/