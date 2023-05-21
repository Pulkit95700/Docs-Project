import React from 'react'
import SlideBar from '../components/Bars/SlideBar'
import { Outlet } from 'react-router-dom'
const Home = (props) => {
  return (
    <div className='Home flex-1 flex'>
        <SlideBar toggleDocsMenu={props.toggleDocsMenu} openDocsMenu={props.openDocsMenu} />
        <div className='px-8 md:px-16 flex-1 overflow-y-scroll py-14'>
            <Outlet />
        </div>
    </div>
  )
}

export default Home