// Creation de la Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


// Creation du rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
w=2;

// Creation du l'objet geometrique
const geometry1 = new THREE.BoxGeometry(w*0, w, w);
const geometry2 = new THREE.BoxGeometry(w, w*0, w);
const geometry3 = new THREE.BoxGeometry(w, w, w*0);
const geometry4 = new THREE.BoxGeometry(w/2, w/2, w/2);
const material3 = new THREE.MeshBasicMaterial( { color: "rgb(0, 0, 200)" } );
const material2 = new THREE.MeshBasicMaterial( { color: "rgb(0, 200, 0)" } );
const material1 = new THREE.MeshBasicMaterial( { color: "rgb(200, 0, 0)" } );
const material4 = new THREE.MeshBasicMaterial( { color: "rgb(0, 0, 0)" } );
const cube1 = new THREE.Mesh( geometry1, material1 );
const cube2 = new THREE.Mesh( geometry2, material2 );
const cube3 = new THREE.Mesh( geometry3, material3 );
const cube4 = new THREE.Mesh( geometry4, material4 );
// Ajout de l'objet à la scene
scene.add( cube1 );
scene.add( cube2 );
scene.add( cube3 );
scene.add( cube4 );
/*const geometry = new THREE.BoxGeometry();
const material1 = new THREE.MeshBasicMaterial( { color: 606060 } );
const material2 = new THREE.MeshBasicMaterial( { color: 808080 } );
const material3 = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube1 = new THREE.Mesh( geometry, material1 );
const cube2 = new THREE.Mesh( geometry, material2 );
const cube3 = new THREE.Mesh( geometry, material3 );
// Ajout de l'objet à la scene
scene.add( cube1 );
scene.add( cube2 );
scene.add( cube3 ); */

const geometry = new THREE.SphereGeometry();
const material = new THREE.MeshBasicMaterial( {
    color: 129423
});
const sphere = new THREE.Mesh(geometry, material);

scene.add(sphere);

camera.position.z = 5;
d=0.05;

//function d'animation
function animate() {
    requestAnimationFrame( animate );
    cube1.rotation.x += d;
    cube1.rotation.y += -d;

    cube2.rotation.x += -d*2;
    cube2.rotation.y += d;

    cube3.rotation.x += d*2;
    cube3.rotation.y += d;

    cube4.rotation.x += -d;
    cube4.rotation.y += -d;
    cube1.rotation.x += 0.005;
    cube1.rotation.y += 0.002;

    cube2.rotation.x += 0.0010;
    cube2.rotation.y += 0.0010;

    cube3.rotation.x += 0.002;
    cube3.rotation.y += 0.005;
    renderer.render( scene, camera );
}
animate();


