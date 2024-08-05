// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Redux Imports
import { useDispatch, useSelector } from 'react-redux'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** FullCalendar & App Components Imports
import CalendarWrapper from 'src/@core/styles/libs/fullcalendar'
import AddEventSidebar from 'src/views/dashboard/calendar/AddEventSidebar'
import Calendar from 'src/views/dashboard/calendar/Calendar'
import SidebarLeft from 'src/views/dashboard/calendar/SidebarLeft'

// ** Actions
import {
  addEvent,
  deleteEvent,
  fetchEvents,
  handleAllCalendars,
  handleCalendarsUpdate,
  handleSelectEvent,
  updateEvent
} from 'src/store/apps/calendar'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Card, Grid, Tab } from '@mui/material'
import { FaRegCalendar } from 'react-icons/fa'
import { MdOutlineEdit } from 'react-icons/md'
import EditCalendar from './editCalandier'

// ** CalendarColors
const calendarsColor = {
  'Aujourd’hui': 'error',
  'A venir': 'primary',
  Business: 'warning',
  Personnel: 'success',
  Médical: 'info'
}

const AppCalendar = () => {
  // ** States
  const [calendarApi, setCalendarApi] = useState(null)
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(false)
  const [addEventSidebarOpen, setAddEventSidebarOpen] = useState(false)

  // ** Hooks
  const { settings } = useSettings()
  const dispatch = useDispatch()
  const store = useSelector(state => state.calendar)

  // ** Vars
  const leftSidebarWidth = 260
  const addEventSidebarWidth = 400
  const { skin, direction } = settings
  const mdAbove = useMediaQuery(theme => theme.breakpoints.up('md'))
  useEffect(() => {
    dispatch(fetchEvents(store.selectedCalendars))
  }, [dispatch, store.selectedCalendars])
  const handleLeftSidebarToggle = () => setLeftSidebarOpen(!leftSidebarOpen)
  const handleAddEventSidebarToggle = () => setAddEventSidebarOpen(!addEventSidebarOpen)
  const [value, setValue] = useState('1')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      {/* <CalendarWrapper
        className='app-calendar'
        sx={{
          boxShadow: skin === 'bordered' ? 0 : 6,
          ...(skin === 'bordered' && { border: theme => `1px solid ${theme.palette.divider}` })
        }}
      >
        <SidebarLeft
          store={store}
          mdAbove={mdAbove}
          dispatch={dispatch}
          calendarsColor={calendarsColor}
          leftSidebarOpen={leftSidebarOpen}
          leftSidebarWidth={leftSidebarWidth}
          handleSelectEvent={handleSelectEvent}
          handleAllCalendars={handleAllCalendars}
          handleCalendarsUpdate={handleCalendarsUpdate}
          handleLeftSidebarToggle={handleLeftSidebarToggle}
          handleAddEventSidebarToggle={handleAddEventSidebarToggle}
        />
        <Box
          sx={{
            px: 5,
            pt: 3.75,
            flexGrow: 1,
            borderRadius: 1,
            boxShadow: 'none',
            backgroundColor: 'background.paper',
            ...(mdAbove ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } : {})
          }}
        >
          <Calendar
            store={store}
            dispatch={dispatch}
            direction={direction}
            updateEvent={updateEvent}
            calendarApi={calendarApi}
            calendarsColor={calendarsColor}
            setCalendarApi={setCalendarApi}
            handleSelectEvent={handleSelectEvent}
            handleLeftSidebarToggle={handleLeftSidebarToggle}
            handleAddEventSidebarToggle={handleAddEventSidebarToggle}
          />
        </Box>
        <AddEventSidebar
          store={store}
          dispatch={dispatch}
          addEvent={addEvent}
          updateEvent={updateEvent}
          deleteEvent={deleteEvent}
          calendarApi={calendarApi}
          drawerWidth={addEventSidebarWidth}
          handleSelectEvent={handleSelectEvent}
          addEventSidebarOpen={addEventSidebarOpen}
          handleAddEventSidebarToggle={handleAddEventSidebarToggle}
        />
      </CalendarWrapper> */}
      <Grid container spacing={6} sx={{ ml: -2, display: 'block', mt: 1 }}>
        <TabContext value={value}>
          <Card>
            <Box
              sx={{
                backgroundColor: '#fff',
                width: '100%',
                borderRadius: 2
              }}
            >
              <TabList
                onChange={handleChange}
                aria-label='simple tabs example'
                sx={{
                  borderBottomWidth: 1,
                  borderColor: '#4c4e641f',
                  '& .MuiTabs-indicator': {
                    backgroundColor: '#1273D1'
                  }
                }}
              >
                <Tab
                  value='1'
                  label='calendrier'
                  icon={<FaRegCalendar size={20} />}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center',
                    pr: 10,
                    '& .MuiTab-iconWrapper': { marginBlockEnd: 0 },
                    '&.Mui-selected': {
                      color: '#1273D1',
                      borderColor: '#1273D1'
                    }
                  }}
                />
                <Tab
                  value='2'
                  label='MODIFIER'
                  icon={<MdOutlineEdit size={20} />}
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 2,
                    alignItems: 'center',
                    pr: 10,
                    '& .MuiTab-iconWrapper': { marginBlockEnd: 0 },
                    '&.Mui-selected': {
                      color: '#1273D1',
                      borderColor: '#1273D1'
                    }
                  }}
                />
              </TabList>
            </Box>
          </Card>
          <TabPanel value='1'>
            <CalendarWrapper
              className='app-calendar'
              sx={{
                boxShadow: skin === 'bordered' ? 0 : 6,
                ...(skin === 'bordered' && { border: theme => `1px solid ${theme.palette.divider}` })
              }}
            >
              <SidebarLeft
                store={store}
                mdAbove={mdAbove}
                dispatch={dispatch}
                calendarsColor={calendarsColor}
                leftSidebarOpen={leftSidebarOpen}
                leftSidebarWidth={leftSidebarWidth}
                handleSelectEvent={handleSelectEvent}
                handleAllCalendars={handleAllCalendars}
                handleCalendarsUpdate={handleCalendarsUpdate}
                handleLeftSidebarToggle={handleLeftSidebarToggle}
                handleAddEventSidebarToggle={handleAddEventSidebarToggle}
              />
              <Box
                sx={{
                  px: 5,
                  pt: 3.75,
                  flexGrow: 1,
                  borderRadius: 1,
                  boxShadow: 'none',
                  backgroundColor: 'background.paper',
                  ...(mdAbove ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } : {})
                }}
              >
                <Calendar
                  store={store}
                  dispatch={dispatch}
                  direction={direction}
                  updateEvent={updateEvent}
                  calendarApi={calendarApi}
                  calendarsColor={calendarsColor}
                  setCalendarApi={setCalendarApi}
                  handleSelectEvent={handleSelectEvent}
                  handleLeftSidebarToggle={handleLeftSidebarToggle}
                  handleAddEventSidebarToggle={handleAddEventSidebarToggle}
                />
              </Box>
              <AddEventSidebar
                store={store}
                dispatch={dispatch}
                addEvent={addEvent}
                updateEvent={updateEvent}
                deleteEvent={deleteEvent}
                calendarApi={calendarApi}
                drawerWidth={addEventSidebarWidth}
                handleSelectEvent={handleSelectEvent}
                addEventSidebarOpen={addEventSidebarOpen}
                handleAddEventSidebarToggle={handleAddEventSidebarToggle}
              />
            </CalendarWrapper>
          </TabPanel>
          {/* <TabPanel value='2'>
            <Historique />
          </TabPanel> */}
        </TabContext>
      </Grid>

      {value == 2 && <EditCalendar />}
    </>
  )
}

export default AppCalendar
