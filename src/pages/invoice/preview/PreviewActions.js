// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const PreviewActions = ({ id = 4987, toggleSendInvoiceDrawer, toggleAddPaymentDrawer }) => {
  return (
    <Card>
      <CardContent>
        <Button
          fullWidth
          variant='contained'
          onClick={toggleSendInvoiceDrawer}
          startIcon={<Icon icon='mdi:send-outline' />}
          sx={{
            mb: 3.5,
            backgroundColor: '#1273D1',
            '&:hover': { backgroundColor: '#1273D1' }
          }}
        >
          Send Invoice
        </Button>
        <Button fullWidth sx={{ mb: 3.5 }} color='secondary' variant='outlined'>
          Download
        </Button>
        <Button fullWidth sx={{ mb: 3.5 }} color='secondary' variant='outlined'>
          Print
        </Button>
        <Button fullWidth sx={{ mb: 3.5 }} href={'/invoice/edit'} color='secondary' variant='outlined'>
          Edit Invoice
        </Button>
        <Button
          fullWidth
          color='success'
          variant='contained'
          onClick={toggleAddPaymentDrawer}
          startIcon={<Icon icon='mdi:currency-usd' />}
        >
          Add Payment
        </Button>
      </CardContent>
    </Card>
  )
}

export default PreviewActions
