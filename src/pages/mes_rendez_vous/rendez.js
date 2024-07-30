// ** MUI Imports
import { IconButton } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { HiOutlineDotsVertical } from 'react-icons/hi'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components
import styled from '@emotion/styled'
import CustomChip from 'src/@core/components/mui/chip'

const data = [
  {
    chipText: 'Business',
    chipColor: 'error',
    title: 'Avocat',
    src: '/images/avatars/4.png',
    subtitle: 'Aujourd’hui | 14h:00 - 15h00'
  },
  {
    chipText: 'Médical',
    chipColor: 'warning',
    title: 'Médecin',
    src: '/images/avatars/5.png',
    subtitle: '20 Juil | 10:00-10:30'
  },
  {
    chipText: 'Médical',
    chipColor: 'secondary',
    title: 'Dentiste',
    src: '/images/avatars/3.png',
    subtitle: '20 Juil | 12:30-13:00'
  },
  {
    chipText: 'Business',
    chipColor: 'error',
    title: 'Notaire',
    src: '/images/avatars/2.png',
    subtitle: '24 Jul | 10:00-12:00'
  },
  {
    chipColor: 'success',
    chipText: 'Médical',
    title: 'Cardiologue',
    src: '/images/avatars/8.png',
    subtitle: '27 Juil | 10:00-10:30'
  },
  {
    chipText: 'Personnel',
    chipColor: 'primary',
    title: 'Avocat',
    src: '/images/avatars/7.png',
    subtitle: '31 Ju1l | 16:00-17:30'
  }
]

const Rendez = () => {
  const [open, setOpen] = useState(false)
  const onSubmit = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const ImgStyled = styled('img')(({ theme }) => ({
    width: 120,
    height: 120,
    marginRight: theme.spacing(5),
    borderRadius: theme.shape.borderRadius
  }))

  const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center'
    }
  }))
  return (
    <Card sx={{ marginTop: 5 }}>
      <CardHeader
        title='Mes rendez-vous'
        // action={
        // }
      />
      <CardContent>
        {data.map((item, index) => {
          return (
            <Box
              key={item.title}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== data.length - 1 ? 6.5 : undefined
              }}
            >
              <Avatar src={item.src} variant='rounded' sx={{ mr: 3, width: 38, height: 38 }} />
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ mr: 2, display: 'flex', mb: 0.4, flexDirection: 'column' }}>
                  <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      '& svg': {
                        mr: 1.5,
                        color: 'text.secondary',
                        verticalAlign: 'middle'
                      }
                    }}
                  >
                    <Icon icon='mdi:calendar-blank-outline' fontSize='1rem' />
                    <Typography variant='caption'>{item.subtitle}</Typography>
                  </Box>
                </Box>
                <Box>
                  <CustomChip
                    skin='light'
                    size='small'
                    label={item.chipText}
                    color={item.chipColor}
                    sx={{ height: 20, fontSize: '0.75rem', fontWeight: 500 }}
                  />
                  <IconButton aria-haspopup='true' onClick={onSubmit}>
                    <HiOutlineDotsVertical />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>

      <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(6)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(4.5)} !important`]
          }}
        >
          <Typography
            variant='h5'
            color={'#4c4e64de'}
            sx={{
              fontWeight: 500,
              mb: 5,
              color: '#4c4e64de',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              fontSize: 14,
              width: '100%',
              justifyContent: 'center'
            }}
          >
            Détail du rendez-vous
          </Typography>
          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'start',
              flexDirection: 'column',
              justifyContent: 'start',
              mb: 6,
              mt: 10,
              '& svg': { mb: 6, color: 'warning.main' }
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <div className='flex flex-col items-start'>
                <Typography variant='h4' color={'#4c4e64ad'} sx={{ fontWeight: 600, mb: 0.5 }}>
                  Docteur John Doe
                </Typography>
                <Typography variant='h7' color={'#4c4e64ad'} sx={{ fontWeight: 600, mb: 1 }}>
                  Chirurgien dentiste
                </Typography>
                <Typography variant='h7' color={'#4c4e64ad'} sx={{ fontWeight: 500, mb: 2 }}>
                  Rendez-vous le 19/07/2024 à 15h00
                </Typography>
                <ButtonStyled
                  component='label'
                  variant='contained'
                  htmlFor='account-settings-upload-image'
                  sx={{
                    borderRadius: 1,
                    backgroundColor: '#1273D1',
                    '&:hover': { backgroundColor: '#1273D1' }
                  }}
                >
                  CONTACTER
                </ButtonStyled>
              </div>
            </Box>
          </Box>
          <Box
            sx={{
              marginBlockEnd: 6
            }}
          >
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Nom'
                  placeholder='Nom'
                  // value={formData.firstName}
                  // onChange={e => handleFormChange('firstName', e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'grey' // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'blue' // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1273D1' // Border color on focus
                      },
                      '& .MuiInputLabel-root': {
                        color: 'grey' // Default label color
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#1273D1' // Label color on focus
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      '&.Mui-focused': {
                        color: '#1273D1' // Label color on focus
                      },
                      '&.Mui-focused.Mui-error': {
                        color: 'red' // Label color on focus
                      }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Prenom'
                  placeholder='Prenom'
                  // value={formData.lastName}
                  // onChange={e => handleFormChange('lastName', e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'grey' // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'blue' // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1273D1' // Border color on focus
                      },
                      '& .MuiInputLabel-root': {
                        color: 'grey' // Default label color
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#1273D1' // Label color on focus
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      '&.Mui-focused': {
                        color: '#1273D1' // Label color on focus
                      },
                      '&.Mui-focused.Mui-error': {
                        color: 'red' // Label color on focus
                      }
                    }
                  }}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Téléphone'
                  placeholder='00.00.00.00'
                  // rows={2}
                  // multiline
                  // id='textarea-outlined-static'
                  // value={formData.lastName}
                  // onChange={e => handleFormChange('lastName', e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'grey' // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'blue' // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1273D1' // Border color on focus
                      },
                      '& .MuiInputLabel-root': {
                        color: 'grey' // Default label color
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#1273D1' // Label color on focus
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      '&.Mui-focused': {
                        color: '#1273D1' // Label color on focus
                      },
                      '&.Mui-focused.Mui-error': {
                        color: 'red' // Label color on focus
                      }
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Email'
                  placeholder='Email'
                  // value={formData.firstName}
                  // onChange={e => handleFormChange('firstName', e.target.value)}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'grey' // Default border color
                      },
                      '&:hover fieldset': {
                        borderColor: 'blue' // Border color on hover
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#1273D1' // Border color on focus
                      },
                      '& .MuiInputLabel-root': {
                        color: 'grey' // Default label color
                      },
                      '& .MuiInputLabel-root.Mui-focused': {
                        color: '#1273D1' // Label color on focus
                      }
                    }
                  }}
                  InputLabelProps={{
                    sx: {
                      '&.Mui-focused': {
                        color: '#1273D1' // Label color on focus
                      },
                      '&.Mui-focused.Mui-error': {
                        color: 'red' // Label color on focus
                      }
                    }
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'start',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button
            variant='contained'
            sx={{
              mr: 2,
              backgroundColor: '#FF2D55',
              textTransform: 'uppercase',
              '&:hover': { backgroundColor: '#FF2D55' }
            }}
          >
            supprimer
          </Button>
          <Button
            variant='contained'
            sx={{ mr: 2, backgroundColor: '#33B246', '&:hover': { backgroundColor: '#33B246' } }}
          >
            modifier
          </Button>
          <Button variant='outlined' color='secondary' onClick={handleClose}>
            ANNULER
          </Button>
        </DialogActions>
      </Dialog>
    </Card>
  )
}

export default Rendez
