import { Grid, TextField } from '@mui/material'
import { styled } from '@mui/material/styles'

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#8892B0',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#8892B0',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#CCD6F6',
    },
    '&:hover fieldset': {
      borderColor: '#8892B0',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#8892B0',
    },
  },
})

export default function Input({
  name,
  handleChange,
  label,
  half,
  type,
  value,
  multiline,
}) {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <CssTextField
        name={name}
        onChange={handleChange}
        variant='outlined'
        value={value}
        required
        fullWidth
        label={label}
        type={type}
        multiline={multiline}
        rows={multiline ? 4 : undefined}
        InputLabelProps={{
          style: { color: '#CCD6F6' },
        }}
        InputProps={{
          style: { color: 'white' },
        }}
      />
    </Grid>
  )
}
