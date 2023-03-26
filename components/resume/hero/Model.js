import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

export default function Model({ ...props }) {
  const group = useRef()
  const [active, setActive] = useState(0)
  const [hovered, setHovered] = useState(false)

  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)

  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])

  useFrame(() => (group.current.rotation.y += 0.01))

  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)

  const { spring } = useSpring({
    spring: active,
    config: { mass: 4, tension: 400, friction: 70, precision: 0.00001 },
  })

  const rotation = spring.to([0, 1], [0, Math.PI * 4])
  return (
    <a.group
      ref={group}
      {...props}
      onPointerOver={over}
      onPointerOut={out}
      dispose={null}
      scale={1.2}
      rotation-y={rotation}
      onClick={() => setActive(Number(!active))}
    >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.72, 1.01, 0.66]} rotation={[Math.PI / 2, 0, 0]}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.material}
            />
          </group>
          <group position={[-0.72, 1.01, 0.76]} scale={0.09}>
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.material_0}
            />
          </group>
          <group position={[0.05, 0.93, 0.3]} scale={0.6}>
            <mesh
              geometry={nodes.Object_8.geometry}
              material={nodes.Object_8.material}
            />
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials.material_3}
            />
          </group>
          <group position={[0.05, 0, 0.57]} scale={0.6}>
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials.WOOD}
            />
          </group>
          <group position={[-0.09, 0.95, 0.73]} scale={0.6}>
            <mesh
              geometry={nodes.Object_13.geometry}
              material={nodes.Object_13.material}
            />
          </group>
          <group position={[0.42, 0.93, 0.83]}>
            <mesh
              geometry={nodes.Object_15.geometry}
              material={nodes.Object_15.material}
            />
          </group>
          <group position={[0.01, 0.44, 1.21]} scale={[0.03, 0.25, 0.03]}>
            <mesh
              geometry={nodes.Object_17.geometry}
              material={nodes.Object_17.material}
            />
            <mesh
              geometry={nodes.Object_18.geometry}
              material={nodes.Object_18.material}
            />
          </group>
          <group position={[0.01, 0.44, 1.21]} scale={[0.03, 0.25, 0.03]}>
            <mesh
              geometry={nodes.Object_20.geometry}
              material={nodes.Object_20.material}
            />
          </group>
          <group position={[0.01, 0.44, 1.21]} scale={[0.03, 0.25, 0.03]}>
            <mesh
              geometry={nodes.Object_22.geometry}
              material={nodes.Object_22.material}
            />
          </group>
          <group position={[0.81, 1.24, 0.49]} scale={0.6}>
            <mesh
              geometry={nodes.Object_24.geometry}
              material={materials.material_6}
            />
          </group>
          <group
            position={[0, -0.2, 1.22]}
            rotation={[-Math.PI, 0, -Math.PI]}
            scale={[0.01, 0.01, 0.01]}
          >
            <group position={[0, 92.41, -1.67]} rotation={[0, -1.57, 0]}>
              <primitive object={nodes.GLTF_created_0_rootJoint} />
              <skinnedMesh
                geometry={nodes.Object_30.geometry}
                material={nodes.Object_30.material}
                skeleton={nodes.Object_30.skeleton}
              />
              <skinnedMesh
                geometry={nodes.Object_31.geometry}
                material={nodes.Object_31.material}
                skeleton={nodes.Object_31.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </a.group>
  )
}

useGLTF.preload('/scene.gltf')
