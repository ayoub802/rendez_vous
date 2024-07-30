// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
// ** Third Party Imports
import 'react-credit-cards/es/styles-compiled.css'

import { Button, FormControlLabel, Switch, Typography } from '@mui/material'
import { useTheme } from '@mui/styles'
import { IoStatsChart } from 'react-icons/io5'
import { MdMailOutline } from 'react-icons/md'
import { useSettings } from 'src/@core/hooks/useSettings'

const BoxWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  [theme.breakpoints.down('md')]: {
    maxWidth: 400
  }
}))

const TabNotification = () => {
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
  const label = { inputProps: { 'aria-label': 'Switch demo' } }
  return (
    <Box
      sx={{
        mt: -5,
        ml: 5
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 5
          }}
        >
          <IoStatsChart size={20} color='#4c4e64d9' />
          <Typography variant='h6' sx={{ color: '#4c4e64d9' }}>
            Activité
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start',
            gap: 2,
            mb: 3,
            ml: 3
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    '& .Mui-checked+.MuiSwitch-track': {
                      backgroundColor: '#1273D1 !important'
                    },
                    '& .Mui-checked .MuiSwitch-thumb': {
                      backgroundColor: '#1273D1'
                    }
                  }}
                />
              }
              label='Envoyer un email de confirmation quand un rendez-vous est modifié'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    '& .Mui-checked+.MuiSwitch-track': {
                      backgroundColor: '#1273D1 !important'
                    },
                    '& .Mui-checked .MuiSwitch-thumb': {
                      backgroundColor: '#1273D1'
                    }
                  }}
                />
              }
              label='Envoyer un email de confirmation quand un rendez-vous est supprimé'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    '& .Mui-checked+.MuiSwitch-track': {
                      backgroundColor: '#1273D1 !important'
                    },
                    '& .Mui-checked .MuiSwitch-thumb': {
                      backgroundColor: '#1273D1'
                    }
                  }}
                />
              }
              label='Envoyer un email pour valider un rendez-vous'
            />
          </Box>
        </Box>
      </Box>

      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 5
          }}
        >
          <MdMailOutline size={25} color='#4c4e64d9' />
          <Typography variant='h6' sx={{ color: '#4c4e64d9' }}>
            Application
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            justifyContent: 'start',
            gap: 2,
            mb: 3,
            ml: 3
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    '& .Mui-checked+.MuiSwitch-track': {
                      backgroundColor: '#1273D1 !important'
                    },
                    '& .Mui-checked .MuiSwitch-thumb': {
                      backgroundColor: '#1273D1'
                    }
                  }}
                />
              }
              label='M’envoyer des communication des parentaires'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    '& .Mui-checked+.MuiSwitch-track': {
                      backgroundColor: '#1273D1 !important'
                    },
                    '& .Mui-checked .MuiSwitch-thumb': {
                      backgroundColor: '#1273D1'
                    }
                  }}
                />
              }
              label='M’informer des nouveautés'
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
              mb: 3
            }}
          >
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  sx={{
                    '& .Mui-checked+.MuiSwitch-track': {
                      backgroundColor: '#1273D1 !important'
                    },
                    '& .Mui-checked .MuiSwitch-thumb': {
                      backgroundColor: '#1273D1'
                    }
                  }}
                />
              }
              label='M’informer des professionnels proches de moi'
            />
          </Box>
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
          sauvegarder
        </Button>
        <Button variant='outlined' color='secondary'>
          Annuler
        </Button>
      </Box>
    </Box>
  )
}

export default TabNotification
