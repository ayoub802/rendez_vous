// ** Third Party Imports

// ** Demo Components Imports

// ** React Imports
import { useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'
import { MdStars } from 'react-icons/md'

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
import Icon from 'src/@core/components/icon'
import TabConnections from 'src/views/dashboard/account-settings/TabConnections'
import TabNotifications from 'src/views/dashboard/account-settings/TabNotifications'
import TabSecurity from 'src/views/dashboard/account-settings/TabSecurity'
import TabAccount from './TabAccount'
import Tabavis from './TabAvis'
import AppCalendar from './TabCalandar'
// ** Demo Tabs Imports
// import TabAccount from 'src/views/pages/account-settings/TabAccount'
// import TabBilling from 'src/views/pages/account-settings/TabBilling'
// import TabSecurity from 'src/views/pages/account-settings/TabSecurity'
// import TabConnections from 'src/views/pages/account-settings/TabConnections'
// import TabNotifications from 'src/views/pages/account-settings/TabNotifications'

// const TabList = styled(MuiTabList)(({ theme }) => ({
//   '& .MuiTabs-indicator': {
//     display: 'none'
//   },
//   '& .Mui-selected': {
//     backgroundColor: theme.palette.primary.main,
//     color: `${theme.palette.common.white} !important`
//   },
//   '& .MuiTab-root': {
//     minWidth: 65,
//     minHeight: 38,
//     borderRadius: theme.shape.borderRadius,
//     [theme.breakpoints.up('md')]: {
//       minWidth: 130
//     }
//   }
// }))

const AccountSettings = () => {
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

  const tabContentList = {
    account: <TabAccount />,
    security: <TabSecurity />,
    connections: <TabConnections />,
    notifications: <TabNotifications />
    // billing: <TabBilling apiPricingPlanData={apiPricingPlanData} />
  }

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
                label='FICHE PRO'
                icon={<Icon icon='mdi:user' />}
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
                label='Calendrier'
                icon={<Icon icon='mdi:calendar' />}
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
                label='AVIS'
                icon={<MdStars size={25} />}
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
              <TabAccount />
            </TabPanel>
            {/* <TabPanel value='2'>
              <Tabavis />
            </TabPanel> */}
            {/* <TabPanel value='3' sx={{ p: 0, pt: 15, backgroundColor: '#f7f7f9' }}> */}
            {/* <Tabavis /> */}
            {/* </TabPanel> */}
          </TabContext>
        </Box>
      </Card>
      {value == 2 && (
        <Box
          sx={{
            mt: 5
          }}
        >
          <AppCalendar />
        </Box>
      )}
      {value == 3 && (
        <Box
          sx={{
            mt: 5
          }}
        >
          <Tabavis />
        </Box>
      )}
    </Grid>
  )
}

export default AccountSettings

// export const getStaticPaths = () => {
//   return {
//     paths: [
//       { params: { tab: 'account' } },
//       { params: { tab: 'security' } },
//       { params: { tab: 'billing' } },
//       { params: { tab: 'notifications' } },
//       { params: { tab: 'connections' } }
//     ],
//     fallback: false
//   }
// }

// export const getStaticProps = async ({ params }) => {
//   const res = await axios.get('/pages/pricing')
//   const data = res.data

//   return {
//     props: {
//       tab: params?.tab,
//       apiPricingPlanData: data.pricingPlans
//     }
//   }
// }
