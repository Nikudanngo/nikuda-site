import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { ChaoticOrbit } from "@uiball/loaders";

import { MyRoomModel } from "./MyRoomModel";

export const MyRoom = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls
          target={[0, 2.5, 0]} // カメラの中心を上に移動
          enableDamping={true} // 慣性の有効化
          dampingFactor={0.05} // 慣性の減衰率
          enablePan={false} // パン操作の無効化
          minDistance={1} // ズームインの最小距離
          maxDistance={10} // ズームアウトの最大距離
          maxPolarAngle={Math.PI / 2} // 上方向への回転の制限
          minAzimuthAngle={-Math.PI / 4} //　左右の回転の制限
          maxAzimuthAngle={Math.PI / 4}
        />
        <MyRoomModel
          onLoaded={() => {
            setIsLoaded(true);
          }}
        />
      </Canvas>
      {!isLoaded && (
        <div className="absolute left-1/2 top-1/2 z-20 flex">
          <ChaoticOrbit size={50} speed={1.5} color="black" />
        </div>
      )}
      <div
        onClick={() => {
          // console.log("clicked");
          // gltfのアニメーションを再生
        }}
      />
    </>
  );
};
