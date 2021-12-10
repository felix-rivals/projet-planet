var textureURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/lroc_color_poles_1k.jpg";
var displacementURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/ldem_3_8bit.jpg";
var worldURL = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/17271/hipp8_s.jpg";
var sunURL = 'https://lh4.googleusercontent.com/XKZKMrouwN5DBTQvcv2NB5xBnY6fNSAxWRWUEVrRYJQdpdVzrj38IvRPJ-9dtcur39ylDb7HY-MD4NBDfgmy=w1920-h929-rw'

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
var controls = new THREE.OrbitControls( camera, renderer.domElement );
controls.enablePan = false;
controls.rotateSpeed = .07;
controls.enableDamping = true;
controls.dampingFactor = .05;


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.SphereGeometry( 2,60,600 );

var textureLoader = new THREE.TextureLoader();
var texture = textureLoader.load( textureURL );
var displacementMap = textureLoader.load( displacementURL );
var worldTexture = textureLoader.load( worldURL );
var sunTexture = textureLoader.load(sunURL);
var earthTexture = textureLoader.load('./Lava_006_basecolor.jpg');

var material = new THREE.MeshPhongMaterial (
    { color: 0xffffff ,
        map: texture ,
        displacementMap: displacementMap,
        displacementScale: 0.06,
        bumpMap: displacementMap,
        bumpScale: 0.04,
        reflectivity:0,
        shininess :0
    }

);
var moon = new THREE.Mesh( geometry, material );


var earthGeometry = new THREE.SphereGeometry(7, 60, 600);
var earthMaterial = new THREE.MeshPhongMaterial(
    {
        color: 0xffffff,
        map: earthTexture,
        displacementMap: displacementMap,
        displacementScale: 0.7,
        bumpMap: displacementMap,
        bumpScale: 0.08,
        reflectivity: 0,
        shininess: 0
    }
);
var earth = new THREE.Mesh(earthGeometry, material);

scene.add(earth);

earth.position.x = -30;
earth.position.y = -30;


var sunGeometry = new THREE.SphereGeometry(20, 100, 100);
var sunMaterial = new THREE.MeshPhongMaterial (
    { color: 0xffffff ,
        map: sunTexture ,
        displacementMap: displacementMap,
        displacementScale: 0.06,
        bumpMap: displacementMap,
        bumpScale: 0.04,
        reflectivity:0,
        shininess :0
    }

);
var sun = new THREE.Mesh(sunGeometry, sunMaterial);

sun.position.x = 0;
sun.position.y = 30;

scene.add(sun);


scene.add(new THREE.AmbientLight(0x333333));

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5,3,5);
scene.add(light);



hemiLight = new THREE.HemisphereLight( 0xffffff, 0xffffff, 0.1 );
hemiLight.color.setHSL( 0.6, 1, 0.6 );
hemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
hemiLight.position.set( 0, 0, 0 );
scene.add( hemiLight );

var camhelp = new THREE.CameraHelper(camera);
//scene.add(camhelp);


var worldGeometry = new THREE.SphereGeometry( 1000,600,600 );
var worldMaterial = new THREE.MeshBasicMaterial (
    { color: 0xffffff ,
        map: worldTexture ,
        side: THREE.BackSide
    }
);
var world = new THREE.Mesh( worldGeometry, worldMaterial );
scene.add( world );

scene.add( moon );
camera.position.z = 5;

moon.rotation.x = 3.1415*0.02;
moon.rotation.y = 3.1415*1.54;


function animate() {
    requestAnimationFrame( animate );
    controls.update();
    moon.rotation.y += 0.002;
    moon.rotation.x += 0.0001;
    world.rotation.y += 0.0001
    world.rotation.x += 0.0005
    sun.rotation.y += 0.0004;
    sun.rotation.x += 0.00001;

    renderer.render( scene, camera );
}
animate();


function onResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', onResize, false);