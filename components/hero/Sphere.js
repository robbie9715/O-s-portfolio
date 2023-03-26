import * as THREE from 'three'
import { useRef, useState, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import { skills } from './Skills'
import { Typography } from '@mui/material'

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)

  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)

  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])

  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion)
    ref.current.material.color.lerp(
      color.set(hovered ? '#8892B0' : '#CCD6F6'),
      0.1
    )
  })
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
    >
      {children}
    </Text>
  )
}

function Cloud({ count = 4, radius = 30 }) {
  const words = useMemo(() => {
    const temp = []
    const spherical = new THREE.Spherical()
    const phiSpan = Math.PI / (count + 1)
    const thetaSpan = (Math.PI * 2) / count
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push([
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j)
          ),
          'placeholder',
        ])
    return temp
  }, [count, radius])
  return words.map(([pos, word], index) => (
    <Word key={index} position={pos}>
      {skills[index]}{' '}
    </Word>
  ))
}

export default function Sphere() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach='fog' args={['#202025', 0, 80]} />
      <Cloud count={8} radius={20} />
      <OrbitControls autoRotate enableDamping enableZoom={false} />
    </Canvas>
  )
}
