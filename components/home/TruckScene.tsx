"use client";

import { useEffect, useRef } from "react";

/**
 * Real-time 3D truck for the hero, rendered with Three.js (WebGL).
 *
 * Loads /truck.glb (place the model file in the `public` folder) and
 * automatically restyles it in company colors — navy, royal blue, and
 * pink — then mounts "YVES TRUCKING SERVICES" livery panels on both
 * sides of the trailer. If the model is missing or fails to load, a
 * built-in truck modeled from primitives is shown instead, so the
 * hero never breaks.
 *
 * Three.js + GLTFLoader come from a CDN — no npm install required.
 */

declare global {
  interface Window {
    THREE?: any;
  }
}

const THREE_SRC =
  "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
const GLTF_LOADER_SRC =
  "https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js";
const MODEL_URL = "/truck.glb";

/* Brand palette (matches tailwind.config.ts) */
const COLORS = {
  navy950: 0x05152c,
  navy900: 0x082247,
  navy800: 0x0b3167,
  navy700: 0x0e4187,
  royal600: 0x1355b2,
  royal700: 0x0f448e,
  pink: 0xf5569b,
  blush: 0xffcbeb,
  mist: 0xf4f7fb,
};

/* Paint the trailer livery onto a canvas → texture.
   `aspect` = width/height of the surface it will cover, so the art is
   generated at the right proportions and fills the container wall. */
function makeLiveryCanvas(aspect = 8 / 3): HTMLCanvasElement {
  const W = 1024;
  const H = Math.max(128, Math.round(W / aspect));
  const c = document.createElement("canvas");
  c.width = W;
  c.height = H;
  const x = c.getContext("2d");
  if (!x) return c;

  /* Panel */
  x.fillStyle = "#F4F7FB";
  x.fillRect(0, 0, W, H);
  /* Subtle corrugation lines */
  x.strokeStyle = "rgba(11, 49, 103, 0.06)";
  x.lineWidth = 3;
  for (let i = W / 16; i < W; i += W / 16) {
    x.beginPath();
    x.moveTo(i, H * 0.04);
    x.lineTo(i, H * 0.96);
    x.stroke();
  }
  /* Border */
  const lw = Math.round(H * 0.045);
  x.strokeStyle = "#1355B2";
  x.lineWidth = lw;
  x.strokeRect(lw / 2, lw / 2, W - lw, H - lw);
  /* Pink stripe */
  x.fillStyle = "#F5569B";
  x.fillRect(lw, Math.round(H * 0.78), W - lw * 2, Math.round(H * 0.085));
  /* Wordmark — big, centered, filling the wall */
  x.textAlign = "center";
  x.fillStyle = "#0B3167";
  x.font = `800 ${Math.round(H * 0.42)}px Poppins, 'Segoe UI', Arial, sans-serif`;
  x.fillText("YVES", W / 2, H * 0.5);
  x.fillStyle = "#1355B2";
  x.font = `600 ${Math.round(H * 0.11)}px Poppins, 'Segoe UI', Arial, sans-serif`;
  x.fillText("T R U C K I N G   S E R V I C E S", W / 2, H * 0.67);
  return c;
}


function createScene(THREE: any, container: HTMLDivElement): () => void {
  const width = container.clientWidth || 560;
  const height = container.clientHeight || 340;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(width, height);
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
  camera.position.set(6.2, 4.1, 9.9);
  camera.lookAt(0, 2.1, 0);

  /* Lighting */
  scene.add(new THREE.HemisphereLight(0xffffff, 0x16305c, 1.0));
  const sun = new THREE.DirectionalLight(0xffffff, 0.85);
  sun.position.set(6, 12, 7);
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0xf5569b, 0.18);
  fill.position.set(-8, 4, -6);
  scene.add(fill);

  const mat = (color: number) => new THREE.MeshLambertMaterial({ color });

  /* Livery texture (repainted when web fonts finish loading) */
  const liveryCanvas = makeLiveryCanvas();
  const liveryTex = new THREE.CanvasTexture(liveryCanvas);
  if (document.fonts?.ready) {
    document.fonts.ready.then(() => {
      const redrawn = makeLiveryCanvas();
      liveryCanvas.getContext("2d")?.drawImage(redrawn, 0, 0);
      liveryTex.needsUpdate = true;
    });
  }

  /* The truck group — filled by the GLB model or the fallback rig.
     Shifted left so the cab clears the right frame edge at this zoom */
  const truck = new THREE.Group();
  truck.position.x = -1.15;
  scene.add(truck);
  const wheels: any[] = [];

  /* ---------- Fallback truck built from primitives ---------- */
  function buildFallbackTruck() {
    const liveryMat = new THREE.MeshLambertMaterial({ map: liveryTex });
    const trailer = new THREE.Mesh(new THREE.BoxGeometry(6, 2.8, 2.2), [
      mat(0xdbe4f0),
      mat(0xc9d6e8),
      mat(0xffffff),
      mat(0x9fb2cc),
      liveryMat,
      liveryMat,
    ]);
    trailer.position.set(-1.15, 2.35, 0);
    truck.add(trailer);

    const chassis = new THREE.Mesh(new THREE.BoxGeometry(6.7, 0.35, 1.6), mat(COLORS.navy700));
    chassis.position.set(-0.9, 0.83, 0);
    truck.add(chassis);

    const cab = new THREE.Mesh(new THREE.BoxGeometry(1.55, 1.8, 2.05), mat(COLORS.royal600));
    cab.position.set(2.5, 1.82, 0);
    truck.add(cab);

    const windshield = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.72, 1.75),
      mat(COLORS.blush),
    );
    windshield.position.set(3.28, 2.22, 0);
    windshield.rotation.z = -0.16;
    truck.add(windshield);

    const hood = new THREE.Mesh(new THREE.BoxGeometry(1.05, 1.0, 1.9), mat(COLORS.royal700));
    hood.position.set(3.8, 1.32, 0);
    truck.add(hood);

    const bumper = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.55, 2.0), mat(COLORS.navy800));
    bumper.position.set(4.38, 0.95, 0);
    truck.add(bumper);

    for (const z of [-0.72, 0.72]) {
      const light = new THREE.Mesh(
        new THREE.BoxGeometry(0.1, 0.18, 0.24),
        new THREE.MeshBasicMaterial({ color: COLORS.blush }),
      );
      light.position.set(4.42, 1.28, z);
      truck.add(light);
    }

    const cabStripe = new THREE.Mesh(new THREE.BoxGeometry(1.57, 0.16, 2.07), mat(COLORS.pink));
    cabStripe.position.set(2.5, 1.18, 0);
    truck.add(cabStripe);

    const tireGeo = new THREE.CylinderGeometry(0.56, 0.56, 0.4, 28);
    tireGeo.rotateX(Math.PI / 2);
    const hubGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.42, 20);
    hubGeo.rotateX(Math.PI / 2);
    const tireMat = mat(0x0a1c38);
    const hubMat = mat(COLORS.mist);
    const spokeMat = mat(COLORS.navy800);
    for (const z of [-1.02, 1.02]) {
      for (const px of [-3.35, -2.05, 3.05]) {
        const wheel = new THREE.Group();
        wheel.add(new THREE.Mesh(tireGeo, tireMat));
        wheel.add(new THREE.Mesh(hubGeo, hubMat));
        wheel.add(new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.86, 0.44), spokeMat));
        wheel.add(new THREE.Mesh(new THREE.BoxGeometry(0.86, 0.1, 0.44), spokeMat));
        wheel.position.set(px, 0.56, z);
        truck.add(wheel);
        wheels.push(wheel);
      }
    }
  }

  /* ---------- Load the real GLB model, restyle, and brand it ---------- */
  function loadModel() {
    if (!THREE.GLTFLoader) {
      buildFallbackTruck();
      return;
    }
    const loader = new THREE.GLTFLoader();
    loader.load(
      MODEL_URL,
      (gltf: any) => {
        const model = gltf.scene;

        /* Find the biggest mesh — that's the trailer/cargo box */
        let trailerMesh: any = null;
        let trailerVol = 0;
        model.traverse((child: any) => {
          if (!child.isMesh) return;
          const b = new THREE.Box3().setFromObject(child);
          const sz = b.getSize(new THREE.Vector3());
          const vol = sz.x * sz.y * sz.z;
          if (vol > trailerVol) {
            trailerVol = vol;
            trailerMesh = child;
          }
        });

        /* Company paint job — replace every material outright so the
           model's original dark/metallic PBR look can't bleed through:
           white trailer, logo-pink cab & body, dark tires, blush glass */
        const mBox = new THREE.Box3().setFromObject(model);
        const mSize = mBox.getSize(new THREE.Vector3());
        model.traverse((child: any) => {
          if (!child.isMesh) return;
          const mats = Array.isArray(child.material) ? child.material : [child.material];
          const name = `${child.name} ${mats.map((m: any) => m?.name).join(" ")}`.toLowerCase();
          const cb = new THREE.Box3().setFromObject(child);
          const cs = cb.getSize(new THREE.Vector3());
          const isLowSmall =
            cb.max.y < mBox.min.y + mSize.y * 0.34 &&
            Math.max(cs.x, cs.z) < Math.max(mSize.x, mSize.z) * 0.3;

          /* Wheels, rims, and chassis details keep their ORIGINAL
             materials (tires, chrome rims, tanks) — only tone down the
             metalness so they don't render black without an env map */
          const isWheelish = /wheel|tyre|tire|rim/.test(name) || isLowSmall;
          if (isWheelish) {
            for (const m of mats) {
              if (!m) continue;
              if (typeof m.metalness === "number") m.metalness = Math.min(m.metalness, 0.5);
              if (typeof m.roughness === "number") m.roughness = Math.max(m.roughness, 0.45);
              m.needsUpdate = true;
            }
            return;
          }

          let hex: number;
          if (/glass|window|windshield|wind/.test(name)) hex = COLORS.blush;
          else if (child === trailerMesh) hex = COLORS.mist;
          else hex = COLORS.pink; /* logo pink */

          const fresh = new THREE.MeshLambertMaterial({ color: hex });
          child.material = Array.isArray(child.material)
            ? child.material.map(() => fresh)
            : fresh;
        });

        /* Normalize: length along x, sit on the ground, sensible size */
        const box = new THREE.Box3().setFromObject(model);
        const size = box.getSize(new THREE.Vector3());
        if (size.z > size.x) model.rotation.y = Math.PI / 2;
        let bb = new THREE.Box3().setFromObject(model);
        let s = bb.getSize(new THREE.Vector3());
        const scale = 10.8 / Math.max(s.x, 0.001);
        model.scale.setScalar(scale);
        bb = new THREE.Box3().setFromObject(model);
        const center = bb.getCenter(new THREE.Vector3());
        model.position.x -= center.x;
        model.position.z -= center.z;
        model.position.y -= bb.min.y;
        truck.add(model);

        /* Spin any meshes named like wheels, pivoting on their own center */
        const wheelNodes: any[] = [];
        model.traverse((child: any) => {
          if (/wheel|tyre|tire|rim/i.test(child.name) && child.isMesh) {
            wheelNodes.push(child);
          }
        });
        for (const node of wheelNodes) {
          const wb = new THREE.Box3().setFromObject(node);
          const wc = wb.getCenter(new THREE.Vector3());
          const pivot = new THREE.Group();
          truck.add(pivot);
          pivot.position.copy(truck.worldToLocal(wc.clone()));
          pivot.attach(node);
          wheels.push(pivot);
        }

        /* Wrap the container side with the YVES livery. The trailer
           mesh's own bounding box doesn't match the visible container,
           so measure the WHOLE truck: the roof is the model's top, and
           the container is the rear ~2/3 of its length, upper ~60% of
           its height (wheels/chassis live below that). */
        const fb = new THREE.Box3().setFromObject(model);
        const fSize = fb.getSize(new THREE.Vector3());

        const panelW = fSize.x * 0.64; /* container length (rear section) */
        const panelH = fSize.y * 0.58; /* container wall height */
        /* Top edge flush with the roofline */
        const panelY = fb.max.y - panelH / 2 - fSize.y * 0.02;
        /* Centered on the container, which sits toward the rear (-x) */
        const panelX = fb.min.x + fSize.x * 0.54;
        const tb = fb;
        const tDims = fSize;

        const wallAspect = panelW / panelH;
        const wallCanvas = makeLiveryCanvas(wallAspect);
        const wallTex = new THREE.CanvasTexture(wallCanvas);
        if (document.fonts?.ready) {
          document.fonts.ready.then(() => {
            const redrawn = makeLiveryCanvas(wallAspect);
            wallCanvas.getContext("2d")?.drawImage(redrawn, 0, 0);
            wallTex.needsUpdate = true;
          });
        }

        const panelGeo = new THREE.PlaneGeometry(panelW, panelH);
        const panelMat = new THREE.MeshBasicMaterial({ map: wallTex });

        const near = new THREE.Mesh(panelGeo, panelMat);
        near.position.set(panelX, panelY, tb.max.z + 0.02);
        truck.add(near);

        const far = new THREE.Mesh(panelGeo, panelMat);
        far.position.set(panelX, panelY, tb.min.z - 0.02);
        far.rotation.y = Math.PI;
        truck.add(far);
      },
      undefined,
      () => {
        /* Model missing/unreadable — show the built-in truck */
        buildFallbackTruck();
      },
    );
  }
  loadModel();

  /* ------------------------- ROAD ------------------------- */
  const road = new THREE.Mesh(
    new THREE.PlaneGeometry(46, 7.4),
    new THREE.MeshBasicMaterial({ color: 0x03102a, transparent: true, opacity: 0.5 }),
  );
  road.rotation.x = -Math.PI / 2;
  road.position.y = -0.01;
  scene.add(road);

  const shadow = new THREE.Mesh(
    new THREE.CircleGeometry(1, 32),
    new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.32 }),
  );
  shadow.rotation.x = -Math.PI / 2;
  shadow.scale.set(4.9, 1.55, 1);
  shadow.position.set(-1.15, 0.005, 0);
  scene.add(shadow);

  for (const z of [-3.1, 3.1]) {
    const edge = new THREE.Mesh(
      new THREE.BoxGeometry(46, 0.02, 0.14),
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.16 }),
    );
    edge.position.set(0, 0.01, z);
    scene.add(edge);
  }

  const dashes: any[] = [];
  const dashMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5,
  });
  for (let i = 0; i < 11; i++) {
    const dash = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.02, 0.17), dashMat);
    dash.position.set(-22 + i * 4.4, 0.015, 2.0);
    scene.add(dash);
    dashes.push(dash);
    const dash2 = new THREE.Mesh(new THREE.BoxGeometry(1.35, 0.02, 0.17), dashMat);
    dash2.position.set(-19.8 + i * 4.4, 0.015, -2.0);
    scene.add(dash2);
    dashes.push(dash2);
  }

  /* ------------------------- ANIMATE ------------------------- */
  const clock = new THREE.Clock();
  let frame = 0;
  const speed = 9;

  function animate() {
    frame = requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;

    for (const w of wheels) w.rotation.z -= (speed / 0.56) * dt;

    for (const d of dashes) {
      d.position.x -= speed * dt;
      if (d.position.x < -23) d.position.x += 46;
    }

    truck.position.y = Math.sin(t * 7) * 0.025 + Math.sin(t * 2.1) * 0.03;
    truck.rotation.y = Math.sin(t * 0.45) * 0.09;
    truck.rotation.z = Math.sin(t * 4.2) * 0.004;

    renderer.render(scene, camera);
  }
  animate();

  function onResize() {
    const w = container.clientWidth || width;
    const h = container.clientHeight || height;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
  }
  window.addEventListener("resize", onResize);

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("resize", onResize);
    renderer.dispose();
    liveryTex.dispose();
    if (renderer.domElement.parentNode === container) {
      container.removeChild(renderer.domElement);
    }
  };
}

/* Load a script once, then run cb */
function loadScript(src: string, cb: () => void) {
  let script = document.querySelector(`script[src="${src}"]`) as HTMLScriptElement | null;
  if (script?.dataset.loaded) {
    cb();
    return;
  }
  if (!script) {
    script = document.createElement("script");
    script.src = src;
    script.async = true;
    document.head.appendChild(script);
  }
  script.addEventListener("load", () => {
    script!.dataset.loaded = "1";
    cb();
  });
}

export default function TruckScene() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let cancelled = false;
    let dispose: (() => void) | undefined;

    const start = () => {
      if (cancelled || !window.THREE || !container) return;
      try {
        dispose = createScene(window.THREE, container);
      } catch {
        /* WebGL unavailable — leave the hero without the 3D scene */
      }
    };

    if (window.THREE?.GLTFLoader) {
      start();
    } else if (window.THREE) {
      loadScript(GLTF_LOADER_SRC, start);
    } else {
      loadScript(THREE_SRC, () => loadScript(GLTF_LOADER_SRC, start));
    }

    return () => {
      cancelled = true;
      dispose?.();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="h-[340px] w-full sm:h-[400px] lg:h-[480px]"
    />
  );
}
