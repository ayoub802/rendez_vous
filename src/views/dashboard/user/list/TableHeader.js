// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const TableHeader = props => {
  // ** Props
  const { handleFilter, toggle, value } = props

  return (
    <Box sx={{ p: 5, pb: 3, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Button
        sx={{ mr: 4, mb: 2 }}
        color='secondary'
        variant='outlined'
        startIcon={<Icon icon='mdi:export-variant' fontSize={20} />}
      >
        Export
      </Button>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
        <TextField
          size='small'
          value={value}
          placeholder='Rechercher'
          onChange={e => handleFilter(e.target.value)}
          sx={{
            mr: 6,
            mb: 2,
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

        <Button
          variant='contained'
          sx={{
            mb: 2,
            borderRadius: 1,
            backgroundColor: '#1273D1',
            '&:hover': { backgroundColor: '#1273D1' }
          }}
        >
          Chercher
        </Button>
      </Box>
    </Box>
  )
}

export default TableHeader
