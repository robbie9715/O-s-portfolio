import * as React from 'react'
import Link from 'next/link'
import {
  Box,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material'

export default function SideNav({ sideNav, setSideNav, pages }) {
  const whenOpen = () => {
    return true
  }
  const list = (
    <Box
      sx={{
        width: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
      onClick={() => {
        setSideNav(!sideNav)
      }}
      onKeyDown={() => {
        setSideNav(!sideNav)
      }}
    >
      <List>
        {pages.map((page) => (
          <React.Fragment key={page}>
            <Link href={`#${page}`}>
              <ListItem button sx={{ width: 250, textAlign: 'center' }}>
                <ListItemText
                  sx={{
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.8)',
                    '&:hover': {
                      color: 'rgba(255,255,255,0.98)',
                    },
                    my: 3,
                  }}
                  primary={page}
                />
              </ListItem>
            </Link>
          </React.Fragment>
        ))}
        <a
          href='/Mazen-Elabd.pdf'
          alt='Full Resume'
          target='_blank'
          rel='noopener noreferrer'
        >
          <ListItem button sx={{ width: 250, textAlign: 'center' }}>
            <ListItemText
              sx={{
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.8)',
                '&:hover': {
                  color: 'rgba(255,255,255,0.98)',
                },
                my: 3,
              }}
              primary={'resume'}
            />
          </ListItem>
        </a>
      </List>
    </Box>
  )

  return (
    <SwipeableDrawer
      PaperProps={{
        sx: {
          backgroundColor: '#112240',
        },
      }}
      anchor='right'
      open={sideNav}
      onOpen={whenOpen}
      onClose={() => setSideNav(false)}
    >
      {list}
    </SwipeableDrawer>
  )
}
