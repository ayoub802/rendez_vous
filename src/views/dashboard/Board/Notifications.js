// ** MUI Imports
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import TimelineDot from '@mui/lab/TimelineDot'
import TimelineItem from '@mui/lab/TimelineItem'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import MuiTimeline from '@mui/lab/Timeline'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// Styled Timeline component
const Timeline = styled(MuiTimeline)({
  paddingLeft: 0,
  paddingRight: 0,
  '& .MuiTimelineItem-root': {
    width: '100%',
    '&:before': {
      display: 'none'
    }
  }
})

// Styled component for the image of a shoe
const ImgShoe = styled('img')(({ theme }) => ({
  borderRadius: theme.shape.borderRadius
}))

const TimelineLeft = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='error' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ '& svg': { verticalAlign: 'bottom', mx: 4 } }}>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='body2' sx={{ mr: 2, fontWeight: 600, color: 'text.primary' }}>
              Rendez-vous annulé !
            </Typography>
            <Typography variant='caption'>Aujourd’hui</Typography>
          </Box>
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            {/* <span>Charles de Gaulle Airport, Paris</span> <Icon icon='mdi:arrow-right' fontSize={20} />{' '} */}
            <span>Vous avez annulé votre rendez-vous </span>
          </Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant='body2' sx={{ mr: 2, fontWeight: 600, color: 'text.primary' }}>
              Votre rendez-vous est confirmé !
            </Typography>
            <Typography variant='caption'>Hier.</Typography>
          </Box>
          <Typography variant='body2' sx={{ color: 'text.primary' }}>
            Votre rendez-vous du 10 août 2024 à 10h30 est bien confirmé
          </Typography>
          {/* <Divider sx={{ my: theme => {theme.spacing(3)} !important }} /> */}
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color='success' />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ mb: 3 }}>
            <Box sx={{ ml: { sm: 3, xs: 0 } }}>
              <Box
                sx={{ mb: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}
              >
                <Typography
                  variant='body2'
                  sx={{ mr: 2, fontWeight: 600, color: 'text.primary', mt: { sm: 0, xs: 2 } }}
                >
                  Vous avez modifié un rendez-vous !
                </Typography>
                <Typography
                  variant='caption'
                  sx={{
                    mb: {
                      sm: 0,
                      xs: 2
                    }
                  }}
                >
                  Il y 3 jours
                </Typography>
              </Box>
              <Typography variant='body2' sx={{ mb: 2, color: 'text.primary' }}>
                Vous avez modifié votre rendez-vous chez le dentiste
              </Typography>
            </Box>
          </Box>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineLeft
