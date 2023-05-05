/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, OrbitControls, Html } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { PerspectiveCamera } from "@react-three/drei";

const isProd = process.env.NODE_ENV === "production";
type GLTFResult = GLTF & {
  nodes: {
    Lente_Lentes_0001: THREE.Mesh;
    Lente_Lentes_0001_1: THREE.Mesh;
    Lente_Lentes_0001_2: THREE.Mesh;
    Lente_Lentes_0001_3: THREE.Mesh;
    Lente_Lentes_0001_4: THREE.Mesh;
    ["Sensor-Bajo-drc_Negro_0"]: THREE.Mesh;
    ["Sensor-Bajo-Izq_Negro_0"]: THREE.Mesh;
    ["Volumen_+_-__0"]: THREE.Mesh;
    monitor001: THREE.Mesh;
    arm: THREE.Mesh;
    monitor002: THREE.Mesh;
    cup: THREE.Mesh;
    table001: THREE.Mesh;
    cup002: THREE.Mesh;
    Cube077: THREE.Mesh;
    Cube077_1: THREE.Mesh;
    Cube077_2: THREE.Mesh;
    Cube077_3: THREE.Mesh;
    Cube077_4: THREE.Mesh;
    Cube077_5: THREE.Mesh;
    Cube077_6: THREE.Mesh;
    Cube077_7: THREE.Mesh;
    Cube077_8: THREE.Mesh;
    Cube077_9: THREE.Mesh;
    Cube077_10: THREE.Mesh;
    Cube077_11: THREE.Mesh;
    Cube077_12: THREE.Mesh;
    Cube077_13: THREE.Mesh;
    Cube077_14: THREE.Mesh;
    Cube077_15: THREE.Mesh;
    Cube077_16: THREE.Mesh;
    Cube077_17: THREE.Mesh;
    Cube077_18: THREE.Mesh;
    Cube077_19: THREE.Mesh;
    Cube077_20: THREE.Mesh;
    Cube077_21: THREE.Mesh;
    Cube077_22: THREE.Mesh;
    Cube077_23: THREE.Mesh;
    Cube077_24: THREE.Mesh;
    Cube077_25: THREE.Mesh;
    Cube077_26: THREE.Mesh;
    Cube077_27: THREE.Mesh;
    Cube077_28: THREE.Mesh;
    ["table-buuton"]: THREE.Mesh;
    Body13001: THREE.Mesh;
    Body13001_1: THREE.Mesh;
    Body13001_2: THREE.Mesh;
    Body13001_3: THREE.Mesh;
    table002: THREE.Mesh;
    Body13007: THREE.Mesh;
    Body13007_1: THREE.Mesh;
    Body13007_2: THREE.Mesh;
    Body13007_3: THREE.Mesh;
    cup001: THREE.Mesh;
  };
  materials: {
    ["Lentes.001"]: THREE.MeshStandardMaterial;
    ["Power_Botton__0.001"]: THREE.MeshStandardMaterial;
    ["OnOff.001"]: THREE.MeshStandardMaterial;
    ["Negro.001"]: THREE.MeshStandardMaterial;
    ["Carcaza.001"]: THREE.MeshStandardMaterial;
    moniter: THREE.MeshStandardMaterial;
    ["マテリアル.003"]: THREE.MeshStandardMaterial;
    coffee: THREE.MeshStandardMaterial;
    ["BLUE JOY-CON PLASTIC"]: THREE.MeshStandardMaterial;
    ["PLASTIC SHINY"]: THREE.MeshStandardMaterial;
    ["BLUE PLASTIC SHINY"]: THREE.MeshStandardMaterial;
    ["LED.001"]: THREE.MeshStandardMaterial;
    ["PLASTIC.001"]: THREE.MeshStandardMaterial;
    ["SCREWS.001"]: THREE.MeshStandardMaterial;
    ["BLUE SEPARATION"]: THREE.MeshStandardMaterial;
    ["DOCK PLASTIC"]: THREE.MeshStandardMaterial;
    ["FRONT DOCK LOGO"]: THREE.MeshStandardMaterial;
    ["DOCK LED"]: THREE.MeshStandardMaterial;
    ["SD METAL"]: THREE.MeshStandardMaterial;
    ["USB-C "]: THREE.MeshStandardMaterial;
    ["USB 3.0"]: THREE.MeshStandardMaterial;
    ["STAND MATERIAL"]: THREE.MeshStandardMaterial;
    ["GREY PLASTIC"]: THREE.MeshStandardMaterial;
    ["RUBBER MATERIAL"]: THREE.MeshStandardMaterial;
    ["SCREEN.001"]: THREE.MeshStandardMaterial;
    ["SD PANEL"]: THREE.MeshStandardMaterial;
    ["GLASS.001"]: THREE.MeshStandardMaterial;
    ["BACK LOGO"]: THREE.MeshStandardMaterial;
    ["METAL.001"]: THREE.MeshStandardMaterial;
    ["COOLER.001"]: THREE.MeshStandardMaterial;
    ["HOLDER.001"]: THREE.MeshStandardMaterial;
    ["RED JOY-CON PLASTIC"]: THREE.MeshStandardMaterial;
    ["RED SEPARATION"]: THREE.MeshStandardMaterial;
    ["INFRARED.001"]: THREE.MeshStandardMaterial;
    ["LETTER MATERIAL"]: THREE.MeshStandardMaterial;
    ["AROUND HOME BUTTON"]: THREE.MeshStandardMaterial;
    ["SPEAKER.001"]: THREE.MeshStandardMaterial;
    table_button: THREE.MeshStandardMaterial;
    ["Rubber_-_Soft"]: THREE.MeshStandardMaterial;
    ["Bronze_-_Polished"]: THREE.MeshStandardMaterial;
    ["Aluminum_-_Anodized_Glossy_(Grey)_keyboard.jpg"]: THREE.MeshStandardMaterial;
    ["Steel_-_Satin"]: THREE.MeshStandardMaterial;
    wood: THREE.MeshStandardMaterial;
    ["Acrylic_(Clear)"]: THREE.MeshStandardMaterial;
    ["Aluminum_-_Anodized_Glossy_(Grey)"]: THREE.MeshStandardMaterial;
    ["Plastic_-_Translucent_Matte_(Gray)"]: THREE.MeshStandardMaterial;
    ["Glass_-_Heavy_Color"]: THREE.MeshStandardMaterial;
    マテリアル: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

type ActionName = "cameraAction" | "macbook.007Action";
interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}
interface MyRoomModelProps {
  onLoaded?: () => void;
  children?: React.ReactNode;
}

export function MyRoomModel(props: MyRoomModelProps) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(
    `${isProd ? process.env.NEXT_PUBLIC_HOSTING_URL : ""}/assets/myRoom.gltf`
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  const openMacbookAnimation = () => {
    const action = actions["macbook.007Action"] as THREE.AnimationAction;
    // アニメーションを再生して最後のフレームで停止
    action.setLoop(THREE.LoopOnce, 1).play();
    setTimeout(() => {
      action.reset().play();
      action.paused = true;
      action.time = action.getClip().duration;
    }, 1000);
  };

  useEffect(() => {
    const { onLoaded } = props;
    if (onLoaded) {
      onLoaded();
    }
  }, [props]);

  return (
    <>
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
      <group ref={group} {...props} dispose={null}>
        <group name="Scene">
          <group
            name="camera"
            position={[-8.22, 6.98, 13.65]}
            rotation={[1.31, -0.16, 0.54]}
            scale={3.07}
            userData={{ name: "camera" }}
          >
            <PerspectiveCamera
              name="camera_Orientation"
              makeDefault={false}
              far={1000}
              near={0.1}
              fov={22.9}
              rotation={[-Math.PI / 2, 0, 0]}
              userData={{ name: "camera_Orientation" }}
            />
          </group>
          <group
            name="oculus"
            position={[-2.71, 2.15, 0.59]}
            rotation={[-Math.PI / 2, 0, 0.64]}
            scale={0.33}
            userData={{ name: "oculus" }}
          >
            <group
              name="7c44c98961904fa5a7adccdbff581711fbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
              userData={{ name: "7c44c98961904fa5a7adccdbff581711.fbx" }}
            >
              <group name="RootNode" userData={{ name: "RootNode" }}>
                <group
                  name="Agarre-Lateral-drc"
                  position={[-117.04, 0, 0]}
                  rotation={[0, 0, Math.PI]}
                  scale={[0.05, 0.14, 0.47]}
                  userData={{ name: "Agarre-Lateral-drc" }}
                />
                <group
                  name="Agarre-Lateral-izq"
                  position={[116.51, 0, 0]}
                  scale={[0.05, 0.14, 0.47]}
                  userData={{ name: "Agarre-Lateral-izq" }}
                />
                <group
                  name="Circle"
                  position={[-109.06, -25.72, 59.73]}
                  rotation={[0, 0, -Math.PI / 2]}
                  scale={0.01}
                  userData={{ name: "Circle" }}
                />
                <group
                  name="Cube"
                  position={[38.84, 0, -218.22]}
                  rotation={[0.1, -0.29, 0]}
                  scale={[0.06, 0.16, 0.05]}
                  userData={{ name: "Cube" }}
                />
                <group
                  name="Goma"
                  position={[0, 0, 2.79]}
                  scale={0.29}
                  userData={{ name: "Goma" }}
                />
                <group
                  name="Lente"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.27}
                  userData={{ name: "Lente" }}
                >
                  <group
                    name="Lente_Lentes_0"
                    userData={{ name: "Lente_Lentes_0" }}
                  >
                    <mesh
                      name="Lente_Lentes_0001"
                      castShadow
                      receiveShadow
                      geometry={nodes.Lente_Lentes_0001.geometry}
                      material={materials["Lentes.001"]}
                    />
                    <mesh
                      name="Lente_Lentes_0001_1"
                      castShadow
                      receiveShadow
                      geometry={nodes.Lente_Lentes_0001_1.geometry}
                      material={materials["Power_Botton__0.001"]}
                    />
                    <mesh
                      name="Lente_Lentes_0001_2"
                      castShadow
                      receiveShadow
                      geometry={nodes.Lente_Lentes_0001_2.geometry}
                      material={materials["OnOff.001"]}
                    />
                    <mesh
                      name="Lente_Lentes_0001_3"
                      castShadow
                      receiveShadow
                      geometry={nodes.Lente_Lentes_0001_3.geometry}
                      material={materials["Negro.001"]}
                    />
                    <mesh
                      name="Lente_Lentes_0001_4"
                      castShadow
                      receiveShadow
                      geometry={nodes.Lente_Lentes_0001_4.geometry}
                      material={materials["Carcaza.001"]}
                    />
                  </group>
                </group>
                <group
                  name="Oculus_Q2"
                  scale={0.3}
                  userData={{ name: "Oculus Q2" }}
                />
                <group
                  name="Oculus_Q2_Interior"
                  scale={0.3}
                  userData={{ name: "Oculus Q2 Interior" }}
                />
                <group
                  name="Power_Botton"
                  position={[110.17, -25.67, 38.64]}
                  rotation={[0, 0, -0.13]}
                  scale={[0.06, 0.02, 0.02]}
                  userData={{ name: "Power_Botton" }}
                />
                <group
                  name="Power_Botton001"
                  position={[-111.51, -25.67, 38.64]}
                  rotation={[Math.PI, 0, 3.01]}
                  scale={[0.06, 0.02, 0.02]}
                  userData={{ name: "Power_Botton.001" }}
                />
                <group
                  name="Sensor-Bajo-drc"
                  position={[-86.25, -61.32, 86.04]}
                  rotation={[0.04, 0.35, -0.84]}
                  scale={0.02}
                  userData={{ name: "Sensor-Bajo-drc" }}
                >
                  <mesh
                    name="Sensor-Bajo-drc_Negro_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Sensor-Bajo-drc_Negro_0"].geometry}
                    material={materials["Negro.001"]}
                    userData={{ name: "Sensor-Bajo-drc_Negro_0" }}
                  />
                </group>
                <group
                  name="Sensor-Bajo-Izq"
                  position={[85.08, -62.07, 85.93]}
                  rotation={[-0.32, 0.15, 0.44]}
                  scale={0.02}
                  userData={{ name: "Sensor-Bajo-Izq" }}
                >
                  <mesh
                    name="Sensor-Bajo-Izq_Negro_0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Sensor-Bajo-Izq_Negro_0"].geometry}
                    material={materials["Negro.001"]}
                    userData={{ name: "Sensor-Bajo-Izq_Negro_0" }}
                  />
                </group>
                <group
                  name="Sensor-Up-drc"
                  position={[-84.78, 30.87, 86.41]}
                  rotation={[0.01, 0.77, -2.47]}
                  scale={0.02}
                  userData={{ name: "Sensor-Up-drc" }}
                />
                <group
                  name="Sensor-Up-Izq"
                  position={[85.08, 30.13, 85.93]}
                  rotation={[-0.11, -0.59, 2.31]}
                  scale={0.02}
                  userData={{ name: "Sensor-Up-Izq" }}
                />
                <group
                  name="Soporte-Lente"
                  rotation={[Math.PI / 2, 0, 0]}
                  scale={0.27}
                  userData={{ name: "Soporte-Lente" }}
                />
                <group
                  name="Sphere001"
                  position={[0, -14.04, -94.68]}
                  scale={1.35}
                  userData={{ name: "Sphere.001" }}
                />
                <group
                  name="Volumen_+_-"
                  position={[-37.17, -77, 70.56]}
                  rotation={[1.48, 1.54, 3.01]}
                  scale={[0.05, 0.04, 0.05]}
                  userData={{ name: "Volumen + -" }}
                >
                  <mesh
                    name="Volumen_+_-__0"
                    castShadow
                    receiveShadow
                    geometry={nodes["Volumen_+_-__0"].geometry}
                    material={materials["Power_Botton__0.001"]}
                    userData={{ name: "Volumen + -__0" }}
                  />
                </group>
              </group>
            </group>
          </group>
          <mesh
            name="monitor001"
            castShadow
            receiveShadow
            geometry={nodes.monitor001.geometry}
            material={materials.moniter}
            position={[-0.24, 3.74, -1.26]}
            scale={[1.31, 0.74, 0.04]}
            userData={{ name: "monitor.001" }}
          />
          <Html
            className="fixed left-0 top-0 h-full w-full"
            position={[-1.57, 4.5, -1.21]}
            distanceFactor={1.5}
            transform
            occlude
          >
            <iframe
              className="h-[400px] w-[710px] p-2"
              src="https://www.youtube.com/embed/5qap5aO4i9A"
            />
          </Html>
          <mesh
            name="arm"
            castShadow
            receiveShadow
            geometry={nodes.arm.geometry}
            material={materials.moniter}
            position={[1.25, 1.92, -1.64]}
            scale={[0.35, 0.03, 0.19]}
            userData={{ name: "arm" }}
          />
          <mesh
            name="monitor002"
            castShadow
            receiveShadow
            geometry={nodes.monitor002.geometry}
            material={materials.moniter}
            position={[2.46, 3.69, -0.75]}
            rotation={[0, -0.37, 0]}
            scale={[1.31, 0.74, 0.04]}
            userData={{ name: "monitor.002" }}
          />
          <Html
            className="fixed left-0 top-0 h-full w-full"
            position={[1.2, 4.45, -1.2]}
            rotation={[0, -0.37, 0]}
            distanceFactor={1.5}
            transform
            occlude
          >
            <iframe
              className="h-[400px] w-[710px] p-2"
              // src="https://www.youtube.com/embed/MVPTGNGiI-4"
              // ↓これだとツイートがチラつくので、レンダリングされてたiframeの中身を直書きしてみた
              // todo:問題なさそうならpublic/tweet.htmlを削除
              // src="/tweet.html"
              src="https://syndication.twitter.com/srv/timeline-profile/screen-name/onikumaruBuu?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideBorder=false&hideFooter=false&hideHeader=false&hideScrollBar=false&lang=en&origin=http%3A%2F%2Flocalhost%3A3000%2Ftweet.html&sessionId=5f10673f80c0fcd93b556e5f637453f6bec9806a&showHeader=true&showReplies=false&transparent=false&widgetsVersion=aaf4084522e3a%3A1674595607486"
            />
          </Html>
          <mesh
            name="cup"
            castShadow
            receiveShadow
            geometry={nodes.cup.geometry}
            material={materials["マテリアル.003"]}
            position={[1.99, 1.88, 0.75]}
            rotation={[0, -0.48, 0]}
            scale={0.2}
            userData={{ name: "cup" }}
          />
          <mesh
            name="table001"
            castShadow
            receiveShadow
            geometry={nodes.table001.geometry}
            material={materials["マテリアル.003"]}
            scale={[0.11, 1, 0.15]}
            userData={{ name: "table.001" }}
          />
          <mesh
            name="cup002"
            castShadow
            receiveShadow
            geometry={nodes.cup002.geometry}
            material={materials.coffee}
            position={[1.99, 1.88, 0.75]}
            rotation={[0, -0.48, 0]}
            scale={0.2}
            userData={{ name: "cup.002" }}
          />
          <group
            name="switch"
            position={[-2.23, 2.23, -0.46]}
            rotation={[0, -0.61, -0.01]}
            scale={[0.42, 0.38, 0.42]}
            userData={{ name: "switch" }}
          >
            <mesh
              name="Cube077"
              castShadow
              receiveShadow
              geometry={nodes.Cube077.geometry}
              material={materials["BLUE JOY-CON PLASTIC"]}
            />
            <mesh
              name="Cube077_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_1.geometry}
              material={materials["PLASTIC SHINY"]}
            />
            <mesh
              name="Cube077_2"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_2.geometry}
              material={materials["BLUE PLASTIC SHINY"]}
            />
            <mesh
              name="Cube077_3"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_3.geometry}
              material={materials["LED.001"]}
            />
            <mesh
              name="Cube077_4"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_4.geometry}
              material={materials["PLASTIC.001"]}
            />
            <mesh
              name="Cube077_5"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_5.geometry}
              material={materials["SCREWS.001"]}
            />
            <mesh
              name="Cube077_6"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_6.geometry}
              material={materials["BLUE SEPARATION"]}
            />
            <mesh
              name="Cube077_7"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_7.geometry}
              material={materials["DOCK PLASTIC"]}
            />
            <mesh
              name="Cube077_8"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_8.geometry}
              material={materials["FRONT DOCK LOGO"]}
            />
            <mesh
              name="Cube077_9"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_9.geometry}
              material={materials["DOCK LED"]}
            />
            <mesh
              name="Cube077_10"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_10.geometry}
              material={materials["SD METAL"]}
            />
            <mesh
              name="Cube077_11"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_11.geometry}
              material={materials["USB-C "]}
            />
            <mesh
              name="Cube077_12"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_12.geometry}
              material={materials["USB 3.0"]}
            />
            <mesh
              name="Cube077_13"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_13.geometry}
              material={materials["STAND MATERIAL"]}
            />
            <mesh
              name="Cube077_14"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_14.geometry}
              material={materials["GREY PLASTIC"]}
            />
            <mesh
              name="Cube077_15"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_15.geometry}
              material={materials["RUBBER MATERIAL"]}
            />
            <mesh
              name="Cube077_16"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_16.geometry}
              material={materials["SCREEN.001"]}
            />
            <mesh
              name="Cube077_17"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_17.geometry}
              material={materials["SD PANEL"]}
            />
            <mesh
              name="Cube077_18"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_18.geometry}
              material={materials["GLASS.001"]}
            />
            <mesh
              name="Cube077_19"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_19.geometry}
              material={materials["BACK LOGO"]}
            />
            <mesh
              name="Cube077_20"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_20.geometry}
              material={materials["METAL.001"]}
            />
            <mesh
              name="Cube077_21"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_21.geometry}
              material={materials["COOLER.001"]}
            />
            <mesh
              name="Cube077_22"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_22.geometry}
              material={materials["HOLDER.001"]}
            />
            <mesh
              name="Cube077_23"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_23.geometry}
              material={materials["RED JOY-CON PLASTIC"]}
            />
            <mesh
              name="Cube077_24"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_24.geometry}
              material={materials["RED SEPARATION"]}
            />
            <mesh
              name="Cube077_25"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_25.geometry}
              material={materials["INFRARED.001"]}
            />
            <mesh
              name="Cube077_26"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_26.geometry}
              material={materials["LETTER MATERIAL"]}
            />
            <mesh
              name="Cube077_27"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_27.geometry}
              material={materials["AROUND HOME BUTTON"]}
            />
            <mesh
              name="Cube077_28"
              castShadow
              receiveShadow
              geometry={nodes.Cube077_28.geometry}
              material={materials["SPEAKER.001"]}
            />
          </group>
          <mesh
            name="table-buuton"
            castShadow
            receiveShadow
            geometry={nodes["table-buuton"].geometry}
            material={materials.table_button}
            position={[2.78, 1.76, 1.64]}
            scale={[0.24, 0.08, 0.24]}
            userData={{ name: "table-buuton" }}
          />
          <group
            name="macbookkey"
            position={[0, 1.97, -0.26]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.48}
            userData={{ name: "macbook.key" }}
          >
            <mesh
              name="Body13001"
              castShadow
              receiveShadow
              geometry={nodes.Body13001.geometry}
              material={materials["Rubber_-_Soft"]}
            />
            <mesh
              name="Body13001_1"
              castShadow
              receiveShadow
              geometry={nodes.Body13001_1.geometry}
              material={materials["Bronze_-_Polished"]}
            />
            <mesh
              name="Body13001_2"
              castShadow
              receiveShadow
              geometry={nodes.Body13001_2.geometry}
              material={
                materials["Aluminum_-_Anodized_Glossy_(Grey)_keyboard.jpg"]
              }
            />
            <mesh
              name="Body13001_3"
              castShadow
              receiveShadow
              geometry={nodes.Body13001_3.geometry}
              material={materials["Steel_-_Satin"]}
            />
          </group>
          <mesh
            name="table002"
            castShadow
            receiveShadow
            geometry={nodes.table002.geometry}
            material={materials.wood}
            scale={[0.11, 1, 0.15]}
            userData={{ name: "table.002" }}
          />
          <group
            name="macbookmoniter"
            position={[0.09, 1.95, -0.76]}
            rotation={[-Math.PI, 0, 0]}
            scale={0.48}
            userData={{ name: "macbook.moniter" }}
            onClick={openMacbookAnimation}
          >
            <Html
              className="fixed left-0 top-0 h-full w-full"
              position={[-1.675, 0.0, -2.0]}
              rotation={[-1.57, 0, 0]}
              distanceFactor={1.5}
              transform
              occlude
            >
              <iframe
                className="h-[500px] w-[790px] rounded-2xl"
                src="https://www.youtube.com/embed/MVPTGNGiI-4"
              />
            </Html>
            <mesh
              name="Body13007"
              castShadow
              receiveShadow
              geometry={nodes.Body13007.geometry}
              material={materials["Acrylic_(Clear)"]}
            />
            <mesh
              name="Body13007_1"
              castShadow
              receiveShadow
              geometry={nodes.Body13007_1.geometry}
              material={materials["Aluminum_-_Anodized_Glossy_(Grey)"]}
            />
            <mesh
              name="Body13007_2"
              castShadow
              receiveShadow
              geometry={nodes.Body13007_2.geometry}
              material={materials["Plastic_-_Translucent_Matte_(Gray)"]}
            />
            <mesh
              name="Body13007_3"
              castShadow
              receiveShadow
              geometry={nodes.Body13007_3.geometry}
              material={materials["Glass_-_Heavy_Color"]}
            />
          </group>
          <mesh
            name="cup001"
            castShadow
            receiveShadow
            geometry={nodes.cup001.geometry}
            material={materials.マテリアル}
            position={[1.99, 1.88, 0.75]}
            rotation={[0, -0.48, 0]}
            scale={0.2}
            userData={{ name: "cup.001" }}
          />
        </group>
      </group>
    </>
  );
}

useGLTF.preload(
  `${isProd ? process.env.NEXT_PUBLIC_HOSTING_URL : ""}/assets/myRoom.gltf`
);
