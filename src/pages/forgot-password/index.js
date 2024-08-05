// ** Next Import
import Link from 'next/link'

// ** MUI Components
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Configs
import themeConfig from 'src/configs/themeConfig'

// ** Layout Import
import BlankLayout from 'src/@core/layouts/BlankLayout'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Demo Imports
import FooterIllustrationsV2 from 'src/views/pages/auth/FooterIllustrationsV2'

// Styled Components
const ForgotPasswordIllustrationWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(20),
  paddingRight: '0 !important',
  [theme.breakpoints.down('lg')]: {
    padding: theme.spacing(10)
  }
}))

const ForgotPasswordIllustration = styled('img')(({ theme }) => ({
  maxWidth: '100%',
  [theme.breakpoints.down('xl')]: {
    maxWidth: '38rem'
  },
  [theme.breakpoints.down('lg')]: {
    maxWidth: '30rem'
  }
}))

const RightWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: 400
  },
  [theme.breakpoints.up('lg')]: {
    maxWidth: 450
  }
}))

const BoxWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TypographyStyled = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  letterSpacing: '0.18px',
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.down('md')]: { marginTop: theme.spacing(8) }
}))

const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  '& svg': { mr: 1.5 },
  alignItems: 'center',
  textDecoration: 'none',
  justifyContent: 'center',
  color: theme.palette.primary.main
}))

const ForgotPassword = () => {
  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()

  // ** Vars
  const { skin } = settings
  const hidden = useMediaQuery(theme.breakpoints.down('md'))

  const imageSource =
    skin === 'bordered' ? 'auth-v2-forgot-password-illustration-bordered' : 'auth-v2-forgot-password-illustration'

  return (
    <Box className='content-right'>
      {!hidden ? (
        <Box sx={{ flex: 1, position: 'relative' }}>
          <ForgotPasswordIllustrationWrapper>
            <ForgotPasswordIllustration
              alt='forgot-password-illustration'
              src={`/asstes/LandingPage/LoginBanner.png`}
            />
          </ForgotPasswordIllustrationWrapper>
          <FooterIllustrationsV2 />
        </Box>
      ) : null}
      <RightWrapper sx={skin === 'bordered' && !hidden ? { borderLeft: `1px solid ${theme.palette.divider}` } : {}}>
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
            <Box sx={{ mb: 6 }}>
              <TypographyStyled variant='h5'>Mot de passe oublié ? 🔒</TypographyStyled>
              <Typography variant='body2'>
                Entrez votre email et nous vous enverrons dans quelques instants les instructions pour renouveller votre
                email
              </Typography>
            </Box>
            <form noValidate autoComplete='off' onSubmit={e => e.preventDefault()}>
              <TextField
                autoFocus
                type='email'
                label='Email'
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
                  },
                  mb: 4,
                  display: 'flex'
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
              <Button
                fullWidth
                size='large'
                type='submit'
                variant='contained'
                sx={{ mb: 5.25, backgroundColor: '#1273D1', '&:hover ': { backgroundColor: '#1273D1' } }}
              >
                ENVOYER
              </Button>
              <Typography sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1273D1' }}>
                <LinkStyled href='/login' sx={{ color: '#1273D1' }}>
                  <Icon icon='mdi:chevron-left' fontSize='2rem' />
                  <span className='text-[#1273D1]'>Retour à la connexion</span>
                </LinkStyled>
              </Typography>
            </form>
          </BoxWrapper>
        </Box>
      </RightWrapper>
    </Box>
  )
}
ForgotPassword.guestGuard = true
ForgotPassword.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default ForgotPassword
