/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.4.1 src/boy3/scene.gltf 
Author: arselisa (https://sketchfab.com/arselisa)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/boy3-9bd951c3232c48c995e0d82fc41b9448
Title: Boy3
*/

import React from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'

export function BoyModel(props) {
  const group = React.useRef()
  const { scene } = useGLTF('model/boyModel.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials, animations } = useGraph(clone)
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="7dbd9cb420fd487dbba04bca6b7e3a9bfbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Object_4">
                  <primitive object={nodes._rootJoint} />
                  <group name="Object_6" position={[29.68, 0.248, -0.314]} rotation={[-Math.PI / 2, 0, 0]} scale={140} />
                  <group name="_mesh_0" rotation={[-Math.PI / 2, 0, 0]} scale={140} />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Material_0} skeleton={nodes.Object_7.skeleton} />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('model/boyModel.glb')