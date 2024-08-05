// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Select from '@mui/material/Select'
import Dialog from '@mui/material/Dialog'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import CardHeader from '@mui/material/CardHeader'
import FormControl from '@mui/material/FormControl'
import CardContent from '@mui/material/CardContent'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import FormHelperText from '@mui/material/FormHelperText'
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import FormControlLabel from '@mui/material/FormControlLabel'
import Cards from 'react-credit-cards'
import PaymentConfirm from '../../../public/asstes/LandingPage/paimentConfirm.png'
// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'
import 'react-credit-cards/es/styles-compiled.css'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { DialogContentText, DialogTitle, Switch, TextareaAutosize } from '@mui/material'
import CardWrapper from 'src/@core/styles/libs/react-credit-cards'
import Image from 'next/image'

const initialData = {
  state: '',
  number: '',
  address: '',
  zipCode: '',
  lastName: 'Doe',
  currency: 'usd',
  firstName: 'John',
  language: 'arabic',
  timezone: 'gmt-12',
  country: 'australia',
  email: 'john.doe@example.com',
  organization: 'Pixinvent'
}

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(5),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabAccount = () => {
  // ** State
  const [open, setOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [userInput, setUserInput] = useState('yes')
  const [formData, setFormData] = useState(initialData)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')
  const [secondDialogOpen, setSecondDialogOpen] = useState(false)
  const [thirdDialogOpen, setThirdDialogOpen] = useState(false)
  const [focus, setFocus] = useState()

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { checkbox: false } })
  const handleClose = () => setOpen(false)
  const handleSecondDialogClose = () => setSecondDialogOpen(false)
  const handleThirdDialogClose = () => setThirdDialogOpen(false)
  const onSubmit = () => setOpen(true)

  const handleConfirmation = value => {
    handleClose()
    setUserInput(value)
    setSecondDialogOpen(true)
  }
  const handleConfirmation2 = value => {
    handleSecondDialogClose()
    setUserInput(value)
    setThirdDialogOpen(true)
  }

  const handleInputImageChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
      if (reader.result !== null) {
        setInputValue(reader.result)
      }
    }
  }

  const handleInputImageReset = () => {
    setInputValue('')
    setImgSrc('/images/avatars/1.png')
  }

  const handleFormChange = (field, value) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    <Grid container spacing={6}>
      {/* Account Details Card */}
      <Grid item xs={12}>
        <form>
          <CardContent sx={{ pt: 0 }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ImgStyled src={imgSrc} alt='Profile Pic' />
              <div className='flex flex-col'>
                <Typography variant='h4' color={'#4c4e64ad'} sx={{ fontWeight: 600, mb: 0.5 }}>
                  Docteur John Doe
                </Typography>
                <Typography variant='h8' color={'#4c4e64ad'} sx={{ fontWeight: 500, mb: 3 }}>
                  Chirurgien dentiste
                </Typography>
                <ButtonStyled
                  component='label'
                  variant='contained'
                  htmlFor='account-settings-upload-image'
                  onClick={onSubmit}
                  sx={{
                    borderRadius: 1,
                    backgroundColor: '#1273D1',
                    '&:hover': { backgroundColor: '#1273D1' }
                  }}
                >
                  prendre rendez-vous
                </ButtonStyled>
              </div>
            </Box>
          </CardContent>
          <Divider />
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Adresse'
                  placeholder='Adresse'
                  // value={formData.firstName}
                  // onChange={e => handleFormChange('firstName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Telephone'
                  placeholder='telephone'
                  // value={formData.lastName}
                  // onChange={e => handleFormChange('lastName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label='Bio'
                  placeholder='Bio'
                  rows={2}
                  multiline
                  id='textarea-outlined-static'
                  // value={formData.lastName}
                  // onChange={e => handleFormChange('lastName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Moyen de paiement'
                  placeholder='Moyen de paiement'
                  // value={formData.organization}
                  // onChange={e => handleFormChange('organization', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Spécialités'
                  placeholder='Spécialités'
                  // value={formData.organization}
                  // onChange={e => handleFormChange('organization', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Liste déroulante type 1</InputLabel>
                  <Select
                    label='Liste déroulante type 1'
                    // value={formData.language}
                    // onChange={e => handleFormChange('language', e.target.value)}
                  >
                    <MenuItem value='option'>option 1</MenuItem>
                    <MenuItem value='option'>option 1</MenuItem>
                    <MenuItem value='option'>option 1</MenuItem>
                    <MenuItem value='option'>option 1</MenuItem>
                    <MenuItem value='option'>option 1</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Liste déroulante type 2</InputLabel>
                  <Select
                    label='Liste déroulante type 2'
                    // value={formData.language}
                    // onChange={e => handleFormChange('language', e.target.value)}
                  >
                    <MenuItem value='option'>option 2</MenuItem>
                    <MenuItem value='option'>option 2</MenuItem>
                    <MenuItem value='option'>option 2</MenuItem>
                    <MenuItem value='option'>option 2</MenuItem>
                    <MenuItem value='option'>option 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  paddingInline: 7,
                  marginBlock: 7
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    gap: 5
                  }}
                >
                  <Typography
                    variant='h8'
                    color={'#4c4e64ad'}
                    sx={{ fontWeight: 500, mb: 3, textTransform: 'uppercase', color: '#4c4e64de', fontSize: 14 }}
                  >
                    Services
                  </Typography>
                  <Typography variant='h8' color={'#4c4e64ad'} sx={{ fontWeight: 400, mb: 3 }}>
                    Première consultation dentaire
                  </Typography>
                  <Typography variant='h8' color={'#4c4e64ad'} sx={{ fontWeight: 400, mb: 3 }}>
                    Urgence dentaire
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                    gap: 5,
                    borderLeftWidth: 1,
                    pl: 5,
                    borderLeftColor: '#00000010'
                  }}
                >
                  <Typography
                    variant='h8'
                    color={'#4c4e64ad'}
                    sx={{ fontWeight: 500, mb: 3, textTransform: 'uppercase', color: '#4c4e64de', fontSize: 14 }}
                  >
                    Tarifs
                  </Typography>
                  <Typography variant='h8' color={'#4c4e64ad'} sx={{ fontWeight: 400, mb: 3, fontSize: 16 }}>
                    25 €
                  </Typography>
                  <Typography variant='h8' color={'#4c4e64ad'} sx={{ fontWeight: 400, mb: 3, fontSize: 16 }}>
                    50 €
                  </Typography>
                </Box>
              </Box>

              <Grid item xs={12}>
                <Button
                  variant='contained'
                  sx={{
                    borderRadius: 1,
                    mr: 3,
                    backgroundColor: '#1273D1',
                    '&:hover': { backgroundColor: '#1273D1' }
                  }}
                >
                  retour à la recherche
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </form>
      </Grid>

      {/* Deactivate Account Dialogs */}
      <Dialog fullWidth maxWidth='md' open={open} onClose={handleClose}>
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(6)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(10.5)} !important`]
          }}
        >
          <Box
            sx={{
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column',
              justifyContent: 'center',
              mb: 6,
              '& svg': { mb: 6, color: 'warning.main' }
            }}
          >
            <Typography
              variant='h5'
              color={'#4c4e64de'}
              sx={{ fontWeight: 500, mb: 3, color: '#4c4e64de', fontSize: 14 }}
            >
              Prise de rendez-vous
            </Typography>
            <Typography
              variant='h7'
              color={'#4c4e64ad'}
              sx={{ fontWeight: 400, mb: 3, color: '#4c4e64de', fontSize: 15 }}
            >
              Vérifiez les informations pré-enregistrées
            </Typography>
          </Box>
          <Box
            sx={{
              marginBlockEnd: 6
            }}
          >
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Prenom'
                  placeholder='Prenom'
                  // value={formData.lastName}
                  // onChange={e => handleFormChange('lastName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Nom'
                  placeholder='Nom'
                  // value={formData.firstName}
                  // onChange={e => handleFormChange('firstName', e.target.value)}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  fullWidth
                  label='Rendez-vous sélectionné'
                  placeholder='Rendez-vous sélectionné'
                  // rows={2}
                  // multiline
                  // id='textarea-outlined-static'
                  // value={formData.lastName}
                  // onChange={e => handleFormChange('lastName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Email'
                  placeholder='Email'
                  // value={formData.firstName}
                  // onChange={e => handleFormChange('firstName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Services</InputLabel>
                  <Select
                    label='Services'
                    // value={formData.language}
                    // onChange={e => handleFormChange('language', e.target.value)}
                  >
                    <MenuItem value='option'>option 1</MenuItem>
                    <MenuItem value='option'>option 1</MenuItem>
                    <MenuItem value='option'>option 1</MenuItem>
                    <MenuItem value='option'>option 1</MenuItem>
                    <MenuItem value='option'>option 1</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Téléphone'
                  placeholder='Téléphone'
                  // rows={2}
                  // multiline
                  // id='textarea-outlined-static'
                  // value={formData.lastName}
                  // onChange={e => handleFormChange('lastName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label='Téléphone portable'
                  placeholder='Téléphone portable'
                  // value={formData.firstName}
                  // onChange={e => handleFormChange('firstName', e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Liste déroulante type 1</InputLabel>
                  <Select
                    label='Liste déroulante type 1'
                    // value={formData.language}
                    // onChange={e => handleFormChange('language', e.target.value)}
                  >
                    <MenuItem value='option'>option 1</MenuItem>
                    <MenuItem value='option'>option 1</MenuItem>
                    <MenuItem value='option'>option 1</MenuItem>
                    <MenuItem value='option'>option 1</MenuItem>
                    <MenuItem value='option'>option 1</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Liste déroulante type 2</InputLabel>
                  <Select
                    label='Liste déroulante type 2'
                    // value={formData.language}
                    // onChange={e => handleFormChange('language', e.target.value)}
                  >
                    <MenuItem value='option'>option 2</MenuItem>
                    <MenuItem value='option'>option 2</MenuItem>
                    <MenuItem value='option'>option 2</MenuItem>
                    <MenuItem value='option'>option 2</MenuItem>
                    <MenuItem value='option'>option 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Box>
          <FormControlLabel
            control={
              <Switch
                defaultChecked
                sx={{
                  '& .Mui-checked+.MuiSwitch-track': {
                    backgroundColor: '#1273D1 !important'
                  },
                  '& .Mui-checked .MuiSwitch-thumb': {
                    backgroundColor: '#1273D1'
                  }
                }}
              />
            }
            label='Je souhaite être notifié par sms'
          />
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'start',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button
            variant='contained'
            sx={{ mr: 2, backgroundColor: '#1273D1', '&:hover': { backgroundColor: '#1273D1' } }}
            onClick={() => handleConfirmation('yes')}
          >
            Confirmer le rendez-vous
          </Button>
          <Button variant='outlined' color='secondary' onClick={() => handleConfirmation('cancel')}>
            ANNULER
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog fullWidth maxWidth='sm' open={secondDialogOpen} onClose={handleSecondDialogClose}>
        <DialogTitle
          id='user-view-billing-edit-card'
          sx={{
            textAlign: 'center',
            fontSize: '1.5rem !important',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          Ajouter une carte
        </DialogTitle>
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(5)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
          }}
        >
          <DialogContentText
            variant='body2'
            id='user-view-billing-edit-card-description'
            sx={{ textAlign: 'center', mb: 7 }}
          >
            Veuillez remplir les informations
          </DialogContentText>
          <form>
            <Grid container spacing={6}>
              <Grid item xs={12}>
                <CardWrapper sx={{ '& .rccs': { m: '0 auto' } }}>
                  <Cards
                    cvc={587}
                    focused={focus}
                    expiry={'08/20'}
                    name={'Tom McBride'}
                    number={'5577 0000 5577 9865'}
                  />
                </CardWrapper>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={6}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name='number'
                      autoComplete='off'
                      label='Numéro'
                      placeholder='0000 0000 0000 0000'
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      name='name'
                      autoComplete='off'
                      label='Nom sur la carte'
                      placeholder='Nom sur la carte'
                    />
                  </Grid>
                  <Grid item xs={12} sm={3}>
                    <TextField
                      fullWidth
                      name='Expire le'
                      label='Expire le'
                      placeholder='MM/YY'
                      inputProps={{ maxLength: '5' }}
                    />
                  </Grid>

                  <Grid item xs={12} sm={3}>
                    <TextField fullWidth name='cvc' label='CVC' autoComplete='off' placeholder={'123'} />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button
            variant='contained'
            sx={{ mr: 2, backgroundColor: '#1273D1', '&:hover': { backgroundColor: '#1273D1' } }}
            onClick={() => handleConfirmation2('yes')}
          >
            payer
          </Button>
          <Button variant='outlined' color='secondary' onClick={handleSecondDialogClose}>
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog fullWidth maxWidth='md' open={thirdDialogOpen} onClose={handleThirdDialogClose}>
        <DialogTitle
          id='user-view-billing-edit-card'
          sx={{
            textAlign: 'center',
            fontSize: '1.5rem !important',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pt: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          Votre paiement a bien été enregistré
        </DialogTitle>
        <DialogContent
          sx={{
            pb: theme => `${theme.spacing(5)} !important`,
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`]
          }}
        >
          <DialogContentText
            variant='body2'
            id='user-view-billing-edit-card-description'
            sx={{ textAlign: 'center', mb: 7 }}
          >
            Votre rendez-vous est confirmé, vous pourrez retrouver <br />
            les détails de votre rendez-vous dans votre compte <br />
            sous l’onglet “Mes rendez-vous”
          </DialogContentText>
          <form>
            <Grid container spacing={6}>
              <Grid item xs={12} sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
                <Image src={PaymentConfirm} width={1000} height={1000} quality={100} className='w-[180px]' />
              </Grid>
            </Grid>
          </form>
        </DialogContent>
        <DialogActions
          sx={{
            justifyContent: 'center',
            px: theme => [`${theme.spacing(5)} !important`, `${theme.spacing(15)} !important`],
            pb: theme => [`${theme.spacing(8)} !important`, `${theme.spacing(12.5)} !important`]
          }}
        >
          <Button
            variant='contained'
            sx={{ mr: 2, mt: 5, backgroundColor: '#1273D1', '&:hover': { backgroundColor: '#1273D1' } }}
            onClick={handleThirdDialogClose}
          >
            retour au tableau de bord
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  )
}

export default TabAccount
