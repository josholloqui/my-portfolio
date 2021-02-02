import React, { useState } from 'react'
import MiniNav from '@components/MiniNav'
import Socials from '@components/Socials'

const Footer = () => {
  return (
    <footer className='bg-black h-auto mt-64'>
      <div className='grid grid-rows-3 grid-cols-none md:grid-rows-none md:grid-cols-3 w-full h-full'>
        <MiniNav />
        <div className='flex justify-center items-center row-start-3 md:row-start-auto'>
          <a href='/'>
            <img src='/JoshLogoWhite.svg' width='85' />
          </a>
        </div>
        <Socials />
      </div>
    </footer>
  )
}

export default Footer
