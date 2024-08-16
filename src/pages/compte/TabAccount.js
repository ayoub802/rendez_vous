// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
// ** Third Party Imports
import 'react-credit-cards/es/styles-compiled.css'
import { useForm } from 'react-hook-form'
import { IoMdStar } from 'react-icons/io'

// ** Icon Imports

const initialData = {
  state: '',
  number: '',
  address: '',
  zipCode: '',
  lastName: 'Doe',
  currency: 'usd',
  firstName: 'John',
  language: 'arabic',
  timezone: 'gmt-12',
  country: 'australia',
  email: 'john.doe@example.com',
  organization: 'Pixinvent'
}

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

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabAccount = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [userInput, setUserInput] = useState('yes')
  const [formData, setFormData] = useState(initialData)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [secondDialogOpen, setSecondDialogOpen] = useState(false)
  const [thirdDialogOpen, setThirdDialogOpen] = useState(false)
  const [focus, setFocus] = useState()

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { checkbox: false } })
  const handleClose = () => setOpen(false)
  const handleSecondDialogClose = () => setSecondDialogOpen(false)
  const handleThirdDialogClose = () => setThirdDialogOpen(false)
  const onSubmit = () => setOpen(true)

  const handleConfirmation = value => {
    handleClose()
    setUserInput(value)
    setSecondDialogOpen(true)
  }
  const handleConfirmation2 = value => {
    handleSecondDialogClose()
    setUserInput(value)
    setThirdDialogOpen(true)
  }

  const handleInputImageChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
      if (reader.result !== null) {
        setInputValue(reader.result)
      }
    }
  }

  const handleInputImageReset = () => {
    setInputValue('')
    setImgSrc('/images/avatars/1.png')
  }

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <Grid container spacing={6}>
      {/* Account Details Card */}
      <Grid item xs={12}>
        <form>
          <CardContent sx={{ pt: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', my: 5 }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <div className='flex flex-col'>
                <div className='flex flex-row gap-3'>
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
                    charger une photo
                  </ButtonStyled>
                  <ButtonStyled
                    component='label'
                    variant='outlined'
                    htmlFor='account-settings-upload-image'
                    onClick={onSubmit}
                    sx={{
                      borderRadius: 1,
                      borderColor: '#FF4D49',
                      color: '#FF4D49',
                      '&:hover': { borderColor: '#FF4D49' }
                    }}
                  >
                    supprimer
                  </ButtonStyled>
                </div>

                <Typography variant='h8' color={'#4c4e64ad'} sx={{ fontWeight: 400, mt: 3, fontSize: 15 }}>
                  Format autorisé JPG, GIF ou PNG. Taille max de 800K
                </Typography>
              </div>
            </Box>
          </CardContent>
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Utilisateur'
                  placeholder='Utilisateur'
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
                  label='Nom'
                  placeholder='Nom'
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
                  label='Prénom'
                  placeholder='Prénom'
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
                  label='Mot de passe'
                  type='password'
                  placeholder='Mot de passe'
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
                  placeholder='Téléphone'
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

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'start',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingInline: 5,
                  paddingBlock: 3,
                  marginInline: 'auto',
                  marginInlineStart: 5,
                  mt: 5,
                  borderRadius: 1,
                  maxWidth: '100%',
                  backgroundColor: '#fff6e5'
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'start',
                    gap: 2
                  }}
                >
                  <IoMdStar color='#FF3B30' size={30} />

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'start',
                      gap: 1
                    }}
                  >
                    <Typography variant='h6' color={'#FDB528'} sx={{ fontWeight: 500, color: '#FDB528', fontSize: 14 }}>
                      Votre email n’est pas confirmé. Vérifiez votre boîte email.
                    </Typography>
                    <Typography
                      variant='h8'
                      color={'#FDB528'}
                      sx={{ fontWeight: 500, textTransform: 'capitalize', color: '#FDB528', fontSize: 14 }}
                    >
                      Envoyé à nouveau la confirmation
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
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
                    MODIFIER
                  </Button>
                  <Button variant='outlined' color='secondary'>
                    Annuler
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Grid>
    </Grid>
  )
}

export default TabAccount
