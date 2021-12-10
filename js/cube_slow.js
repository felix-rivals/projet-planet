// Creation de la Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


// Creation du rendu
const renderer = new THREE.WebGLRenderer(); renderer.setSize
( window.innerWidth, window.innerHeight ); document.body.appendChild( renderer.domElement ); 
w=3;

// Creation du l'objet geometrique
const geometry1 = new THREE.BoxGeometry(w, w, w);
const geometry2 = new THREE.BoxGeometry(w, w, w);
const geometry3 = new THREE.BoxGeometry(w, w, w);
const material3 = new THREE.MeshBasicMaterial( { color: "rgb(200, 0, 200)" } );
const material2 = new THREE.MeshBasicMaterial( { color: "rgb(0, 200, 200)" } );
const material1 = new THREE.MeshBasicMaterial( { color: "rgb(200, 200, 200)" } );
const cube1 = new THREE.Mesh( geometry1, material1 );
const cube2 = new THREE.Mesh( geometry2, material2 );
const cube3 = new THREE.Mesh( geometry3, material3 );
const cube1_1 = new THREE.Mesh( geometry1, material1 );
const cube2_1 = new THREE.Mesh( geometry2, material2 );
const cube3_1 = new THREE.Mesh( geometry3, material3 );
// Ajout de l'objet à la scene
scene.add( cube1 );
scene.add( cube2 );
scene.add( cube3 );

camera.position.z = 5;
d=0.015	;
//function d'animation
function animate() {
    requestAnimationFrame( animate );
    cube1.rotation.x += -d*1.5;
    cube1.rotation.y += d*1.5;

    cube2.rotation.x += -d*2;
    cube2.rotation.y += d*2;

    cube3.rotation.x += -d*2.8;
    cube3.rotation.y += d*2.8;

    renderer.render( scene, camera );
}
animate();

