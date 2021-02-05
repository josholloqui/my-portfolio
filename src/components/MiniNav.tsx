import React from 'react'
import Link from 'next/link'

const MiniNav = () => {
  return (
    <div className='flex flex-col justify-center pl-16 items-start md:pl-10 pt-8 md:pt-5 h-64'>
      <nav>
        <ul>
          <li className='pb-3'>
            <Link href='/'>
              <a className='text-white text-3xl md:text-2xl font-medium hover:underline'>About</a>
            </Link>
          </li>
          <li className='pb-3'>
            <Link href='/projects'>
              <a className='text-white text-3xl md:text-2xl font-medium hover:underline'>Projects</a>
            </Link>
          </li>
          <li className='pb-3'>
            <Link href='/blog'>
              <a className='text-white text-3xl md:text-2xl font-medium hover:underline'>Blog</a>
            </Link>
          </li>
          <li className='pb-3'>
            <Link href='/contact'>
              <a className='text-white text-3xl md:text-2xl font-medium hover:underline'>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default MiniNav
