// Initialize the Three.js Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(600, 400);
document.getElementById('3d-container').appendChild(renderer.domElement);

// Create a Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set initial camera position
camera.position.z = 5;

// Transformation variables
let translateX3D = 0;
let translateY3D = 0;
let translateZ3D = 0;
let scale3D = 1;
let rotateX3D = 0;
let rotateY3D = 0;
let rotateZ3D = 0;

// Function to apply transformations to the cube
function applyTransformations3D() {
    cube.position.set(translateX3D, translateY3D, translateZ3D);
    cube.scale.set(scale3D, scale3D, scale3D);
    cube.rotation.x = THREE.Math.degToRad(rotateX3D);
    cube.rotation.y = THREE.Math.degToRad(rotateY3D);
    cube.rotation.z = THREE.Math.degToRad(rotateZ3D);

    renderer.render(scene, camera);
}

// Update transformation variables based on slider input
function updateTransformations3D() {
    translateX3D = parseFloat(document.getElementById('translateX3D').value);
    translateY3D = parseFloat(document.getElementById('translateY3D').value);
    translateZ3D = parseFloat(document.getElementById('translateZ3D').value);
    scale3D = parseFloat(document.getElementById('scale3D').value);
    rotateX3D = parseInt(document.getElementById('rotateX3D').value);
    rotateY3D = parseInt(document.getElementById('rotateY3D').value);
    rotateZ3D = parseInt(document.getElementById('rotateZ3D').value);

    applyTransformations3D();
}

// Attach event listeners to 3D controls
document.getElementById('translateX3D').addEventListener('input', updateTransformations3D);
document.getElementById('translateY3D').addEventListener('input', updateTransformations3D);
document.getElementById('translateZ3D').addEventListener('input', updateTransformations3D);
document.getElementById('scale3D').addEventListener('input', updateTransformations3D);
document.getElementById('rotateX3D').addEventListener('input', updateTransformations3D);
document.getElementById('rotateY3D').addEventListener('input', updateTransformations3D);
document.getElementById('rotateZ3D').addEventListener('input', updateTransformations3D);

// Initial render
applyTransformations3D();

