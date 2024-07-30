// ** Third Party Imports

// ** Demo Components Imports

// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { MdOutlineEuroSymbol, MdOutlineLockOpen } from 'react-icons/md'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import useMediaQuery from '@mui/material/useMediaQuery'
// import MuiTabList from '@mui/lab/TabList'

// ** Icon Imports
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import { Card } from '@mui/material'
import TabAccount from './TabAccount'
import TabNotification from './TabNotification'
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

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <Grid container spacing={6} sx={{ ml: -2, display: 'block' }}>
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
          </TabContext>
        </Box>
      </Card>
    </Grid>
  )
}

export default ContactList
