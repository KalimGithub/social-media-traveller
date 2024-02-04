import React from 'react'
import { LuHome } from "react-icons/lu";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiBookmark, CiUser } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
const Header = () => {

    

  return (
    <div className='header'>
          <div className='header-logo'>
              <a href="/">
                  TravelMedia.in
              </a>
          </div>
          <div className='header-icons-div'>
              <LuHome id='active-icon' />
              <IoIosNotificationsOutline />
              <CiBookmark />
              <CiUser />
          </div>
        <div className='right-header'>
                <FaBars id='menu-bar'/>
        </div>
    </div>
  )
}

export default Header