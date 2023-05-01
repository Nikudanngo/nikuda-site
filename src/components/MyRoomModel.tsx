/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from "three";
import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

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
    table: THREE.Mesh;
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
    Body13007: THREE.Mesh;
    Body13007_1: THREE.Mesh;
    Body13007_2: THREE.Mesh;
    Body13007_3: THREE.Mesh;
    table002: THREE.Mesh;
    cup001: THREE.Mesh;
    floor: THREE.Mesh;
  };
  materials: {
    ["Lentes.001"]: THREE.MeshStandardMaterial;
    ["Power_Botton__0.001"]: THREE.MeshStandardMaterial;
    ["OnOff.001"]: THREE.MeshStandardMaterial;
    ["Negro.001"]: THREE.MeshStandardMaterial;
    ["Carcaza.001"]: THREE.MeshStandardMaterial;
    ["マテリアル.003"]: THREE.MeshStandardMaterial;
    moniter: THREE.MeshStandardMaterial;
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
    ["Acrylic_(Clear)"]: THREE.MeshStandardMaterial;
    ["Aluminum_-_Anodized_Glossy_(Grey)"]: THREE.MeshStandardMaterial;
    ["Plastic_-_Translucent_Matte_(Gray)"]: THREE.MeshStandardMaterial;
    ["Glass_-_Heavy_Color"]: THREE.MeshStandardMaterial;
    wood: THREE.MeshStandardMaterial;
    マテリアル: THREE.MeshStandardMaterial;
    floor: THREE.MeshStandardMaterial;
  };
};

type ActionName = "macbook.007Action";
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

interface MyRoomModelProps {
  onLoaded?: () => void;
}

export function MyRoomModel(props: MyRoomModelProps) {
  const group = useRef<THREE.Group>();
  const { nodes, materials, animations } = useGLTF(
    "/assets/myRoom.gltf"
  ) as GLTFResult;
  const { actions } = useAnimations<GLTFActions>(animations, group);
  const handleMacbookClick = () => {
    actions["macbook.007Action"].setLoop(THREE.LoopOnce).play();
  };

  useEffect(() => {
    const { onLoaded } = props;
    if (onLoaded) {
      onLoaded();
    }
  }, [props]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Sketchfab_model"
          position={[-2.71, 2.15, 0.59]}
          rotation={[-Math.PI / 2, 0, 0.64]}
          scale={0.33}
          userData={{ name: "Sketchfab_model" }}
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
                    geometry={nodes.Lente_Lentes_0001.geometry}
                    material={materials["Lentes.001"]}
                  />
                  <mesh
                    name="Lente_Lentes_0001_1"
                    geometry={nodes.Lente_Lentes_0001_1.geometry}
                    material={materials["Power_Botton__0.001"]}
                  />
                  <mesh
                    name="Lente_Lentes_0001_2"
                    geometry={nodes.Lente_Lentes_0001_2.geometry}
                    material={materials["OnOff.001"]}
                  />
                  <mesh
                    name="Lente_Lentes_0001_3"
                    geometry={nodes.Lente_Lentes_0001_3.geometry}
                    material={materials["Negro.001"]}
                  />
                  <mesh
                    name="Lente_Lentes_0001_4"
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
                  geometry={nodes["Volumen_+_-__0"].geometry}
                  material={materials["Power_Botton__0.001"]}
                  userData={{ name: "Volumen + -__0" }}
                />
              </group>
            </group>
          </group>
        </group>
        <mesh
          name="table"
          geometry={nodes.table.geometry}
          material={materials["マテリアル.003"]}
          scale={[0.11, 1, 0.15]}
          userData={{ name: "table" }}
        />
        <mesh
          name="monitor001"
          geometry={nodes.monitor001.geometry}
          material={materials.moniter}
          position={[-0.24, 3.74, -1.26]}
          scale={[1.31, 0.74, 0.04]}
          userData={{ name: "monitor.001" }}
        />
        <mesh
          name="arm"
          geometry={nodes.arm.geometry}
          material={materials.moniter}
          position={[1.25, 1.92, -1.64]}
          scale={[0.35, 0.03, 0.19]}
          userData={{ name: "arm" }}
        />
        <mesh
          name="monitor002"
          geometry={nodes.monitor002.geometry}
          material={materials.moniter}
          position={[2.46, 3.69, -0.75]}
          rotation={[0, -0.37, 0]}
          scale={[1.31, 0.74, 0.04]}
          userData={{ name: "monitor.002" }}
        />
        <mesh
          name="cup"
          geometry={nodes.cup.geometry}
          material={materials["マテリアル.003"]}
          position={[1.99, 1.88, 0.75]}
          rotation={[0, -0.48, 0]}
          scale={0.2}
          userData={{ name: "cup" }}
        />
        <mesh
          name="table001"
          geometry={nodes.table001.geometry}
          material={materials["マテリアル.003"]}
          scale={[0.11, 1, 0.15]}
          userData={{ name: "table.001" }}
        />
        <mesh
          name="cup002"
          geometry={nodes.cup002.geometry}
          material={materials.coffee}
          position={[1.99, 1.88, 0.75]}
          rotation={[0, -0.48, 0]}
          scale={0.2}
          userData={{ name: "cup.002" }}
        />
        <group
          name="JOY-CON_L001"
          position={[-2.23, 2.23, -0.46]}
          rotation={[0, -0.61, -0.01]}
          scale={[0.42, 0.38, 0.42]}
          userData={{ name: "JOY-CON L.001" }}
        >
          <mesh
            name="Cube077"
            geometry={nodes.Cube077.geometry}
            material={materials["BLUE JOY-CON PLASTIC"]}
          />
          <mesh
            name="Cube077_1"
            geometry={nodes.Cube077_1.geometry}
            material={materials["PLASTIC SHINY"]}
          />
          <mesh
            name="Cube077_2"
            geometry={nodes.Cube077_2.geometry}
            material={materials["BLUE PLASTIC SHINY"]}
          />
          <mesh
            name="Cube077_3"
            geometry={nodes.Cube077_3.geometry}
            material={materials["LED.001"]}
          />
          <mesh
            name="Cube077_4"
            geometry={nodes.Cube077_4.geometry}
            material={materials["PLASTIC.001"]}
          />
          <mesh
            name="Cube077_5"
            geometry={nodes.Cube077_5.geometry}
            material={materials["SCREWS.001"]}
          />
          <mesh
            name="Cube077_6"
            geometry={nodes.Cube077_6.geometry}
            material={materials["BLUE SEPARATION"]}
          />
          <mesh
            name="Cube077_7"
            geometry={nodes.Cube077_7.geometry}
            material={materials["DOCK PLASTIC"]}
          />
          <mesh
            name="Cube077_8"
            geometry={nodes.Cube077_8.geometry}
            material={materials["FRONT DOCK LOGO"]}
          />
          <mesh
            name="Cube077_9"
            geometry={nodes.Cube077_9.geometry}
            material={materials["DOCK LED"]}
          />
          <mesh
            name="Cube077_10"
            geometry={nodes.Cube077_10.geometry}
            material={materials["SD METAL"]}
          />
          <mesh
            name="Cube077_11"
            geometry={nodes.Cube077_11.geometry}
            material={materials["USB-C "]}
          />
          <mesh
            name="Cube077_12"
            geometry={nodes.Cube077_12.geometry}
            material={materials["USB 3.0"]}
          />
          <mesh
            name="Cube077_13"
            geometry={nodes.Cube077_13.geometry}
            material={materials["STAND MATERIAL"]}
          />
          <mesh
            name="Cube077_14"
            geometry={nodes.Cube077_14.geometry}
            material={materials["GREY PLASTIC"]}
          />
          <mesh
            name="Cube077_15"
            geometry={nodes.Cube077_15.geometry}
            material={materials["RUBBER MATERIAL"]}
          />
          <mesh
            name="Cube077_16"
            geometry={nodes.Cube077_16.geometry}
            material={materials["SCREEN.001"]}
          />
          <mesh
            name="Cube077_17"
            geometry={nodes.Cube077_17.geometry}
            material={materials["SD PANEL"]}
          />
          <mesh
            name="Cube077_18"
            geometry={nodes.Cube077_18.geometry}
            material={materials["GLASS.001"]}
          />
          <mesh
            name="Cube077_19"
            geometry={nodes.Cube077_19.geometry}
            material={materials["BACK LOGO"]}
          />
          <mesh
            name="Cube077_20"
            geometry={nodes.Cube077_20.geometry}
            material={materials["METAL.001"]}
          />
          <mesh
            name="Cube077_21"
            geometry={nodes.Cube077_21.geometry}
            material={materials["COOLER.001"]}
          />
          <mesh
            name="Cube077_22"
            geometry={nodes.Cube077_22.geometry}
            material={materials["HOLDER.001"]}
          />
          <mesh
            name="Cube077_23"
            geometry={nodes.Cube077_23.geometry}
            material={materials["RED JOY-CON PLASTIC"]}
          />
          <mesh
            name="Cube077_24"
            geometry={nodes.Cube077_24.geometry}
            material={materials["RED SEPARATION"]}
          />
          <mesh
            name="Cube077_25"
            geometry={nodes.Cube077_25.geometry}
            material={materials["INFRARED.001"]}
          />
          <mesh
            name="Cube077_26"
            geometry={nodes.Cube077_26.geometry}
            material={materials["LETTER MATERIAL"]}
          />
          <mesh
            name="Cube077_27"
            geometry={nodes.Cube077_27.geometry}
            material={materials["AROUND HOME BUTTON"]}
          />
          <mesh
            name="Cube077_28"
            geometry={nodes.Cube077_28.geometry}
            material={materials["SPEAKER.001"]}
          />
        </group>
        <mesh
          name="table-buuton"
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
            geometry={nodes.Body13001.geometry}
            material={materials["Rubber_-_Soft"]}
          />
          <mesh
            name="Body13001_1"
            geometry={nodes.Body13001_1.geometry}
            material={materials["Bronze_-_Polished"]}
          />
          <mesh
            name="Body13001_2"
            geometry={nodes.Body13001_2.geometry}
            material={
              materials["Aluminum_-_Anodized_Glossy_(Grey)_keyboard.jpg"]
            }
          />
          <mesh
            name="Body13001_3"
            geometry={nodes.Body13001_3.geometry}
            material={materials["Steel_-_Satin"]}
          />
        </group>
        <group
          name="macbookmoniter"
          position={[0.09, 1.95, -0.76]}
          rotation={[-Math.PI, 0, 0]}
          scale={0.48}
          userData={{ name: "macbook.moniter" }}
          onClick={handleMacbookClick}
        >
          <mesh
            name="Body13007"
            geometry={nodes.Body13007.geometry}
            material={materials["Acrylic_(Clear)"]}
          />
          <mesh
            name="Body13007_1"
            geometry={nodes.Body13007_1.geometry}
            material={materials["Aluminum_-_Anodized_Glossy_(Grey)"]}
          />
          <mesh
            name="Body13007_2"
            geometry={nodes.Body13007_2.geometry}
            material={materials["Plastic_-_Translucent_Matte_(Gray)"]}
          />
          <mesh
            name="Body13007_3"
            geometry={nodes.Body13007_3.geometry}
            material={materials["Glass_-_Heavy_Color"]}
          />
        </group>
        <mesh
          name="table002"
          geometry={nodes.table002.geometry}
          material={materials.wood}
          scale={[0.11, 1, 0.15]}
          userData={{ name: "table.002" }}
        />
        <mesh
          name="cup001"
          geometry={nodes.cup001.geometry}
          material={materials.マテリアル}
          position={[1.99, 1.88, 0.75]}
          rotation={[0, -0.48, 0]}
          scale={0.2}
          userData={{ name: "cup.001" }}
        />
        <mesh
          name="floor"
          geometry={nodes.floor.geometry}
          material={materials.floor}
          position={[0, 0, 2.56]}
          rotation={[0, Math.PI / 2, 0]}
          scale={5.55}
          userData={{ name: "floor" }}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/myRoom.gltf");
