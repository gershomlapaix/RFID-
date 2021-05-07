import React from 'react'
import * as AiIcons from 'react-icons/ai'

export const SiderbarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiOutlineHome />,
        cName: 'nav-text'
    },

    {
        title: 'All Cards',
        path: '/register',
        icon: <AiIcons.AiOutlineLogin />,
        cName: 'nav-text'
    },

    {
        title: 'Transactions',
        path: '/transactions',
        icon: <AiIcons.AiOutlineDollarCircle />,
        cName: 'nav-text'
    },
]