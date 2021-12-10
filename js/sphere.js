// Creation de la Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


// Creation du rendu
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Creation du l'objet geometrique + ajout texture
const loader = new THREE.TextureLoader();

const geometry = new THREE.SphereGeometry( 1, 32, 16 );
const material = new THREE.MeshPhongMaterial();
const sphere = new THREE.Mesh( geometry, material );
sphere.overdraw = true;
sphere.castShadow = true;
// Ajout de l'objet à la scene
scene.add( sphere );

const fov = 45;
const aspect = 2;  // the canvas default
const near = 0.1;
const far = 100;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.set(0, 10, 20)

//function d'animation
var quaternion = new THREE.Quaternion();
var object = scene.getObjectByName('xxx');
function render(){
    quaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0).normalize(), 0.005);
    object.position.applyQuaternion(quaternion);
}

function animate() {
    requestAnimationFrame( animate );

    sphere.rotation.x += 0.002

    renderer.render( scene, camera );
}
animate();


