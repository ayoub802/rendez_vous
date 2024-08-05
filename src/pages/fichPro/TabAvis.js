// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import styled from '@emotion/styled'
import { Button, Card, CardContent, Typography } from '@mui/material'
import { MdStars } from 'react-icons/md'

const Tabavis = () => {
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [imgSrc1, setImgSrc1] = useState('/asstes/LandingPage/star.png')
  const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      textAlign: 'center'
    }
  }))

  const ImgStyled = styled('img')(({ theme }) => ({
    width: 130,
    height: 130,
    objectFit: 'cover',
    position: 'absolute',
    top: '-55%',
    left: '25%',
    marginRight: theme.spacing(5),
    borderRadius: theme.shape.borderRadius
  }))
  const ImgStyled2 = styled('img')(({ theme }) => ({
    width: 40,
    height: 40,
    objectFit: 'cover',
    position: 'absolute',
    bottom: '40%',
    left: '0%',
    marginRight: theme.spacing(5),
    borderRadius: theme.shape.borderRadius
  }))
  const ImgStyled3 = styled('img')(({ theme }) => ({
    width: 25,
    height: 25,
    objectFit: 'cover',
    position: 'absolute',
    bottom: '55%',
    left: '-7%',
    marginRight: theme.spacing(5),
    borderRadius: theme.shape.borderRadius
  }))
  return (
    <Grid container spacing={6} sx={{ p: 0, maxWidth: '500rem' }}>
      {/* Account Details Card */}
      <Grid item xs={12} sm={12} md={12} sx={{ mb: -5 }}>
        <CardContent sx={{ p: 0, backgroundColor: '#fff !important' }}>
          <Card
            sx={{
              p: 7,
              pb: 12,
              height: 250
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
                  width: '90%',
                  mt: 3
                }}
              >
                <Typography sx={{ fontSize: 24, mb: 2 }} color={'#4c4e64ad'}>
                  Congratulations <span className='font-[600]'>John!</span> 🎉{' '}
                </Typography>
                <Typography variant='h8' sx={{ fontSize: 20 }} color={'#4c4e64ad'}>
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
                  // width: '50%',
                  height: '100%'
                }}
              >
                <Box className='relative -top-[0px] -left-28  z-0'>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <MdStars size={20} color={'1273D1'} />
                    <MdStars size={20} color={'1273D1'} />
                    <MdStars size={20} color={'1273D1'} />
                    <MdStars size={20} color={'1273D1'} />
                    <MdStars size={20} color={'1273D1'} />
                  </Box>
                </Box>
                <Box className='relative top-[60px] -left-10 half-circle avis  bg-[#1273D1] z-0'>
                  <Box>
                    <ImgStyled src={imgSrc} />
                  </Box>
                  <Box>
                    <ImgStyled2 src={imgSrc1} />
                  </Box>
                  <Box>
                    <ImgStyled3 src={imgSrc1} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </CardContent>
      </Grid>
      <Grid item xs={12} sm={12} md={12} sx={{ mb: -5 }}>
        <CardContent sx={{ p: 0, backgroundColor: '#fff !important' }}>
          <Card
            sx={{
              p: 7,
              pb: 12,
              height: 250
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
                  width: '90%',
                  mt: 3
                }}
              >
                <Typography sx={{ fontSize: 24, mb: 2 }} color={'#4c4e64ad'}>
                  Congratulations <span className='font-[600]'>John!</span> 🎉{' '}
                </Typography>
                <Typography variant='h8' sx={{ fontSize: 20 }} color={'#4c4e64ad'}>
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
                  // width: '50%',
                  height: '100%'
                }}
              >
                <Box className='relative -top-[0px] -left-28  z-0'>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <MdStars size={20} color={'1273D1'} />
                    <MdStars size={20} color={'1273D1'} />
                    <MdStars size={20} color={'1273D1'} />
                    <MdStars size={20} color={'1273D1'} />
                    <MdStars size={20} color={'1273D1'} />
                  </Box>
                </Box>
                <Box className='relative top-[60px] -left-10 half-circle avis  bg-[#1273D1] z-0'>
                  <Box>
                    <ImgStyled src={imgSrc} />
                  </Box>
                  <Box>
                    <ImgStyled2 src={imgSrc1} />
                  </Box>
                  <Box>
                    <ImgStyled3 src={imgSrc1} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </CardContent>
      </Grid>
      <Grid item xs={12} sm={12} md={12} sx={{ mb: -5 }}>
        <CardContent sx={{ p: 0, backgroundColor: '#fff !important' }}>
          <Card
            sx={{
              p: 7,
              pb: 12,
              height: 250
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
                  width: '90%',
                  mt: 3
                }}
              >
                <Typography sx={{ fontSize: 24, mb: 2 }} color={'#4c4e64ad'}>
                  Congratulations <span className='font-[600]'>John!</span> 🎉{' '}
                </Typography>
                <Typography variant='h8' sx={{ fontSize: 20 }} color={'#4c4e64ad'}>
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
                  // width: '50%',
                  height: '100%'
                }}
              >
                <Box className='relative -top-[0px] -left-28  z-0'>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1
                    }}
                  >
                    <MdStars size={20} color={'1273D1'} />
                    <MdStars size={20} color={'1273D1'} />
                    <MdStars size={20} color={'1273D1'} />
                    <MdStars size={20} color={'1273D1'} />
                    <MdStars size={20} color={'1273D1'} />
                  </Box>
                </Box>
                <Box className='relative top-[60px] -left-10 half-circle avis  bg-[#1273D1] z-0'>
                  <Box>
                    <ImgStyled src={imgSrc} />
                  </Box>
                  <Box>
                    <ImgStyled2 src={imgSrc1} />
                  </Box>
                  <Box>
                    <ImgStyled3 src={imgSrc1} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Card>
        </CardContent>
      </Grid>
    </Grid>
  )
}

export default Tabavis
