// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'
const LOCAL_STORAGE_KEY = 'calendarEvents'

// Helper to get events from local storage
const getEventsFromLocalStorage = () => {
  const events = localStorage.getItem(LOCAL_STORAGE_KEY)
  return events ? JSON.parse(events) : []
}

// Helper to save events to local storage
const saveEventsToLocalStorage = events => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(events))
}
// ** Fetch Events
export const fetchEvents = createAsyncThunk('appCalendar/fetchEvents', async calendars => {
  const allEvents = getEventsFromLocalStorage()
  // Filter events based on calendars, assuming each event has a `calendar` property
  // const filteredEvents = allEvents.filter(event => calendars.includes(event.calendar))
  console.log('The newEvent => ', allEvents)

  return allEvents
})

// ** Add Event
export const addEvent = createAsyncThunk('appCalendar/addEvent', async (event, { dispatch }) => {
  try {
    const allEvents = getEventsFromLocalStorage()
    const newEvent = { ...event, id: new Date().getTime() } // Generate a unique ID
    allEvents.push(newEvent)

    saveEventsToLocalStorage(allEvents)

    // Fetch and return the updated list of events
    await dispatch(fetchEvents(['Personal', 'Business', 'Family', 'Holiday', 'ETC']))

    return newEvent
  } catch (error) {
    console.error('Error adding event:', error.message)
    throw error
  }
})
// ** Update Event
export const updateEvent = createAsyncThunk('appCalendar/updateEvent', async (event, { dispatch }) => {
  const allEvents = getEventsFromLocalStorage()
  const eventIndex = allEvents.findIndex(e => e.id === event.id)

  if (eventIndex !== -1) {
    allEvents[eventIndex] = event
    saveEventsToLocalStorage(allEvents)

    // Fetch and return the updated list of events
    await dispatch(fetchEvents(['Personal', 'Business', 'Family', 'Holiday', 'ETC']))

    return event
  } else {
    throw new Error('Event not found')
  }
})

// ** Delete Event
export const deleteEvent = createAsyncThunk('appCalendar/deleteEvent', async (id, { dispatch }) => {
  const allEvents = getEventsFromLocalStorage()
  const updatedEvents = allEvents.filter(event => event.id !== id)

  saveEventsToLocalStorage(updatedEvents)

  // Fetch and return the updated list of events
  await dispatch(fetchEvents(['Personal', 'Business', 'Family', 'Holiday', 'ETC']))

  return id
})

export const appCalendarSlice = createSlice({
  name: 'appCalendar',
  initialState: {
    events: [],
    selectedEvent: null,
    selectedCalendars: ['Personal', 'Business', 'Family', 'Holiday', 'ETC']
  },
  reducers: {
    handleSelectEvent: (state, action) => {
      state.selectedEvent = action.payload
    },
    handleCalendarsUpdate: (state, action) => {
      const filterIndex = state.selectedCalendars.findIndex(i => i === action.payload)
      if (state.selectedCalendars.includes(action.payload)) {
        state.selectedCalendars.splice(filterIndex, 1)
      } else {
        state.selectedCalendars.push(action.payload)
      }
      if (state.selectedCalendars.length === 0) {
        state.events.length = 0
      }
    },
    handleAllCalendars: (state, action) => {
      const value = action.payload
      if (value === true) {
        state.selectedCalendars = ['Aujourd’hui', 'A venir', 'Business', 'Personnel', 'Médical']
      } else {
        state.selectedCalendars = []
      }
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.events = action.payload
    })
  }
})

export const { handleSelectEvent, handleCalendarsUpdate, handleAllCalendars } = appCalendarSlice.actions

export default appCalendarSlice.reducer
