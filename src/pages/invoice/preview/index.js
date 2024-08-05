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
import PreviewCard from './PreviewCard'
import PreviewActions from './PreviewActions'
import AddPaymentDrawer from './AddPaymentDrawer'
import SendInvoiceDrawer from './SendInvoiceDrawer'

const InvoicePreview = () => {
  // ** State
  const [error, setError] = useState(false)
  const [data, setData] = useState(null)
  const [addPaymentOpen, setAddPaymentOpen] = useState(false)
  const [sendInvoiceOpen, setSendInvoiceOpen] = useState(false)
  //   useEffect(() => {
  //     axios
  //       .get('/apps/invoice/single-invoice', { params: { id } })
  //       .then(res => {
  //         setData(res.data)
  //         setError(false)
  //       })
  //       .catch(() => {
  //         setData(null)
  //         setError(true)
  //       })
  //   }, [id])
  const toggleSendInvoiceDrawer = () => setSendInvoiceOpen(!sendInvoiceOpen)
  const toggleAddPaymentDrawer = () => setAddPaymentOpen(!addPaymentOpen)
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xl={9} md={8} xs={12}>
          <PreviewCard data={data} />
        </Grid>
        <Grid item xl={3} md={4} xs={12}>
          <PreviewActions
            toggleAddPaymentDrawer={toggleAddPaymentDrawer}
            toggleSendInvoiceDrawer={toggleSendInvoiceDrawer}
          />
        </Grid>
      </Grid>
      <SendInvoiceDrawer open={sendInvoiceOpen} toggle={toggleSendInvoiceDrawer} />
      <AddPaymentDrawer open={addPaymentOpen} toggle={toggleAddPaymentDrawer} />
    </>
  )
}

export default InvoicePreview
