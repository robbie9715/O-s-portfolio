import React from 'react'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import ProjectCard from './ProjectCard'
import { PROJECTS } from './ProjectData'

export default function Projects() {
  return (
    <Box sx={{ backgroundColor: '#0A192F' }}>
      <Container maxWidth='lg' id='projects' sx={{ py: 10 }}>
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
          Latest Projects
        </Typography>

        {PROJECTS.map((project, index) => (
          <React.Fragment key={index}>
            {index % 2 === 0 ? (
              <ProjectCard project={project} />
            ) : (
              <ProjectCard project={project} reverse />
            )}
          </React.Fragment>
        ))}
      </Container>
    </Box>
  )
}
