import React from 'react'
import { SocialIcon } from 'react-social-icons'

const Socials = () => {
  return (
    <div className='flex flex-col justify-center items-start md:items-end pr-0 pl-16 md:pl-0 md:pr-10 row-start-2 md:row-start-auto pb-24 md:pb-0'>
      <h2 className='text-white text-3xl md:text-2xl font-medium pr-24 pb-3 font-sans'>Connect:</h2>
      <ul className='flex'>
        <li className='pr-4'>
          <SocialIcon url='https://twitter.com/joshOlloqui' style={{ height: 38, width: 38 }} bgColor='#049cf1' fgColor='#1f1d2b' />
        </li>
        <li className='pr-4'>
          <SocialIcon url='https://www.linkedin.com/in/josholloqui/' style={{ height: 38, width: 38 }} bgColor='#049cf1' fgColor='#1f1d2b' />
        </li>
        <li className='pr-4'>
          <SocialIcon url='https://github.com/josholloqui' style={{ height: 38, width: 38 }} bgColor='#049cf1' fgColor='#1f1d2b' />
        </li>
        <li>
          <SocialIcon url='https://www.instagram.com/idkj.sh/' style={{ height: 38, width: 38 }} bgColor='#049cf1' fgColor='#1f1d2b' />
        </li>
      </ul>
    </div>
  )
}

export default Socials
