// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Hooks
import { Button, Card, CardContent, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { FiClock } from 'react-icons/fi'
import { IoIosArrowUp, IoMdStar } from 'react-icons/io'

const EditCalendar = () => {
  const [value, setValue] = useState('')

  const handleChange = event => {
    const { value } = event.target
    setValue(value)
  }

  const SelectDate = () => {
    return (
      <FormControl sx={{ width: '100%' }}>
        <InputLabel
          id='demo-simple-select-outlined-label'
          sx={{
            color: 'grey', // Default label color
            '&.Mui-focused': {
              color: '#1273D1' // Label color on focus
            },
            '&.Mui-error': {
              color: 'red' // Label color on error
            }
          }}
        >
          Jour
        </InputLabel>
        <Select
          label='Jour'
          defaultValue=''
          id='demo-simple-select-outlined'
          labelId='demo-simple-select-outlined-label'
          sx={{
            '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1273D1'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1273D1'
            }
          }}
        >
          <MenuItem value={'lundi'}>Lundi</MenuItem>
          <MenuItem value={'mardi'}>Mardi</MenuItem>
          <MenuItem value={'mercredi'}>Mercredi</MenuItem>
          <MenuItem value={'jeudi'}>Jeudi</MenuItem>
          <MenuItem value={'vendredi'}>Vendredi</MenuItem>
          <MenuItem value={'samedi'}>Samedi</MenuItem>
          <MenuItem value={'dimanche'}>Dimanche</MenuItem>
        </Select>
      </FormControl>
    )
  }
  const SelectDisponibilite = () => {
    return (
      <FormControl sx={{ width: '100%' }}>
        <InputLabel
          id='demo-simple-select-outlined-label'
          sx={{
            color: 'grey', // Default label color
            '&.Mui-focused': {
              color: '#1273D1' // Label color on focus
            },
            '&.Mui-error': {
              color: 'red' // Label color on error
            }
          }}
        >
          Disponibiltés
        </InputLabel>
        <Select
          label='Disponibiltés'
          defaultValue=''
          id='demo-simple-select-outlined'
          labelId='demo-simple-select-outlined-label'
          value={value}
          onChange={handleChange}
          sx={{
            '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1273D1'
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#1273D1'
            }
          }}
        >
          <MenuItem value={'matin'}>Matin</MenuItem>
          <MenuItem value={'après-midi'}>Après midi</MenuItem>
          <MenuItem value={'continue'}>Continue</MenuItem>
          <MenuItem value={'indisponible'}>Indisponible</MenuItem>
        </Select>
      </FormControl>
    )
  }

  const getHoraire = () => {
    if (value == 'matin') {
      return '8h30 - 13h30'
    } else if (value == 'après-midi') {
      return '13h30 - 19h30'
    } else if (value == 'continue') {
      return '8h30 - 19h30'
    } else {
      return 'Plages horaires'
    }
  }
  const SelectHoraires = () => {
    return (
      <FormControl sx={{ width: '100%' }}>
        <Box
          sx={{
            backgroundColor: '#f6f6f7',
            padding: 2,
            paddingInline: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 55
          }}
        >
          <FiClock size={20} color='#4c4e648a' />
          <Typography sx={{ fontSize: 16, color: '#4c4e64de' }}>{getHoraire()}</Typography>
          <IoIosArrowUp size={20} color='#4c4e648a' />
        </Box>
      </FormControl>
    )
  }

  return (
    <>
      <Grid container spacing={6} sx={{ ml: -2, mt: 3, display: 'block' }}>
        <Card sx={{ width: '100%' }}>
          <Box
            sx={{
              backgroundColor: '#fff',
              width: '100%',
              borderRadius: 2
            }}
          >
            <CardContent sx={{ pt: 0 }}>
              <Grid container spacing={6} sx={{ mt: 1 }}>
                <Grid item xs={12} md={4.5}>
                  <SelectDate />
                </Grid>
                <Grid item xs={12} md={4.5}>
                  <SelectDisponibilite />
                </Grid>
                <Grid item xs={12} md={3}>
                  <SelectHoraires />
                </Grid>
              </Grid>
              <Grid container spacing={6} sx={{ mt: 1 }}>
                <Grid item xs={12} md={4.5}>
                  <SelectDate />
                </Grid>
                <Grid item xs={12} md={4.5}>
                  <SelectDisponibilite />
                </Grid>
                <Grid item xs={12} md={3}>
                  <SelectHoraires />
                </Grid>
              </Grid>
              <Grid container spacing={6} sx={{ mt: 1 }}>
                <Grid item xs={12} md={4.5}>
                  <SelectDate />
                </Grid>
                <Grid item xs={12} md={4.5}>
                  <SelectDisponibilite />
                </Grid>
                <Grid item xs={12} md={3}>
                  <SelectHoraires />
                </Grid>
              </Grid>
              <Grid container spacing={6} sx={{ mt: 1 }}>
                <Grid item xs={12} md={4.5}>
                  <SelectDate />
                </Grid>
                <Grid item xs={12} md={4.5}>
                  <SelectDisponibilite />
                </Grid>
                <Grid item xs={12} md={3}>
                  <SelectHoraires />
                </Grid>
              </Grid>
              <Grid container spacing={6} sx={{ mt: 1 }}>
                <Grid item xs={12} md={4.5}>
                  <SelectDate />
                </Grid>
                <Grid item xs={12} md={4.5}>
                  <SelectDisponibilite />
                </Grid>
                <Grid item xs={12} md={3}>
                  <SelectHoraires />
                </Grid>
              </Grid>
              <Grid container spacing={6} sx={{ mt: 1 }}>
                <Grid item xs={12} md={4.5}>
                  <SelectDate />
                </Grid>
                <Grid item xs={12} md={4.5}>
                  <SelectDisponibilite />
                </Grid>
                <Grid item xs={12} md={3}>
                  <SelectHoraires />
                </Grid>
              </Grid>
              <Grid container spacing={6} sx={{ mt: 1 }}>
                <Grid item xs={12} md={4.5}>
                  <SelectDate />
                </Grid>
                <Grid item xs={12} md={4.5}>
                  <SelectDisponibilite />
                </Grid>
                <Grid item xs={12} md={3}>
                  <SelectHoraires />
                </Grid>
              </Grid>
              <Grid container spacing={6} sx={{ mt: 1 }}>
                <Grid item xs={12} md={4.5}>
                  <SelectDate />
                </Grid>
                <Grid item xs={12} md={4.5}>
                  <SelectDisponibilite />
                </Grid>
                <Grid item xs={12} md={3}>
                  <SelectHoraires />
                </Grid>
              </Grid>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingInline: 5,
                  paddingBlock: 3,
                  marginInline: 'auto',
                  mt: 5,
                  mb: 5,
                  borderRadius: 1,
                  maxWidth: '100%',
                  backgroundColor: '#fff6e5'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2
                  }}
                >
                  <IoMdStar color='#FF3B30' size={30} />

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <Typography variant='h7' color={'#FDB528'} sx={{ fontWeight: 500, color: '#FDB528', fontSize: 16 }}>
                      Attention : Une fois enregistrée, vos disponibiltés seront visibles par les utilisateurs
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 5,
                    pl: 5
                  }}
                >
                  <IoMdStar color='#FF3B30' size={24} />
                </Box>
              </Box>

              <Grid item xs={12}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'start',
                    gap: 2
                  }}
                >
                  <Button
                    variant='contained'
                    sx={{
                      borderRadius: 1,
                      mr: 3,
                      backgroundColor: '#1273D1',
                      '&:hover': { backgroundColor: '#1273D1' }
                    }}
                  >
                    sauvegarder
                  </Button>
                  <Button variant='outlined' color='secondary'>
                    Annuler
                  </Button>
                </Box>
              </Grid>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    </>
  )
}

export default EditCalendar
