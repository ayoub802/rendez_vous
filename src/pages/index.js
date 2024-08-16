'use client'
import { InputAdornment, MenuItem, Select, TextField } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { Box } from '@mui/system'
import Image from 'next/image'
import { forwardRef, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { FiSearch } from 'react-icons/fi'
import { TiArrowSortedDown } from 'react-icons/ti'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import Banner from '../../public/asstes/LandingPage/heroBanner.png'
import { useRouter } from 'next/router'

const LandingPage = ({ onVisit, handleVisitInitialPage }) => {
  const [date, setDate] = useState(new Date())
  const [personName, setPersonName] = useState([])
  const [metier, setMetier] = useState([])
  const router = useRouter()

  const theme = useTheme()
  const { direction } = theme
  const PickersComponent = forwardRef(({ ...props }, ref) => {
    // ** Props
    const { label, readOnly } = props

    return (
      <TextField
        inputRef={ref}
        {...props}
        placeholder='Select Date'
        sx={{
          width: 150,
          '& .MuiOutlinedInput-root': {
            '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent'
            },
            '& fieldset': {
              borderColor: 'transparent'
            },
            '&:hover fieldset': {
              borderColor: 'transparent'
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent'
            }
          },
          '& .MuiInputBase-input': {
            padding: 0,
            cursor: 'pointer'
          }
        }}
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
  // const handleVisitInitialPage = () => {
  //   localStorage.setItem('hasVisitedInitialPage', 'true')
  //   router.replace('/register')
  // }
  const handleChange = event => {
    setPersonName(event.target.value)
  }
  const handleChangeMetier = event => {
    setMetier(event.target.value)
  }
  return (
    <section className='font-poppins overflow-x-hidden'>
      <div className='h-[90vh] relative  w-full hero_background rounded-b-[32px] px-[5rem] py-[2rem]'>
        <div className='relative z-10'>
          <div className='flex flex-row justify-between items-center w-full'>
            <div></div>
            <div className='flex items-center gap-2'>
              <button
                onClick={() => router.replace('/login')}
                className='bg-white rounded-full px-[30px] py-[9px] border-[1.5px] border-white  font-[500] text-[#0C61AF] text-[14px] capitalize'
              >
                connexion
              </button>
              <button
                onClick={() => router.replace('/register')}
                className='rounded-full px-[35px] py-[9px] border-[1.5px] border-white font-[500] text-white text-[14px] capitalize'
              >
                S’enregistrer
              </button>
            </div>
          </div>{' '}
          <div className='mt-[110px] 2xl:max-w-[1400px] mx-auto'>
            <div className='grid items-start gap-2'>
              <div>
                <h1 className='capitalize font-[600] text-[60px] text-white leading-[68px]'>
                  Gérez facilement <br /> vos Rendez-vous
                </h1>
                <h3 className='font-normal text-[24px] leading-[34px] text-white/60 mt-5'>
                  Economisez votre temps et
                  <br />
                  concentrez-vous sur votrer métier
                </h3>
              </div>

              <div className='mt-3'>
                <div className='rounded-full max-w-[53rem] w-full bg-white shadow mt-4 py-4 px-4 pl-9 pb-4'>
                  <div className='flex items-center justify-between '>
                    <div className='border-r border-[#0a1c38]/20 flex flex-col pr-6 '>
                      <h2 className='!text-[18px] font-poppins text-[#0A1C38]/60'>Métier</h2>

                      <Select
                        fullWidth
                        // label='Métier'
                        displayEmpty
                        value={metier}
                        onChange={handleChangeMetier}
                        inputProps={{ placeholder: 'Métier' }}
                        sx={{
                          width: 180,
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent'
                          },
                          '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline':
                            {
                              borderColor: 'transparent'
                            },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent'
                          },
                          '& .MuiInputBase-input': {
                            // paddingBottom: 0
                            padding: 0,
                            pl: 2
                          }
                        }}
                        renderValue={selected => {
                          if (selected.length === 0) {
                            return <h3 className='text-[#cdced4]'>Select Métier</h3>
                          }

                          return <h3 className='font-inter capitalize font-[500]'>{selected}</h3>
                        }}
                      >
                        <MenuItem value='admin'>Admin</MenuItem>
                        <MenuItem value='author'>Author</MenuItem>
                        <MenuItem value='editor'>Editor</MenuItem>
                        <MenuItem value='maintainer'>Maintainer</MenuItem>
                        <MenuItem value='subscriber'>Subscriber</MenuItem>
                      </Select>
                    </div>

                    <div className='border-r border-[#0a1c38]/20 flex flex-col pr-6'>
                      <h2 className='!text-[18px] font-poppins text-[#0A1C38]/60'>Localisation</h2>

                      <Select
                        fullWidth
                        displayEmpty
                        value={personName}
                        onChange={handleChange}
                        placeholder='Select Métier'
                        sx={{
                          width: 200,
                          '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent'
                          },
                          '&:hover:not(.Mui-focused):not(.Mui-disabled):not(.Mui-error) .MuiOutlinedInput-notchedOutline':
                            {
                              borderColor: 'transparent'
                            },
                          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'transparent'
                          },
                          '& .MuiInputBase-input': {
                            // paddingBottom: 0
                            padding: 0,
                            pl: 2
                          }
                        }}
                        renderValue={selected => {
                          if (selected.length === 0) {
                            return <h3 className='text-[#cdced4]'>Select Localisation</h3>
                          }

                          return <h3 className='font-inter capitalize font-[500]'>{selected}</h3>
                        }}
                      >
                        <MenuItem value='dentist'>Dentist</MenuItem>
                        <MenuItem value='author'>Author</MenuItem>
                        <MenuItem value='editor'>Editor</MenuItem>
                        <MenuItem value='maintainer'>Maintainer</MenuItem>
                        <MenuItem value='subscriber'>Subscriber</MenuItem>
                      </Select>
                    </div>

                    <div className='flex flex-col gap-1'>
                      <h2 className='!text-[18px] font-poppins text-[#0A1C38]/60'>Date</h2>
                      <DatePickerWrapper
                        sx={{
                          '& .MuiBox-root': {
                            mb: 0
                          }
                        }}
                      >
                        <Box sx={{ mb: 6 }}>
                          <DatePicker
                            onChange={date => setDate(date)}
                            selected={date}
                            selectsStart
                            id='event-start-date'
                            customInput={<PickersComponent registername='date' />}
                          />
                        </Box>
                      </DatePickerWrapper>
                    </div>

                    <div className='w-[56px] h-[56px] cursor-pointer flex bg-[#1273D1] justify-center items-center rounded-full'>
                      <FiSearch color='#fff' size={28} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='absolute -bottom-[0px] -right-20 half-circle  bg-[#1A73C6]/20 z-0'></div>
        <div className='absolute bottom-[0px] right-10 half-circle-medium bg-[#1A73C6]/20 z-0'></div>
        <div className='absolute bottom-[0px] right-10'>
          <Image src={Banner} quality={100} />
        </div>
      </div>
      <div className='bg-white relative z-10  w-full pt-12 pb-12'>
        <div className='max-w-[1450px] mx-auto'>
          <div className='grid items-center grid-cols-2'>
            <div>
              <h1 className='text-[#0A1C38] text-[20px] leading-[24px]'>
                123 Health Lane
                <br></br> Citysville, State 56789
                <br></br>
                Goma - RDC
              </h1>
            </div>
            <div>
              <h3 className='text-[#0A1C38] text-[20px] leading-[30px]'>
                RENDEZ-VOUS.SN Mensarum enim voragines et varias voluptatum inlecebras, ne longius progrediar.
              </h3>
              <h3 className='text-[#0A1C38] text-[20px] leading-[30px] mt-10'>
                Praetermitto illuc transiturus quod quidam per ampla spatia urbis subversasque silices sine periculi
                metu properantes equos velut publicos signatis quod dicitur calceis agitant.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
LandingPage.authGuard = false
LandingPage.guestGuard = false
export default LandingPage
