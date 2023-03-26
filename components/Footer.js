import { Container, Typography, Link as MUILink } from '@mui/material'
import { Box } from '@mui/system'
import { AiFillGithub, AiFillSkype, AiOutlineMail } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <Box sx={{ backgroundColor: '#0A192F', pt: 5, pb: 2 }} id='footer'>
      <Container maxWidth='md'>
        <Typography
          variant='body2'
          sx={{
            textAlign: 'center',
            color: '#8892B0',
            mb: 1,
          }}
        >
          &copy; {year} MILOS ZIVKOVIC
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <MUILink
            variant='h5'
            target='_blank'
            rel='noopener noreferrer'
            href={'https://github.com/devsirius44'}
            sx={{
              color: 'rgba(255,255,255,0.7)',
              '&:hover': {
                color: 'rgba(255,255,255,0.98)',
              },
            }}
          >
            <AiFillGithub />
          </MUILink>
          <MUILink
            variant='h5'
            target='_blank'
            rel='noopener noreferrer'
            href={'https://www.linkedin.com/in/mz0403'}
            sx={{
              mx: 1,
              color: 'rgba(255,255,255,0.7)',
              '&:hover': {
                color: 'rgba(255,255,255,0.98)',
              },
            }}
          >
            <AiOutlineLinkedin />
          </MUILink>
          <MUILink
            variant='h5'
            target='_blank'
            rel='noopener noreferrer'
            href={'live:.cid.6e0a226b99e7e4f1'}
            sx={{
              mx: 1,
              color: 'rgba(255,255,255,0.7)',
              '&:hover': {
                color: 'rgba(255,255,255,0.98)',
              },
            }}
          >
            <AiFillSkype />
          </MUILink>
        </Box>
      </Container>
    </Box>
  )
}
