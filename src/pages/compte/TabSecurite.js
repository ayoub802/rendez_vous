// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
// ** Third Party Imports
import 'react-credit-cards/es/styles-compiled.css'
import { MdOutlineLockOpen, MdVpnKey } from 'react-icons/md'

import {
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography
} from '@mui/material'
import { useTheme } from '@mui/styles'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'
import { useSettings } from 'src/@core/hooks/useSettings'

const BoxWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TabSecurite = () => {
  // ** States
  const [imgSrc, setImgSrc] = useState('/asstes/LandingPage/sucrite.png')
  const [showPassword, setShowPassword] = useState(false)
  const ImgStyled = styled('img')(({ theme }) => ({
    width: '90%',
    height: '90%',
    marginRight: theme.spacing(5),
    borderRadius: theme.shape.borderRadius
  }))
  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()

  return (
    <Box className='content-right'>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6}>
          <Box
            sx={{
              p: 7,
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'background.paper'
            }}
          >
            <BoxWrapper>
              <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 4
                  }}
                >
                  <FormControl fullWidth>
                    <InputLabel
                      htmlFor='auth-login-v2-password'
                      sx={{
                        color: 'grey', // Default label color
                        '&.Mui-focused': {
                          color: '#1273D1' // Label color on focus
                        }
                      }}
                    >
                      Mot de passe actuel
                    </InputLabel>
                    <OutlinedInput
                      label='Mot de passe actuel'
                      id='auth-login-v2-password'
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                            {/* <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} /> */}
                          </IconButton>
                        </InputAdornment>
                      }
                      sx={{
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1273D1' // Border color on focus
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1273D1' // Border color on hover
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'grey' // Default border color
                        }
                      }}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel
                      htmlFor='auth-login-v2-password'
                      sx={{
                        color: 'grey', // Default label color
                        '&.Mui-focused': {
                          color: '#1273D1' // Label color on focus
                        }
                      }}
                    >
                      Nouveau mot de passe
                    </InputLabel>
                    <OutlinedInput
                      label='Nouveau mot de passe'
                      id='auth-login-v2-password'
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                            {/* <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} /> */}
                          </IconButton>
                        </InputAdornment>
                      }
                      sx={{
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1273D1' // Border color on focus
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1273D1' // Border color on hover
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'grey' // Default border color
                        }
                      }}
                    />
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel
                      htmlFor='auth-login-v2-password'
                      sx={{
                        color: 'grey', // Default label color
                        '&.Mui-focused': {
                          color: '#1273D1' // Label color on focus
                        }
                      }}
                    >
                      Confirmez le mot de passe
                    </InputLabel>
                    <OutlinedInput
                      label='Confirmez le mot de passe'
                      id='auth-login-v2-password'
                      type={showPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <IoEyeOutline /> : <IoEyeOffOutline />}
                            {/* <Icon icon={showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} /> */}
                          </IconButton>
                        </InputAdornment>
                      }
                      sx={{
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1273D1' // Border color on focus
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: '#1273D1' // Border color on hover
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderColor: 'grey' // Default border color
                        }
                      }}
                    />
                  </FormControl>
                </Box>
              </form>
            </BoxWrapper>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <ImgStyled src={imgSrc} alt='Profile Pic' />
        </Grid>
      </Grid>
      <Divider />

      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 3,
            paddingInlineStart: 2,
            mt: 2
          }}
        >
          <MdVpnKey size={20} />
          <Typography
            sx={{
              color: '#4c4e64d9',
              fontSize: 24,
              fontWeight: 500
            }}
          >
            Authentication à deux facteurs
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
            textAlign: 'center'
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: 1,
              backgroundColor: '#ededff',
              mt: 5,
              // backgroundColor: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <MdOutlineLockOpen size={30} color={'#1273D1'} />
          </Box>
          <Box
            sx={{
              // backgroundColor: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 5
            }}
          >
            <Typography
              sx={{
                color: '#4c4e64d9',
                fontSize: 24,
                fontWeight: 500
              }}
            >
              L’authentication à deux facteurs n’est pas activé
            </Typography>
          </Box>
          <Box
            sx={{
              // backgroundColor: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 2
            }}
          >
            <Typography
              sx={{
                color: '#4c4e64ad',
                fontSize: 15.7,
                fontWeight: 500
              }}
            >
              L'authentification à deux facteurs ajoute une couche supplémentaire <br />
              de sécurité pour votre compte en exigeant plus qu'un simple <br />
              mot de passe pour vous connecter. En savoir plus.
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            gap: 2,
            mt: 5,
            mb: 3
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
      </Box>
    </Box>
  )
}

export default TabSecurite
