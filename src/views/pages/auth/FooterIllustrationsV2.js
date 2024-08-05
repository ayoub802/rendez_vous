// ** MUI Components
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

// Styled Components
const MaskImg = styled('img')(({ theme }) => ({
  zIndex: -1,
  bottom: '5%',
  width: '70%',
  position: 'absolute',
  right: '0%',
  [theme.breakpoints.down('lg')]: {
    bottom: '10.5%'
  }
}))
const FooterIllustrationsV2 = props => {
  // ** Props
  const { image } = props

  // ** Hook
  const theme = useTheme()

  // ** Vars
  const hidden = useMediaQuery(theme.breakpoints.down('md'))
  const src = image || `/asstes/LandingPage/shape.png`
  if (!hidden) {
    return <>{image && typeof image !== 'string' ? image : <MaskImg alt='mask' src={src} />}</>
    {
      /* <div className='absolute bottom-[7%] w-[80%] right-0 -z-10'>
      <Image src={src} alt='mask' width={10000} height={10000} className='w-[100%]' quality={100} />
      <div className='text-center'>Hello</div>
    </div> */
    }
  } else {
    return null
  }
}

export default FooterIllustrationsV2
