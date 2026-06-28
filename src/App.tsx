import { useEffect } from 'react'
import Contact from './components/Contact'
import About2 from './components/About'
import Flow from './components/Flow'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Testimonials from './components/Testimonials'


function App() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>('.fade-in, .fade-in-soft')

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    revealElements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />
      <Hero />
      <About2 />
      <Flow />
      <Contact />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
