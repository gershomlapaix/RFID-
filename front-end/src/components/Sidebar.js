import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SiderbarData } from './SidebarData'
import {Link} from 'react-router-dom'
import '../navbar.css'
import { IconContext } from 'react-icons/lib'

export default function Detail() {

    const [siderbar, setSiderbar] = useState(false)

    const showSidebar = () => setSiderbar(!siderbar)

    return (
        // <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
            <Link to="#" className="menu-bars">
                <FaIcons.FaBars onClick={showSidebar} />
            </Link>

            <nav className={siderbar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>

                    {SiderbarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>            
        </div>
        </IconContext.Provider>
    )
}