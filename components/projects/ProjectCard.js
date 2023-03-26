import { Grid, Paper, Typography, Link as MUILink } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'

const keyStr =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='

const triplet = (e1, e2, e3) =>
  keyStr.charAt(e1 >> 2) +
  keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
  keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
  keyStr.charAt(e3 & 63)

const rgbDataURL = (r, g, b) =>
  `data:image/gif;base64,R0lGODlhAQABAPAA${
    triplet(0, r, g) + triplet(b, 255, 255)
  }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`

export default function ProjectCard({ project, reverse }) {
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.7, ease: [0.17, 0.67, 0.83, 0.67] }}
      variants={{
        hidden: { opacity: 0, x: -120 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Grid container alignItems='center' pt={5}>
        <Grid
          item
          xs={12}
          md={6.5}
          sx={{
            order: { xs: '1', md: reverse ? '2' : '1' },
          }}
        >
          <Box
            sx={{
              opacity: '0.6',
              transition: '.5s ease',
              '&:hover': {
                opacity: '1',
              },
            }}
          >
            <a target='_blank' rel='noopener noreferrer' href={project.website}>
              <Image
                src={project.image}
                alt={project.title}
                placeholder='blur'
                blurDataURL={rgbDataURL(136, 146, 176)}
                width={842}
                height={405}
                priority
              />
            </a>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={5.5}
          sx={{ zIndex: '3', order: { xs: '2', md: reverse ? '1' : '2' } }}
        >
          <Paper
            elevation={5}
            sx={{
              backgroundColor: 'rgb(17, 34, 64)',
              ml: { xs: 0, md: reverse ? 0 : -8 },
              mr: { xs: 0, md: reverse ? -8 : 0 },
              textAlign: { xs: 'left', md: reverse ? 'left' : 'right' },
            }}
          >
            <Typography
              variant='h5'
              sx={{ pt: 1, mx: 1, color: '#CCD6F6', fontWeight: '600' }}
            >
              {project.title}
            </Typography>
            {project.technologies.map((technology, index) => (
              <Paper
                key={index}
                sx={{
                  display: 'inline-block',
                  p: 1,
                  backgroundColor: 'rgb(255,255,255, 0.1)',
                  m: 1,
                }}
              >
                <Typography variant='body2' color='rgb(255,255,255,0.8)'>
                  {technology}
                </Typography>
              </Paper>
            ))}
            <Box>
              <MUILink
                variant='h5'
                target='_blank'
                rel='noopener noreferrer'
                href={project.website}
                sx={{
                  mx: 1.5,
                  color: 'rgba(255,255,255,0.8)',
                  '&:hover': {
                    color: 'rgba(255,255,255,0.98)',
                  },
                }}
              >
                <FaExternalLinkAlt />
              </MUILink>
              <MUILink
                variant='h5'
                target='_blank'
                rel='noopener noreferrer'
                href={project.github}
                sx={{
                  mx: 1.5,
                  color: 'rgba(255,255,255,0.8)',
                  '&:hover': {
                    color: 'rgba(255,255,255,0.98)',
                  },
                }}
              >
              </MUILink>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  )
}
