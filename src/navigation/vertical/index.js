import { FaRegCalendar } from 'react-icons/fa'
import { FiClock, FiUser } from 'react-icons/fi'
import { IoSearchSharp } from 'react-icons/io5'
import { MdOutlineHome } from 'react-icons/md'
import { TbFileInvoice } from 'react-icons/tb'

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
      path: ['/chercher_pro', '/fichPro'],
      icon: <IoSearchSharp size={20} />
    },
    {
      title: 'Mes rendez-vous',
      path: '/mes_rendez_vous',
      icon: <FiClock size={20} />
    },
    {
      title: 'Compte',
      path: '/compte',
      icon: <FiUser size={20} />
    },
    {
      title: 'Invoice',
      path: ['/invoice', '/invoice/preview', '/invoice/edit', '/invoice/add'],
      icon: <TbFileInvoice size={20} />
    }
  ]
}

export default navigation
