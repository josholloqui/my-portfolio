
import Header from '@components/Header'
import About from '@components/About'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <About />
      <Footer />
    </div>
  )
}
