// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/styles'
import { useEffect, useState } from 'react'

// ** Components
import UserDropdown from 'src/@core/layouts/components/shared-components/UserDropdown'

const AppBarContent = props => {
  // ** Props
  const { settings, saveSettings } = props
  const [countries, setCountries] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [selected, setSelected] = useState('')
  const [selected1, setSelected1] = useState('')
  const [open, setOpen] = useState(false)
  const [open1, setOpen1] = useState(false)

  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name')
      .then(res => res.json())
      .then(data => {
        setCountries(data)
      })
  }, [])

  const theme = useTheme()
  const { direction } = theme
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {/* <ModeToggler settings={settings} saveSettings={saveSettings} /> */}

      <UserDropdown settings={settings} />
    </Box>
  )
}

export default AppBarContent
