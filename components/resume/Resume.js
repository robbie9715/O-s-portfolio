import { Box } from '@mui/system'
import { Container, Typography } from '@mui/material'
import CustomButton from '../CustomButton'
import Hero from './hero/Hero'

export default function Resume() {
  return (
    <Box sx={{ backgroundColor: '#0A192F' }} id='resume'>
      <Container maxWidth='lg'>
        <Typography
          variant='h4'
          sx={{
            color: '#CCD6F6',
            pt: 5,
            pb: 2,
            textAlign: 'center',
            fontWeight: '700',
            textDecoration: 'underline',
          }}
        >
          Resume
        </Typography>
        <Hero />
        <Box sx={{ textAlign: 'center', pb: 10 }}>
          <Typography
            variant='h5'
            sx={{
              fontWeight: '700',
            }}
            color='#8892B0'
            mt={0}
            mb={1.5}
          >
            I&#39;m Currently Working as freelancer in Upwork.
          </Typography>
          <a
            href='/Milos.pdf'
            alt='Full Resume'
            target='_blank'
            rel='noopener noreferrer'
          >
            <CustomButton text='My Full Resume' />
          </a>
        </Box>
      </Container>
    </Box>
  )
}
