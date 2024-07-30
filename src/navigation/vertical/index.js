import { MdOutlineHome } from 'react-icons/md'
import { FaRegCalendar } from 'react-icons/fa'
import { IoSearchSharp } from 'react-icons/io5'
import { FiClock } from 'react-icons/fi'
import { FiUser } from 'react-icons/fi'

const navigation = () => {
  return [
    // {
    //   title: 'Home',
    //   path: '/home',
    //   icon: 'mdi:home-outline',
    // },
    // {
    //   title: 'Second Page',
    //   path: '/second-page',
    //   icon: 'mdi:email-outline',
    // },
    // {
    //   path: '/acl',
    //   action: 'read',
    //   subject: 'acl-page',
    //   title: 'Access Control',
    //   icon: 'mdi:shield-outline',
    // }
    {
      title: 'Tableau de bord',
      icon: <MdOutlineHome />,
      path: '/home'
    },
    {
      title: 'Calendrier',
      path: '/calendrier',
      icon: <FaRegCalendar size={20} />
    },
    {
      title: 'Chercher un pro',
      path: '/chercher_pro',
      icon: <IoSearchSharp size={20} />
    },
    {
      title: 'Mes rendez-vous',
      path: '/homes',
      icon: <FiClock size={20} />
    },
    {
      title: 'Compte',
      path: '/homes',
      icon: <FiUser size={20} />
    }
  ]
}

export default navigation
