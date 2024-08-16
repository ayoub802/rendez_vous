// ** React Imports
import { useState, forwardRef } from 'react'

// ** MUI Imports
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputAdornment from '@mui/material/InputAdornment'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const CustomInput = forwardRef(({ ...props }, ref) => {
  return (
    <TextField
      inputRef={ref}
      label='Payment Date'
      {...props}
      sx={{
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
    />
  )
})

const Header = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const EditInvoiceDrawer = ({ open, toggle }) => {
  // ** State
  const [date, setDate] = useState(new Date())

  return (
    <Drawer
      open={open}
      anchor='right'
      onClose={toggle}
      variant='temporary'
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: [300, 400] } }}
    >
      <Header>
        <Typography variant='h6'>Add Payment</Typography>
        <IconButton size='small' onClick={toggle} sx={{ color: 'text.primary' }}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Header>
      <Box sx={{ p: 5 }}>
        <Box sx={{ mb: 6 }}>
          <TextField
            fullWidth
            id='invoice-balance'
            label='Invoice Balance'
            InputProps={{ disabled: true }}
            defaultValue='5000.00'
            sx={{
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
          />
        </Box>
        <Box sx={{ mb: 6 }}>
          <TextField
            fullWidth
            type='number'
            label='Payment Amount'
            InputProps={{
              startAdornment: <InputAdornment position='start'>$</InputAdornment>
            }}
            sx={{
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
          />
        </Box>
        <Box sx={{ mb: 6 }}>
          <DatePickerWrapper sx={{ '& .MuiFormControl-root': { width: '100%' } }}>
            <DatePicker
              selected={date}
              id='invoice-payment-date'
              customInput={<CustomInput />}
              onChange={date => setDate(date)}
            />
          </DatePickerWrapper>
        </Box>
        <Box sx={{ mb: 6 }}>
          <FormControl fullWidth>
            <InputLabel
              htmlFor='payment-method'
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
              Payment Method
            </InputLabel>
            <Select
              label='Payment Method'
              labelId='payment-method'
              id='payment-method-select'
              defaultValue='select-method'
              sx={{
                '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1273D1'
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: '#1273D1'
                }
              }}
            >
              <MenuItem value='select-method' disabled>
                Select Payment Method
              </MenuItem>
              <MenuItem value='Cash'>Cash</MenuItem>
              <MenuItem value='Bank Transfer'>Bank Transfer</MenuItem>
              <MenuItem value='Credit'>Credit</MenuItem>
              <MenuItem value='Debit'>Debit</MenuItem>
              <MenuItem value='Paypal'>Paypal</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{ mb: 6 }}>
          <TextField
            rows={6}
            multiline
            fullWidth
            label='Internal Payment Note'
            placeholder='Internal Payment Note'
            sx={{
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
          />
        </Box>

        <div>
          <Button
            size='large'
            variant='contained'
            onClick={toggle}
            sx={{
              borderRadius: 1,
              mr: 4,
              backgroundColor: '#1273D1',
              '&:hover': { backgroundColor: '#1273D1' }
            }}
          >
            Send
          </Button>
          <Button size='large' variant='outlined' color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </div>
      </Box>
    </Drawer>
  )
}

export default EditInvoiceDrawer
