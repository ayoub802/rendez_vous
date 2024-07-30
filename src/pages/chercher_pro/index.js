// ** Next Import
import Link from 'next/link'
import TimelineDot from '@mui/lab/TimelineDot'
// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Pro1 from '../../../public/asstes/LandingPage/avatar01.png'
import Pro2 from '../../../public/asstes/LandingPage/avatar02.png'
import Pro3 from '../../../public/asstes/LandingPage/avatar03.png'
import Pro4 from '../../../public/asstes/LandingPage/avatar04.png'
import Pro5 from '../../../public/asstes/LandingPage/avatar05.png'
import Pro6 from '../../../public/asstes/LandingPage/avatar06.png'
// ** Icon Imports
import Icon from 'src/@core/components/icon'
import axios from 'axios'
// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import { useState } from 'react'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import { CardHeader } from '@mui/material'
import Image from 'next/image'
import { useRouter } from 'next/router'
const ChercherPro = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FilterBar />
      </Grid>
      <Grid item xs={12}>
        <ChercherProItem />
      </Grid>
    </Grid>
  )
}

const FilterBar = () => {
  const [metier, setMetier] = useState('')
  const [localisation, setLocalisation] = useState('')
  const [disponibilite, setDisponibilite] = useState('')

  const handleChange = event => {
    const { name, value } = event.target
    if (name === 'metier') setMetier(value)
    if (name === 'localisation') setLocalisation(value)
    if (name === 'disponibilite') setDisponibilite(value)
  }

  return (
    <Grid container spacing={6} sx={{ backgroundColor: '#fff', borderRadius: 1 }}>
      <Grid item xs={12} sm={12} md={12} sx={{ pl: 0, '&.MuiGrid-item': { pl: 4, pb: -10, m: 0 } }}>
        <CardHeader
          title='Filtres'
          // action={
          // }
          className='headerNative'
          sx={{
            mb: -2.5, // Apply negative margin bottom instead of padding bottom
            pt: 0
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{ pl: 0, '&.MuiGrid-item': { pl: 4, pb: 5 } }}>
        <Box
          sx={{
            pl: 0
          }}
        >
          <FormControl variant='outlined' sx={{ minWidth: '100%' }}>
            <InputLabel>Métier</InputLabel>
            <Select value={metier} onChange={handleChange} label='Métier' name='metier'>
              <MenuItem value={10}>Option 1</MenuItem>
              <MenuItem value={20}>Option 2</MenuItem>
              <MenuItem value={30}>Option 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Box>
          <FormControl variant='outlined' sx={{ minWidth: '100%' }}>
            <InputLabel>Localistation</InputLabel>
            <Select value={localisation} onChange={handleChange} label='Localistation' name='localisation'>
              <MenuItem value={10}>Option 1</MenuItem>
              <MenuItem value={20}>Option 2</MenuItem>
              <MenuItem value={30}>Option 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item xs={12} sm={6} md={4} sx={{ pl: 0, '&.MuiGrid-item': { px: 4, pb: 5 } }}>
        <Box>
          <FormControl variant='outlined' sx={{ minWidth: '100%' }}>
            <InputLabel>Disponibilité</InputLabel>
            <Select value={disponibilite} onChange={handleChange} label='Disponibilité' name='disponibilite'>
              <MenuItem value={10}>Option 1</MenuItem>
              <MenuItem value={20}>Option 2</MenuItem>
              <MenuItem value={30}>Option 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
    </Grid>
  )
}

const Data = [
  {
    id: 1,
    name: 'Dr Laurent - Dentiste',
    imageIcon: Pro1,
    colorShip: 'success',
    etatDescriptio: 'Disponible aujourd’hui',
    etatColor: '#33B246',
    address: '127 Boulevard de la liberté, Goma'
  },
  {
    id: 2,
    name: 'Dr Morie - Dentiste',
    imageIcon: Pro2,
    colorShip: 'error',
    etatDescriptio: 'Disponible demain',
    etatColor: '#FF3B30',
    address: '127 Boulevard de la liberté, Goma'
  },
  {
    id: 3,
    name: 'Dr Ligier - Dentiste',
    imageIcon: Pro3,
    colorShip: 'success',
    etatDescriptio: 'Disponible aujourd’hui',
    etatColor: '#33B246',
    address: '127 Boulevard de la liberté, Goma'
  },
  {
    id: 4,
    name: 'Dr Blanc - Dentiste',
    imageIcon: Pro4,
    colorShip: 'success',
    etatDescriptio: 'Disponible aujourd’hui',
    etatColor: '#33B246',
    address: '127 Boulevard de la liberté, Goma'
  },
  {
    id: 5,
    name: 'Dr Lafont - Dentiste',
    imageIcon: Pro5,
    colorShip: 'secondary',
    etatDescriptio: 'Indisponible',
    etatColor: '#D3D3D3',
    address: '127 Boulevard de la liberté, Goma'
  },
  {
    id: 6,
    name: 'Dr Léonie - Dentiste',
    imageIcon: Pro6,
    colorShip: 'error',
    etatDescriptio: 'Disponible demain',
    etatColor: '#FF3B30',
    address: '127 Boulevard de la liberté, Goma'
  }
]

const ChercherProItem = ({ data }) => {
  const router = useRouter()
  return (
    <Grid container spacing={6}>
      {Data &&
        Array.isArray(Data) &&
        Data.map((item, index) => {
          return (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card sx={{ position: 'relative' }}>
                <CardContent
                  sx={{
                    padding: 0
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    {/* <Avatar src={item.avatar} sx={{ mb: 4, width: 100, height: 100 }} /> */}
                    <Box
                      sx={{
                        height: '180px',
                        width: '100%',
                        display: 'flex',
                        alignItems: 'end',
                        justifyContent: 'center',
                        backgroundColor: '#4C4E6410'
                      }}
                    >
                      <Image src={item?.imageIcon} width={100} heigth={100} quality={100} />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBlockStart: 4,
                        marginBlockStart: 2
                      }}
                    >
                      <TimelineDot color={item?.colorShip} />
                    </Box>
                    <Typography variant='h6' sx={{ fontWeight: 500 }}>
                      {item.name}
                    </Typography>
                    <Typography sx={{ mb: 1, mt: 2, fontWeight: '500', color: item?.etatColor }}>
                      {item?.etatDescriptio}
                    </Typography>
                    <Typography sx={{ mb: 4, mt: 2, fontWeight: '500', color: '#4c4e64d9' }}>
                      127 Boulevard de la liberté, Goma
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Button
                        sx={{
                          mr: 4,
                          borderRadius: 0,
                          backgroundColor: '#1273D1',
                          mb: 2,
                          '&:hover': { backgroundColor: '#1273D1' }
                        }}
                        onClick={() => router.replace('/fichPro')}
                        variant={'contained'}
                      >
                        Voir la fiche
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
    </Grid>
  )
}

export default ChercherPro
