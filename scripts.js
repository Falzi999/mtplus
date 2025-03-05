// scripts.js
// GSAP анимации
gsap.registerPlugin(ScrollTrigger);

gsap.from('header h1', { duration: 1.5, y: -50, opacity: 0, ease: 'power2.out' });
gsap.from('header p', { duration: 1.5, y: 50, opacity: 0, ease: 'power2.out', delay: 0.5 });
gsap.from('.cta-button', { duration: 1.5, y: 50, opacity: 0, ease: 'power2.out', delay: 1 });

// Анимации при прокрутке
gsap.from('.feature-item', {
    scrollTrigger: {
        trigger: '.feature-item',
        start: 'top 80%',
    },
    opacity: 0,
    y: 50,
    stagger: 0.3,
    duration: 1,
});

// Three.js 3D-эффекты
const canvas = document.getElementById('3d-canvas');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const geometry = new THREE.SphereGeometry(2, 32, 32);
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

camera.position.z = 5;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    renderer.render(scene, camera);
}

animate();