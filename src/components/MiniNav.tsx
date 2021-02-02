import React from 'react'

const MiniNav = () => {
  return (
    <div className='flex flex-col justify-center pl-16 items-start md:pl-10 pt-8 md:pt-5 h-64'>
      <nav>
        <ul>
          <li className='pb-3'>
            <a href='/' className='text-white text-3xl md:text-2xl font-medium hover:underline'>About</a>
          </li>
          <li className='pb-3'>
            <a href='/projects' className='text-white text-3xl md:text-2xl font-medium hover:underline'>Projects</a>
          </li>
          <li className='pb-3'>
            <a href='/blog' className='text-white text-3xl md:text-2xl font-medium hover:underline'>Blog</a>
          </li>
          <li className='pb-3'>
            <a href='/contact' className='text-white text-3xl md:text-2xl font-medium hover:underline'>Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MiniNav
