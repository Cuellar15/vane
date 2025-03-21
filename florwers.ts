<!-- HTML -->
<div id="container"></div>

<!-- JavaScript -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
<script>
  // Crear la escena y la cámara
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('container'),
    antialias: true
  });

  // Crear la flor
  const flower = new THREE.Group();
  scene.add(flower);

  // Crear el tallo
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 10, 32), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
  flower.add(stem);

  // Crear las hojas
  const leaves = new THREE.Group();
  flower.add(leaves);
  for (let i = 0; i < 5; i++) {
    const leaf = new THREE.Mesh(new THREE.CircleGeometry(1, 32), new THREE.MeshBasicMaterial({ color: 0x00ff00 }));
    leaf.position.set(Math.random() * 2 - 1, Math.random() * 2 - 1, 0);
    leaves.add(leaf);
  }

  // Crear los pétalos
  const petals = new THREE.Group();
  flower.add(petals);
  for (let i = 0; i < 10; i++) {
    const petal = new THREE.Mesh(new THREE.CircleGeometry(2, 32), new THREE.MeshBasicMaterial({ color: 0xffff00 }));
    petal.position.set(Math.cos(i * Math.PI * 2 / 10) * 2, Math.sin(i * Math.PI * 2 / 10) * 2, 0);
    petals.add(petal);
  }

  // Crear el centro de la flor
  const center = new THREE.Mesh(new THREE.SphereGeometry(0.5, 32, 32), new THREE.MeshBasicMaterial({ color: 0x663300 }));
  flower.add(center);

  // Crear la dedicatoria
  const dedication = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.TextureLoader().load('https://example.com/ashley.png'), transparent: true }));
  dedication.position.set(0, -5, 0);
  flower.add(dedication);

  // Renderizar la escena
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();
</script>