import React from 'react'

const About = () => {
  return (
    <section>
      <div>
        <h1 className='pt-16 pb-4 text-center text-4xl sm:text-5xl font-medium' >Greetings, I'm Josh</h1>
      </div>
      <img
        src='/home.jpg'
        alt='Picture of Josh and his dog Finn'
        className='block mx-auto px-10 sm:px-16 w-full sm:max-w-6xl py-12'
      />
      <div className='flex justify-center items-center'>
        <p className='w-full text-justify sm:max-w-6xl mx-auto px-10 sm:px-16 font-serif'>
          Full Stack Software Engineer with a passion for creative and innovated solutions for complex problems with a focus on clean and efficient code. Self-motivated in striving to learn new languages and frameworks to remain agile. I enjoy making, breaking, and making web things more efficient. Dedicated to making an impact in the world, and influencing society through technology.
        </p>
      </div>
    </section>
  )
}

export default About
