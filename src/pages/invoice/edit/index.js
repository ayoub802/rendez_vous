// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Alert from '@mui/material/Alert'

// ** Third Party Components
import axios from 'axios'

// ** Demo Components Imports
// import EditCard from './EditCard'
// import EditActions from './EditActions'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import SendInvoiceDrawer from '../preview/SendInvoiceDrawer'
import AddPaymentDrawer from '../preview/AddPaymentDrawer'
import EditCard from './EditCard'
import EditActions from './EditActions'

const InvoiceEdit = () => {
  // ** State
  const [error, setError] = useState(false)
  const [addPaymentOpen, setAddPaymentOpen] = useState(false)
  const [sendInvoiceOpen, setSendInvoiceOpen] = useState(false)
  const toggleSendInvoiceDrawer = () => setSendInvoiceOpen(!sendInvoiceOpen)
  const toggleAddPaymentDrawer = () => setAddPaymentOpen(!addPaymentOpen)

  return (
    <>
      <DatePickerWrapper sx={{ '& .react-datepicker-wrapper': { width: 'auto' } }}>
        <Grid container spacing={6}>
          <Grid item xl={9} md={8} xs={12}>
            <EditCard />
          </Grid>
          <Grid item xl={3} md={4} xs={12}>
            <EditActions
              toggleSendInvoiceDrawer={toggleSendInvoiceDrawer}
              toggleAddPaymentDrawer={toggleAddPaymentDrawer}
            />
          </Grid>
        </Grid>
        <SendInvoiceDrawer open={sendInvoiceOpen} toggle={toggleSendInvoiceDrawer} />
        <AddPaymentDrawer open={addPaymentOpen} toggle={toggleAddPaymentDrawer} />
      </DatePickerWrapper>
    </>
  )
}

export default InvoiceEdit
