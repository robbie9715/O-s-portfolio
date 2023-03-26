import { useState } from 'react'
import Link from 'next/link'
import { AppBar, Button, Container, IconButton, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu'
import Image from 'next/image'
import SideNav from './SideNav'
import { motion } from 'framer-motion'
const pages = ['home', 'projects', 'contact']

export default function Header() {
  const [sideNav, setSideNav] = useState(false)

  return (
    <AppBar
      position='static'
      elevation={0}
      sx={{ backgroundColor: 'transparent' }}
    >
      <Container maxWidth='lg'>
        <Toolbar>
          <Box
            sx={{
              fontWeight: 'bold',
              flexGrow: 1,
              opacity: '.8',
            }}
          >
            <motion.div
              initial='hidden'
              animate='visible'
              transition={{
                duration: 0.15,
                ease: 'easeInOut',
              }}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Image
                src={'/mz.png'}
                alt='M.Z. logo'
                width={79.6}
                height={36}
                priority
              />
            </motion.div>
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
            }}
          >
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={() => {
                setSideNav(true)
              }}
              sx={{
                color: 'rgba(255,255,255,0.8)',
                '&:hover': {
                  color: 'rgba(255,255,255,0.98)',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                },
                '&:active': {
                  color: 'rgba(255,255,255,1)',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            {sideNav && (
              <SideNav
                sideNav={sideNav}
                setSideNav={setSideNav}
                pages={pages}
              />
            )}
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <motion.div
                initial='hidden'
                animate='visible'
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                  delay: index * 0.2,
                }}
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                key={page}
              >
                <Link href={`#${page}`}>
                  <Button
                    sx={{
                      my: 2,
                      display: 'block',
                      color: 'rgba(255,255,255,0.8)',
                      '&:hover': {
                        color: 'rgba(255,255,255,0.98)',
                      },
                      '&:active': {
                        color: 'rgba(255,255,255,1)',
                      },
                    }}
                  >
                    {page}
                  </Button>
                </Link>
              </motion.div>
            ))}
            <a
              href='/Milos.pdf'
              alt='Full Resume'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button
                sx={{
                  my: 2,
                  display: 'block',
                  color: 'rgba(255,255,255,0.8)',
                  '&:hover': {
                    color: 'rgba(255,255,255,0.98)',
                  },
                  '&:active': {
                    color: 'rgba(255,255,255,1)',
                  },
                }}
              >
                resume
              </Button>
            </a>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
