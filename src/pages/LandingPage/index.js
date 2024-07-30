'use client'

import React, { useEffect, useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import DatePicker from 'src/@core/components/datePicker'
import DatePickerBasic from 'src/@core/components/datePicker'
import { useTheme } from '@mui/material/styles'
import { FiSearch } from 'react-icons/fi'
import Image from 'next/image'
import Banner from '../../../public/asstes/LandingPage/heroBanner.png'
const InitialPage = ({ onVisit }) => {
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
  const popperPlacement = direction === 'ltr' ? 'bottom-start' : 'bottom-end'
  return (
    <section className='font-poppins overflow-x-hidden'>
      <div className='h-[90vh] relative  w-full hero_background rounded-b-[32px] px-[5rem] py-[2rem]'>
        <div className='relative z-10'>
          <div className='flex flex-row justify-between items-center w-full'>
            <div></div>
            <div className='flex items-center gap-2'>
              <button
                onClick={onVisit}
                className='bg-white rounded-full px-[30px] py-[9px] border-[1.5px] border-white  font-[500] text-[#0C61AF] text-[14px] capitalize'
              >
                connexion
              </button>
              <button
                onClick={onVisit}
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
                <div className='rounded-full max-w-max w-full bg-white py-4 px-4 pl-9'>
                  <div className='flex items-center gap-8'>
                    <div className='border-r border-[#0a1c38]/20 flex flex-col gap-1 pr-6'>
                      <p>Métier</p>
                      <div className='font-medium relative'>
                        <div
                          onClick={() => setOpen(!open)}
                          className={`bg-white w-[132px] flex items-center justify-between rounded ${
                            selected ? 'text-black' : 'text-gray-500'
                          }`}
                        >
                          {selected
                            ? selected?.length > 25
                              ? selected?.substring(0, 25) + '...'
                              : selected
                            : 'Select Métier'}
                          <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
                        </div>
                        <ul
                          className={`bg-white mt-2 overflow-y-auto absolute w-[250px] h-[160px] ${
                            open ? 'block' : 'hidden'
                          } `}
                        >
                          {countries?.map(country => (
                            <li
                              key={country?.name}
                              className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                              ${country?.name?.toLowerCase() === selected?.toLowerCase() && 'bg-sky-600 text-white'}
                              ${country?.name?.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
                              onClick={() => {
                                if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                                  setSelected(country?.name)
                                  setOpen(false)
                                  setInputValue('')
                                }
                              }}
                            >
                              {country?.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className='border-r border-[#0a1c38]/20 flex flex-col gap-1 pr-6'>
                      <p>Localisation</p>
                      <div className='font-medium relative'>
                        <div
                          onClick={() => setOpen1(!open1)}
                          className={`bg-white w-[200px] flex items-center justify-between rounded ${
                            selected1 ? 'text-black' : 'text-gray-500'
                          }`}
                        >
                          {selected1
                            ? selected1?.length > 25
                              ? selected1?.substring(0, 25) + '...'
                              : selected1
                            : 'Select Localisation'}
                          <BiChevronDown size={20} className={`${open1 && 'rotate-180'}`} />
                        </div>
                        <ul
                          className={`bg-white mt-2 overflow-y-auto absolute w-[250px] h-[160px] ${
                            open1 ? 'block' : 'hidden'
                          } `}
                        >
                          {countries?.map(country => (
                            <li
                              key={country?.name}
                              className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                              ${country?.name?.toLowerCase() === selected1?.toLowerCase() && 'bg-sky-600 text-white'}
                              ${country?.name?.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
                              onClick={() => {
                                if (country?.name?.toLowerCase() !== selected1.toLowerCase()) {
                                  setSelected1(country?.name)
                                  setOpen1(false)
                                  setInputValue('')
                                }
                              }}
                            >
                              {country?.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className='flex flex-col gap-1 pr-6'>
                      <p>Date</p>
                      <div className='font-medium relative'>
                        <div
                          onClick={() => setOpen1(!open1)}
                          className={`bg-white w-[132px] flex items-center justify-between rounded ${
                            selected1 ? 'text-black' : 'text-gray-500'
                          }`}
                        >
                          {selected1
                            ? selected1?.length > 25
                              ? selected1?.substring(0, 25) + '...'
                              : selected1
                            : 'Select Date'}
                          <BiChevronDown size={20} className={`${open1 && 'rotate-180'}`} />
                        </div>
                        <ul
                          className={`bg-white mt-2 overflow-y-auto absolute w-[250px] h-[160px] ${
                            open1 ? 'block' : 'hidden'
                          } `}
                        >
                          {countries?.map(country => (
                            <li
                              key={country?.name}
                              className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                              ${country?.name?.toLowerCase() === selected1?.toLowerCase() && 'bg-sky-600 text-white'}
                              ${country?.name?.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
                              onClick={() => {
                                if (country?.name?.toLowerCase() !== selected1.toLowerCase()) {
                                  setSelected1(country?.name)
                                  setOpen1(false)
                                  setInputValue('')
                                }
                              }}
                            >
                              {country?.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className='w-[56px] h-[56px] cursor-pointer flex bg-[#1273D1] justify-center items-center rounded-full'>
                      <FiSearch color='#fff' size={28} />
                    </div>

                    {/* <div className=' flex flex-col gap-1 pr-6'>
                        <p>Date</p>
                        <div className='font-medium relative'>
                          <div
                            onClick={() => setOpen(!open)}
                            className={`bg-white w-[132px] flex items-center justify-between rounded ${
                              selected ? 'text-black' : 'text-gray-500'
                            }`}
                          >
                            {selected
                              ? selected?.length > 25
                                ? selected?.substring(0, 25) + '...'
                                : selected
                              : 'Select Métier'}
                            <BiChevronDown size={20} className={`${open && 'rotate-180'}`} />
                          </div>
                          <ul
                            className={`bg-white mt-2 overflow-y-auto absolute w-[250px] h-[160px] ${
                              open ? 'block' : 'hidden'
                            } `}
                          >
                            {countries?.map(country => (
                              <li
                                key={country?.name}
                                className={`p-2 text-sm hover:bg-sky-600 hover:text-white
                              ${country?.name?.toLowerCase() === selected?.toLowerCase() && 'bg-sky-600 text-white'}
                              ${country?.name?.toLowerCase().startsWith(inputValue) ? 'block' : 'hidden'}`}
                                onClick={() => {
                                  if (country?.name?.toLowerCase() !== selected.toLowerCase()) {
                                    setSelected(country?.name)
                                    setOpen(false)
                                    setInputValue('')
                                  }
                                }}
                              >
                                {country?.name}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div> */}
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

export default InitialPage
