import * as THREE from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/build/three.module.js';
// Import OrbitControls
import { OrbitControls } from 'https://threejsfundamentals.org/threejs/resources/threejs/r132/examples/jsm/controls/OrbitControls.js';
// Create renderer
const renderer = new THREE.WebGLRenderer(); renderer.setSize(window.innerWidth, window.innerHeight); document.body.appendChild(renderer.domElement);
// Create camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500);
camera.position.set(0, 0, 100);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Create OrbitControls
const controls = new OrbitControls(camera, renderer.domElement); controls.enableDamping = true; // Adds smooth motion controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 10;
controls.maxDistance = 200;
// Create scene
const scene = new THREE.Scene();
// Create a circle
const circleMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 }); const circlePoints = [];
const radius = 25; // Circle radius
const segments = 100; // Number of segments to approximate the circle
for (let i = 0; i <= segments; i++) {
const theta = (i / segments) * 2 * Math.PI;
const x = radius * Math.cos(theta);
const y = radius * Math.sin(theta); circlePoints.push(new THREE.Vector3(x, y, 0));
}
const circleGeometry = new THREE.BufferGeometry().setFromPoints(circlePoints); const circle = new THREE.Line(circleGeometry, circleMaterial);
scene.add(circle);
// Animation loop for rendering and controls update 
function animate() {
requestAnimationFrame(animate); controls.update(); // Required for damping to work 
renderer.render(scene, camera);
}
// Start the animation loop 
animate();