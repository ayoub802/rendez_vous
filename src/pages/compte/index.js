// ** Third Party Imports

// ** Demo Components Imports

// ** React Imports
import { forwardRef, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'

// ** Next Import
import { useRouter } from 'next/router'
// ** MUI Imports
import useMediaQuery from '@mui/material/useMediaQuery'
// import MuiTabList from '@mui/lab/TabList'

// ** Icon Imports
import { TabContext, TabList, TabPanel } from '@mui/lab'
import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Tab,
  TextField
} from '@mui/material'
import { Box } from '@mui/system'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdOutlineEuroSymbol, MdOutlineLockOpen } from 'react-icons/md'
import { TiArrowSortedDown } from 'react-icons/ti'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import TabAccount from './TabAccount'
import TabNotification from './TabNotification'
import TabPaiment from './TabPaiment'
import TabSecurite from './TabSecurite'

const ContactList = () => {
  // ** State

  const tab = [
    {
      id: 1,
      label: 'Account'
    },
    {
      id: 2,
      label: 'Account'
    },
    {
      id: 3,
      label: 'Account'
    },
    {
      id: 4,
      label: 'Account'
    }
  ]
  const [activeTab, setActiveTab] = useState(tab)
  const [isLoading, setIsLoading] = useState(false)
  // ** Hooks
  const router = useRouter()
  const hideText = useMediaQuery(theme => theme.breakpoints.down('md'))
  const [value, setValue] = useState('1')
  const [date, setDate] = useState(new Date())

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])
  const popperPlacement = 'bottom-start'
  const PickersComponent = forwardRef(({ ...props }, ref) => {
    // ** Props
    const { label, readOnly } = props

    return (
      <TextField
        inputRef={ref}
        {...props}
        label={label}
        sx={{
          width: '100%',
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'grey' // Default border color
            },
            '&:hover fieldset': {
              borderColor: 'blue' // Border color on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1273D1' // Border color on focus
            },
            '& .MuiInputLabel-root': {
              color: 'grey' // Default label color
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: '#1273D1' // Label color on focus
            }
          }
        }}
        InputLabelProps={{
          sx: {
            '&.Mui-focused': {
              color: '#1273D1' // Label color on focus
            },
            '&.Mui-focused.Mui-error': {
              color: 'red' // Label color on focus
            }
          }
        }}
        {...(readOnly && { inputProps: { readOnly: true } })}
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
  return (
    <Grid container spacing={6} sx={{ ml: -2, display: 'block', mt: 1 }}>
      <Card>
        <Box
          sx={{
            backgroundColor: '#fff',
            width: '100%',
            borderRadius: 2
          }}
        >
          <TabContext value={value}>
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
                label='COMPTE'
                icon={<AiOutlineSearch size={20} />}
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
                label='SECURITé'
                icon={<MdOutlineLockOpen size={20} />}
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
                value='3'
                label='NOTIFICATIONS'
                icon={<IoMdNotificationsOutline size={20} />}
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
                value='4'
                label='PAIMENT'
                icon={<MdOutlineEuroSymbol size={20} />}
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
            <TabPanel value='1'>
              <TabAccount />{' '}
            </TabPanel>
            <TabPanel value='2'>
              <TabSecurite />
            </TabPanel>
            <TabPanel value='3' sx={{ p: 0, pt: 15, backgroundColor: '#f7f7f9' }}>
              <TabNotification />
            </TabPanel>
            <TabPanel value='4'>
              <CardHeader title='Filters' sx={{ pb: 4, '& .MuiCardHeader-title': { letterSpacing: '.15px' } }} />
              <CardContent>
                <Grid container spacing={6}>
                  <Grid item sm={6} xs={12}>
                    <FormControl fullWidth>
                      <InputLabel
                        id='role-select'
                        sx={{
                          color: 'grey', // Default label color
                          '&.Mui-focused': {
                            color: '#1273D1' // Label color on focus
                          },
                          '&.Mui-error': {
                            color: 'red' // Label color on error
                          }
                        }}
                      >
                        Métier
                      </InputLabel>
                      <Select
                        fullWidth
                        id='select-role'
                        label='Métier'
                        labelId='role-select'
                        inputProps={{ placeholder: 'Métier' }}
                        sx={{
                          '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline':
                            {
                              borderColor: '#1273D1'
                            },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: '#1273D1'
                          }
                        }}
                      >
                        <MenuItem value='admin'>Admin</MenuItem>
                        <MenuItem value='author'>Author</MenuItem>
                        <MenuItem value='editor'>Editor</MenuItem>
                        <MenuItem value='maintainer'>Maintainer</MenuItem>
                        <MenuItem value='subscriber'>Subscriber</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <DatePickerWrapper>
                      <Box sx={{ mb: 6 }}>
                        <DatePicker
                          selectsStart
                          id='event-start-date'
                          onChange={date => setDate(date)}
                          selected={date}
                          popperPlacement={popperPlacement}
                          customInput={<PickersComponent label='Date' registername='date' />}
                        />
                      </Box>
                    </DatePickerWrapper>
                  </Grid>
                </Grid>
              </CardContent>
            </TabPanel>
          </TabContext>
        </Box>
      </Card>

      {value == 4 && <TabPaiment />}
    </Grid>
  )
}

export default ContactList
