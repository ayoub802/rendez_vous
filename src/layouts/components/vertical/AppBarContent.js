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
      {/* <Box className='actions-left' sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
        {hidden ? (
          <IconButton color='inherit' sx={{ ml: -2.75 }} onClick={toggleNavVisibility}>
            <Icon icon='mdi:menu' />
          </IconButton>
        ) : null}

        <ModeToggler settings={settings} saveSettings={saveSettings} />
      </Box> */}
      <div className='rounded-full max-w-[65rem] w-full bg-white shadow mt-4 py-2 px-4 pl-9 pb-3'>
        <div className='flex items-center gap-8'>
          <div className='border-r border-[#0a1c38]/20 flex flex-col pr-6 max-w-[500px]'>
            {/* <Typography
              variant='h6'
              sx={{ color: '#0A1C38', fontSize: 1, fontWeight: 600 }}
              className='!text-[18px] font-poppins'
            >
            </Typography> */}
            <h2 className='!text-[18px] font-poppins text-[#0A1C38]/60'>Métier</h2>
            {/* <div className='font-medium relative'>
              <div
                onClick={() => setOpen(!open)}
                className={`bg-white w-[17rem] flex items-center justify-between rounded cursor-pointer ${
                  selected ? 'text-black' : 'text-gray-500'
                }`}
              >
                {selected ? (selected?.length > 25 ? selected?.substring(0, 25) + '...' : selected) : 'Select Métier'}
                <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
              </div>
              <ul
                className={`bg-white mt-2 overflow-y-auto absolute w-[250px] h-[160px] ${open ? 'block' : 'hidden'} `}
              >
                {countries?.map(country => (
                  <li
                    key={country?.name}
                    className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                                ${country?.name?.toLowerCase() === selected?.toLowerCase() && 'bg-sky-600 text-white'}
                                ${country?.name?.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
                    onClick={() => {
                      if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                        setSelected(country?.name)
                        setOpen(false)
                        setInputValue('')
                      }
                    }}
                  >
                    {country?.name}
                  </li>
                ))}
              </ul>
            </div> */}
            {/* <InputLabel id='role-select'>Métier</InputLabel> */}
            <Select
              fullWidth
              // label='Métier'
              displayEmpty
              value={metier}
              onChange={handleChangeMetier}
              inputProps={{ placeholder: 'Métier' }}
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
            {/* <div className='font-medium relative'>
              <div
                onClick={() => setOpen1(!open1)}
                className={`bg-white w-[200px] flex items-center justify-between rounded cursor-pointer ${
                  selected1 ? 'text-black' : 'text-gray-500'
                }`}
              >
                {selected1
                  ? selected1?.length > 25
                    ? selected1?.substring(0, 25) + '...'
                    : selected1
                  : 'Select Localisation'}
                <BiChevronDown size={20} className={`${open1 && 'rotate-180'}`} />
              </div>
              <ul
                className={`bg-white mt-2 overflow-y-auto absolute w-[250px] h-[160px] ${open1 ? 'block' : 'hidden'} `}
              >
                {countries?.map(country => (
                  <li
                    key={country?.name}
                    className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                                ${country?.name?.toLowerCase() === selected1?.toLowerCase() && 'bg-sky-600 text-white'}
                                ${country?.name?.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
                    onClick={() => {
                      if (country?.name?.toLowerCase() !== selected1.toLowerCase()) {
                        setSelected1(country?.name)
                        setOpen1(false)
                        setInputValue('')
                      }
                    }}
                  >
                    {country?.name}
                  </li>
                ))}
              </ul>
            </div> */}
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

          <div className='flex flex-col gap-1 pr-6'>
            <h2 className='!text-[18px] font-poppins text-[#0A1C38]/60'>Date</h2>
            <DatePickerWrapper
              sx={{
                '& .MuiBox-root': {
                  mb: 0
                }
              }}
            >
              <Box sx={{ mb: 6 }}>
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

          <div className='w-[56px] h-[56px] cursor-pointer flex bg-[#1273D1] justify-center items-center rounded-full'>
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
