import Link from 'next/link'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import CustomButton from '../CustomButton'
import Header from '../header/Header'
import { motion } from 'framer-motion'
import Sphere from './Sphere'

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeInOut',
      staggerChildren: 0.4,
    },
  },
}

export default function Hero({ animationEnd }) {
  return (
    <Box sx={{ backgroundColor: '#0A192F' }} id='home'>
      {animationEnd && <Header />}
      <Container maxWidth='lg'>
        <Box sx={{ mt: { xs: 0, sm: -4 }, height: { xs: 350, sm: 500 } }}>
          <Sphere />
        </Box>

        {animationEnd && (
          <Box
            sx={{ textAlign: 'center', my: { xs: 10, sm: 0 }, zIndex: '10' }}
          >
            <motion.div
              initial='hidden'
              animate='visible'
              variants={headingVariants}
            >
              <motion.div variants={headingVariants}>
                <Typography
                  variant='h1'
                  color='#CCD6F6'
                  sx={{
                    fontWeight: { xs: '700' },
                    fontSize: {
                      xs: 'h4.fontSize',
                      sm: 'h3.fontSize',
                      lg: 'h2.fontSize',
                    },
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                  }}
                >
                  I&#39;m Milos Zivkovic
                </Typography>
              </motion.div>
              <motion.div variants={headingVariants}>
                <Typography
                  variant='h5'
                  sx={{
                    fontWeight: '700',
                  }}
                  color='#8892B0'
                  mt={1.5}
                  mb={2.5}
                >
                  Full Stack Web && AppDeveloper
                </Typography>
              </motion.div>
              <motion.div variants={headingVariants}>
                <Link href='#contact'>
                  <a>
                    <CustomButton text={"let's talk!"} />
                  </a>
                </Link>
              </motion.div>
            </motion.div>
          </Box>
        )}
      </Container>
    </Box>
  )
}
