// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'

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

const MeetingSchedule = () => {
  return (
    <Card>
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
                  <OptionsMenu
                    options={['Refresh', 'Edit', 'Share']}
                    iconButtonProps={{ size: 'small', className: 'card-more-options' }}
                  />
                </Box>
              </Box>
            </Box>
          )
        })}
      </CardContent>
    </Card>
  )
}

export default MeetingSchedule
