// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import Image from 'next/image'
import { Button, Card, CardContent, Typography } from '@mui/material'
import styled from '@emotion/styled'

const Tabavis = () => {
  const [imgSrc, setImgSrc] = useState('/asstes/LandingPage/Avis1.png')
  const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center'
    }
  }))

  const ImgStyled = styled('img')(({ theme }) => ({
    width: 300,
    height: 350,
    objectFit: 'cover',
    position: 'absolute',
    top: '10%',
    right: 0,
    marginRight: theme.spacing(5),
    borderRadius: theme.shape.borderRadius
  }))
  return (
    <Grid container spacing={6} sx={{ p: 0, maxWidth: '500rem' }}>
      {/* Account Details Card */}
      <Grid item xs={12} sm={12} md={12}>
        <CardContent sx={{ p: 0, backgroundColor: '#fff !important' }}>
          <Card
            sx={{
              p: 7,
              pb: 12
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                width: '100%'
              }}
            >
              <Box
                sx={{
                  display: 'grid',
                  alignItems: 'center',
                  width: '80%'
                }}
              >
                <Typography sx={{ fontSize: 24, mb: 2 }} color={'#4c4e64ad'}>
                  Congratulations <span className='font-[600]'>John!</span> 🎉{' '}
                </Typography>
                <Typography variant='h8' sx={{ fontSize: 15 }} color={'#4c4e64ad'}>
                  Praetermitto illuc transiturus quod quidam per ampla spatia urbis subversasque silices sine periculi
                  <br /> metu properantes equos velut publicos signatis quod dicitur calceis agitant.
                </Typography>

                <ButtonStyled
                  component='label'
                  variant='contained'
                  htmlFor='account-settings-upload-image'
                  sx={{
                    borderRadius: 1,
                    backgroundColor: '#1273D1',
                    maxWidth: 'max-content',
                    mt: 4,
                    '&:hover': { backgroundColor: '#1273D1' }
                  }}
                >
                  prendre rendez-vous
                </ButtonStyled>
              </Box>
              <Box
                sx={{
                  position: 'relative',
                  width: '50%'
                }}
              >
                <ImgStyled src={imgSrc} alt='Profile Pic' />
                {/* <Box className='absolute -bottom-[30%] right-0 half-circle avis  bg-[#1273D1] z-0'> */}
                {/* <div className='absolute bottom-[20%] right-0 half-circle avis  bg-[#1273D1] z-0'></div> */}
                {/* </Box> */}
              </Box>
            </Box>
          </Card>
        </CardContent>
      </Grid>
    </Grid>
  )
}

export default Tabavis
