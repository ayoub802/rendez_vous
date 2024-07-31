// ** React Imports
import { forwardRef, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'

// ** Third Party Imports
import TextField from '@mui/material/TextField'
import DatePicker from 'react-datepicker'
const PickersComponent = forwardRef(({ ...props }, ref) => {
  // ** Props
  const { label, readOnly } = props

  return (
    <TextField inputRef={ref} {...props} label={label || ''} {...(readOnly && { inputProps: { readOnly: true } })} />
  )
})

const PickersBasic = ({ popperPlacement }) => {
  // ** States
  const [date, setDate] = useState(new Date())

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <div>
        <DatePicker
          selectsStart
          id='event-start-date'
          customInput={<PickersComponent label='Start Date' registername='startDate' />}
        />
      </div>
    </Box>
  )
}

export default PickersBasic
