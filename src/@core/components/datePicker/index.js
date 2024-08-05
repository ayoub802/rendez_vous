// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Custom Component Imports
// import CustomInput from './PickersCustomInput'

const CustomInput = forwardRef(({ ...props }, ref) => {
  // ** Props
  const { label, readOnly } = props

  return (
    <TextField inputRef={ref} {...props} label={label || ''} {...(readOnly && { inputProps: { readOnly: true } })} />
  )
})

const DatePickerBasic = ({ popperPlacement }) => {
  // ** States
  const [date, setDate] = useState(new Date())

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }} className='demo-space-x'>
      <div>
        <DatePicker
          selected={date}
          id='basic-input'
          popperPlacement={popperPlacement}
          onChange={date => setDate(date)}
          placeholderText='Click to select a date'
          customInput={<CustomInput label='Basic' />}
        />
      </div>
    </Box>
  )
}

export default DatePickerBasic
