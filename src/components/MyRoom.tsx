import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ChaoticOrbit } from "@uiball/loaders";

import { MyRoomModel } from "./MyRoomModel";

export const MyRoom = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <>
      <Canvas>
        <MyRoomModel
          onLoaded={() => {
            setIsLoaded(true);
          }}
        />
      </Canvas>
      {!isLoaded && (
        <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2">
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
