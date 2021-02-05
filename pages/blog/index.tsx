import Contact from '@components/Contact'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function ContactPage() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <Contact />
      <Footer />
    </div>
  )
}
