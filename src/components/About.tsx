import React from 'react'

const About = () => {
  return (
    <section>
      <div>
        <h1 className='pt-16 pb-4 text-center text-4xl font-medium' >Greetings, I'm Josh</h1>
      </div>
      <img
        src='/home.jpg'
        alt='Picture of Josh and his dog Finn'
        className='block mx-auto sm:px-16 w-full sm:max-w-6xl py-12'
      />
      <div>
        The wolves stopped in their tracks, sizing up the mother and her cubs. It had been over a week since their last meal and they were getting desperate. The cubs would make a good meal, but there were high risks taking on the mother Grizzly. A decision had to be made and the wrong choice could signal the end of the pack.
      </div>
    </section>
  )
}

export default About
