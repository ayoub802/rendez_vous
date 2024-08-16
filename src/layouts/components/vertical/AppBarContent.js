// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/styles'
import { forwardRef, useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

// ** Icon Imports

// ** Components
import { InputAdornment, MenuItem, Select, TextField } from '@mui/material'
import DatePicker from 'react-datepicker'
import { TiArrowSortedDown } from 'react-icons/ti'
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const AppBarContent = props => {
  // ** Props
  const { hidden, settings, saveSettings, toggleNavVisibility } = props
  const [countries, setCountries] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [selected, setSelected] = useState('')
  const [selected1, setSelected1] = useState('')
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)
  const [date, setDate] = useState(new Date())
  const [personName, setPersonName] = useState([])
  const [metier, setMetier] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
      })
  }, [])

  const theme = useTheme()
  const { direction } = theme

  const PickersComponent = forwardRef(({ ...props }, ref) => {
    // ** Props
    const { label, readOnly } = props

    return (
      <TextField
        inputRef={ref}
        {...props}
        placeholder='Select Date'
        sx={{
          '& .MuiOutlinedInput-root': {
            '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent'
            },
            '& fieldset': {
              borderColor: 'transparent'
            },
            '&:hover fieldset': {
              borderColor: 'transparent'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent'
            }
          },
          '& .MuiInputBase-input': {
            padding: 0,
            cursor: 'pointer'
          }
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <TiArrowSortedDown />
            </InputAdornment>
          )
        }}
      />
    )
  })

  const handleChange = event => {
    setPersonName(event.target.value)
  }
  const handleChangeMetier = event => {
    setMetier(event.target.value)
  }
  return (
    <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div className='rounded-full hidden lg:block xl:max-w-[50rem] 2xl:max-w-[65rem] w-full bg-white shadow mt-4 py-2 pr-3 2xl:pr-4 pl-8 2xl:pl-9 pb-3'>
        <div className='flex items-center gap-4 2xl:gap-8'>
          <div className='border-r border-[#0a1c38]/20 flex flex-col pr-6 xl:max-w-[200px] 2xl:max-w-[500px]'>
            <h2 className='!text-[18px] font-poppins text-[#0A1C38]/60'>Métier</h2>

            <Select
              fullWidth
              // label='Métier'
              displayEmpty
              value={metier}
              onChange={handleChangeMetier}
              inputProps={{ placeholder: 'Métier' }}
              sx={{
                width: 250, // Default width
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent'
                },
                '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent'
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent'
                },
                '& .MuiInputBase-input': {
                  // paddingBottom: 0
                  padding: 0,
                  pl: 2
                },
                '@media (max-width:600px)': {
                  maxWidth: '100%' // On small screens, make width 100%
                },
                '@media (min-width:600px) and (max-width:1280px)': {
                  maxWidth: 200 // On medium screens, adjust as needed
                }
              }}
              renderValue={selected => {
                if (selected.length === 0) {
                  return <h3 className='text-[#cdced4]'>Select Métier</h3>
                }

                return <h3 className='font-inter capitalize font-[500]'>{selected}</h3>
              }}
            >
              <MenuItem value='admin'>Admin</MenuItem>
              <MenuItem value='author'>Author</MenuItem>
              <MenuItem value='editor'>Editor</MenuItem>
              <MenuItem value='maintainer'>Maintainer</MenuItem>
              <MenuItem value='subscriber'>Subscriber</MenuItem>
            </Select>
          </div>

          <div className='border-r border-[#0a1c38]/20 flex flex-col pr-6'>
            <h2 className='!text-[18px] font-poppins text-[#0A1C38]/60'>Localisation</h2>

            <Select
              fullWidth
              displayEmpty
              value={personName}
              onChange={handleChange}
              placeholder='Select Métier'
              sx={{
                width: 250,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent'
                },
                '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent'
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent'
                },
                '& .MuiInputBase-input': {
                  // paddingBottom: 0
                  padding: 0,
                  pl: 2
                },
                '@media (max-width:600px)': {
                  maxWidth: '100%' // On small screens, make width 100%
                },
                '@media (min-width:600px) and (max-width:1280px)': {
                  maxWidth: 200 // On medium screens, adjust as needed
                }
              }}
              renderValue={selected => {
                if (selected.length === 0) {
                  return <h3 className='text-[#cdced4]'>Select Localisation</h3>
                }

                return <h3 className='font-inter capitalize font-[500]'>{selected}</h3>
              }}
            >
              <MenuItem value='dentist'>Dentist</MenuItem>
              <MenuItem value='author'>Author</MenuItem>
              <MenuItem value='editor'>Editor</MenuItem>
              <MenuItem value='maintainer'>Maintainer</MenuItem>
              <MenuItem value='subscriber'>Subscriber</MenuItem>
            </Select>
          </div>

          <div className='flex flex-col gap-1 p-0 2xl:pr-6'>
            <h2 className='!text-[18px] font-poppins text-[#0A1C38]/60'>Date</h2>
            <DatePickerWrapper
              sx={{
                '& .MuiBox-root': {
                  mb: 0
                }
              }}
            >
              <Box sx={{ mb: 6, width: 210 }}>
                <DatePicker
                  onChange={date => setDate(date)}
                  selected={date}
                  selectsStart
                  id='event-start-date'
                  customInput={<PickersComponent registername='date' />}
                />
              </Box>
            </DatePickerWrapper>
          </div>

          <div className='w-[56px] h-[56px] cursor-pointer flex bg-[#1273D1] justify-center items-center rounded-full ml-auto'>
            <FiSearch color='#fff' size={28} />
          </div>
        </div>
      </div>
      <div className='rounded-lg block lg:hidden  w-[50%] bg-white shadow mt-4 py-2 pr-3 2xl:pr-4 pl-8 2xl:pl-9 pb-3'>
        <div className='grid items-center gap-4 2xl:gap-8'>
          <div className='border-r flex flex-col pr-6 xl:max-w-[200px] 2xl:max-w-[500px]'>
            <h2 className='!text-[18px] font-poppins text-[#0A1C38]/60'>Métier</h2>

            <Select
              fullWidth
              // label='Métier'
              displayEmpty
              value={metier}
              onChange={handleChangeMetier}
              inputProps={{ placeholder: 'Métier' }}
              sx={{
                // width: 250, // Default width
                // '& .MuiOutlinedInput-notchedOutline': {
                //   borderColor: 'transparent'
                // },
                // '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
                //   borderColor: 'transparent'
                // },
                // '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                //   borderColor: 'transparent'
                // },
                // '& .MuiInputBase-input': {
                //   // paddingBottom: 0
                //   padding: 0,
                //   pl: 2
                // },
                '@media (max-width:600px)': {
                  maxWidth: '100%' // On small screens, make width 100%
                },
                '@media (min-width:600px) and (max-width:1280px)': {
                  maxWidth: 200 // On medium screens, adjust as needed
                }
              }}
              renderValue={selected => {
                if (selected.length === 0) {
                  return <h3 className='text-[#cdced4]'>Select Métier</h3>
                }

                return <h3 className='font-inter capitalize font-[500]'>{selected}</h3>
              }}
            >
              <MenuItem value='admin'>Admin</MenuItem>
              <MenuItem value='author'>Author</MenuItem>
              <MenuItem value='editor'>Editor</MenuItem>
              <MenuItem value='maintainer'>Maintainer</MenuItem>
              <MenuItem value='subscriber'>Subscriber</MenuItem>
            </Select>
          </div>

          <div className='border-r flex flex-col pr-6'>
            <h2 className='!text-[18px] font-poppins text-[#0A1C38]/60'>Localisation</h2>

            <Select
              fullWidth
              displayEmpty
              value={personName}
              onChange={handleChange}
              placeholder='Select Métier'
              sx={{
                width: 250,
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent'
                },
                '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent'
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: 'transparent'
                },
                '& .MuiInputBase-input': {
                  // paddingBottom: 0
                  padding: 0,
                  pl: 2
                },
                '@media (max-width:600px)': {
                  maxWidth: '100%' // On small screens, make width 100%
                },
                '@media (min-width:600px) and (max-width:1280px)': {
                  maxWidth: 200 // On medium screens, adjust as needed
                }
              }}
              renderValue={selected => {
                if (selected.length === 0) {
                  return <h3 className='text-[#cdced4]'>Select Localisation</h3>
                }

                return <h3 className='font-inter capitalize font-[500]'>{selected}</h3>
              }}
            >
              <MenuItem value='dentist'>Dentist</MenuItem>
              <MenuItem value='author'>Author</MenuItem>
              <MenuItem value='editor'>Editor</MenuItem>
              <MenuItem value='maintainer'>Maintainer</MenuItem>
              <MenuItem value='subscriber'>Subscriber</MenuItem>
            </Select>
          </div>

          <div className='flex flex-col gap-1 p-0 2xl:pr-6'>
            <h2 className='!text-[18px] font-poppins text-[#0A1C38]/60'>Date</h2>
            <DatePickerWrapper
              sx={{
                '& .MuiBox-root': {
                  mb: 0
                },
                '& .react-datepicker__day--selected': {
                  backgroundColor: '#000', // Customize selected date color
                  color: '#fff' // Text color for selected date
                },
                '& .react-datepicker__day--in-range': {
                  backgroundColor: '#000' // Customize range color
                },
                '& .react-datepicker__day--keyboard-selected': {
                  backgroundColor: '#000' // Customize keyboard-selected color
                }
              }}
            >
              <Box sx={{ mb: 6, width: 210 }}>
                <DatePicker
                  onChange={date => setDate(date)}
                  selected={date}
                  selectsStart
                  id='event-start-date'
                  customInput={<PickersComponent registername='date' />}
                />
              </Box>
            </DatePickerWrapper>
          </div>

          <div className='w-[56px] h-[56px] cursor-pointer flex bg-[#1273D1] justify-center items-center rounded-full ml-auto'>
            <FiSearch color='#fff' size={28} />
          </div>
        </div>
      </div>
      <Box className='actions-right' sx={{ display: 'flex', alignItems: 'center' }}>
        <UserDropdown settings={settings} />
      </Box>
    </Box>
  )
}

export default AppBarContent
