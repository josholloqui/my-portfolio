import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='md:px-6 px-6 bg-white flex flex-wrap items-center md:py-0 py-2 shadow-default'>
      <div className='flex flex-wrap items-start md:items-center'>
        <Link href='/'>
          <a>
            <img src='/JoshLogo.svg' width='40' />
          </a>
        </Link>
      </div>
      <label htmlFor='menu-toggle' className='pointer-cursor md:hidden flex flex-wrap items-center justify-end flex-1 w-full md:justify-between md:w-auto p-3'><svg className='fill-current text-gray-900' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'><title>menu</title><path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z'></path></svg></label>
      <input className='hidden' type='checkbox' id='menu-toggle' />
      <div className='hidden md:flex flex-wrap items-center justify-end flex-1 w-full md:justify-between md:w-auto pl-6' id='menu'>
        <nav>
          <ul className='md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0'>
            <li>
              <Link href='/'>
                <a className='md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 font-sans font-normal text-black'>About</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a className='md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 font-sans font-normal text-black'>Projects</a>
              </Link>
            </li>
            <li>
              <Link href='#'>
                <a className='md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 font-sans font-normal text-black'>Blog</a>
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <a className='md:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400 md:mb-0 mb-2 font-sans font-normal text-black' >Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
