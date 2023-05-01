import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef, useState } from "react";
import { ChaoticOrbit } from "@uiball/loaders";

export const MyRoom = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // 背景色を白色に設定

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.5,
      1000
    );
    camera.position.z = 5;
    camera.position.y = 5;
    camera.position.x = -3;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const mount = mountRef.current;
    if (mount !== null) {
      mount.appendChild(renderer.domElement);
    }

    const loader = new GLTFLoader();
    loader.load(
      "/asset/myRoom.gltf",
      (gltf) => {
        // gltfファイルの読み込みが完了したときに呼び出される
        scene.add(gltf.scene);
        setIsRendered(true);
      },
      (progress) => {
        // gltfファイルの読み込み中に呼び出される
        console.log("Loading: ", progress);
      },
      (error) => {
        // gltfファイルの読み込みにエラーが発生したときに呼び出される
        console.error(error);
      }
    );

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 2, 0); // カメラの中心を上に移動
    controls.enableDamping = true; // 慣性の有効化
    controls.dampingFactor = 0.05; // 慣性の減衰率
    controls.enablePan = false; // パン操作の無効化
    controls.minDistance = 1; // ズームインの最小距離
    controls.maxDistance = 10; // ズームアウトの最大距離
    controls.maxPolarAngle = Math.PI / 2; // 上方向への回転の制限
    controls.minAzimuthAngle = -Math.PI / 4; //　左右の回転の制限
    controls.maxAzimuthAngle = Math.PI / 4;

    // ライト
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 2, 3);
    scene.add(directionalLight);

    // アニメーション
    const tick = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(tick);
    };
    tick();
  }, []);

  return (
    <>
      {!isRendered && (
        <div className="absolute left-1/2 top-1/2 z-20 flex">
          <ChaoticOrbit size={50} speed={1.5} color="black" />
        </div>
      )}
      <div
        ref={mountRef}
        className="z-10"
        onClick={() => {
          console.log("clicked");
          // gltfのアニメーションを再生
        }}
      />
    </>
  );
};
