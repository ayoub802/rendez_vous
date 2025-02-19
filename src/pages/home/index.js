// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import MeetingSchedule from 'src/views/dashboard/Board/MeetingSchedule'
import TimelineLeft from 'src/views/dashboard/Board/Notifications'
import CardSnippet from 'src/@core/components/card-snippet'
// import * as source from 'src/views/components/timeline/TimelineSourceCode'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={6}>
        <CardSnippet title='Mes notifications' sx={{ height: '50vh' }}>
          <TimelineLeft />
        </CardSnippet>
      </Grid>
      <Grid item xs={12} sm={6} md={6}>
        <MeetingSchedule />
      </Grid>
    </Grid>
  )
}

export default Home
