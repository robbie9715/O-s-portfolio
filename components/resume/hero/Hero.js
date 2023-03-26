import { Suspense } from 'react'
import { Container } from '@mui/material'
import { Box } from '@mui/system'
import { Canvas } from '@react-three/fiber'
import { Loader, OrbitControls } from '@react-three/drei'
import Model from './Model'

export default function Hero() {
  return (
    <Box sx={{ backgroundColor: '#0A192F' }} id='home'>
      <Container maxWidth='lg'>
        <Box
          sx={{
            height: 500,
          }}
        >
          <Canvas orthographic camera={{ zoom: 120, position: [0, 4, 4] }}>
            <ambientLight intensity={0.4} />
            <directionalLight position={[2.5, 8, 5]} intensity={1.5} />
            <pointLight
              position={[-10, 0, -20]}
              color='lightblue'
              intensity={2.5}
            />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <Suspense fallback={null}>
              <Model />
              <OrbitControls enableZoom={false} />
            </Suspense>
          </Canvas>
          <Loader 
            containerStyles={{
              position: 'relative',
              top: '-100%',
              backgroundColor: 'transparent'
            }} 
            innerStyles={{position: 'relative', top: '-100%'}} />
        </Box>
      </Container>
    </Box>
  )
}
