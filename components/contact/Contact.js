import { useState, useEffect } from 'react'
import { Box } from '@mui/system'
import { Container, Grid, Typography } from '@mui/material'
import CustomButton from '../CustomButton'
import Input from './Input'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const initialState = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation
    const hasEmptyFields = Object.values(form).some((element) => element === '')

    if (hasEmptyFields) {
      toast.error('Please fill in all fields')
    } else {
      const res = await toast
        .promise(
          fetch('/api/sendgrid', {
            body: JSON.stringify({
              email: form.email,
              firstName: form.firstName,
              lastName: form.lastName,
              phone: form.phone,
              message: form.message,
            }),
            headers: {
              'Content-Type': 'application/json',
            },
            method: 'POST',
          }),
          {
            pending: 'Sending your message',
            success: 'Sent successfully',
            error: 'Something went wrong',
          }
        )
        .then(setForm(initialState))
    }
  }

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  return (
    <Box sx={{ backgroundColor: '#0A192F', pb: 10 }} id='contact'>
      <ToastContainer />
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
          Let&#39;s Talk!
        </Typography>
        <Container maxWidth='md'>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2} mb={2}>
              <Input
                name='firstName'
                label='First Name'
                handleChange={handleChange}
                value={form.firstName}
                half
              />
              <Input
                name='lastName'
                label='Last Name'
                value={form.lastName}
                handleChange={handleChange}
                half
              />
              <Input
                name='email'
                label='Email Address'
                value={form.email}
                handleChange={handleChange}
                type='email'
                half
              />
              <Input
                name='phone'
                label='Phone Number'
                value={form.phone}
                handleChange={handleChange}
                half
              />
              <Input
                name='message'
                label='Message'
                value={form.message}
                multiline
                handleChange={handleChange}
              />
            </Grid>
            <Box
              component='button'
              type='submit'
              sx={{
                backgroundColor: 'transparent',
                border: 'none',
                display: 'block',
                mx: 'auto',
              }}
            >
              <CustomButton text='Send' dark />
            </Box>
          </form>
        </Container>
      </Container>
    </Box>
  )
}
