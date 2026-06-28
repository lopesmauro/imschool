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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches

    if (prefersReducedMotion || isCoarsePointer) {
      return
    }

    let animationFrame: number | null = null
    let currentScroll = window.scrollY
    let targetScroll = window.scrollY

    const getMaxScroll = () => document.documentElement.scrollHeight - window.innerHeight
    const clampScroll = (value: number) => Math.max(0, Math.min(value, getMaxScroll()))

    const syncScrollPosition = () => {
      if (animationFrame === null) {
        currentScroll = window.scrollY
        targetScroll = window.scrollY
      }
    }

    const animateScroll = () => {
      currentScroll += (targetScroll - currentScroll) * 0.99

      if (Math.abs(targetScroll - currentScroll) < 0.5) {
        currentScroll = targetScroll
        window.scrollTo(0, targetScroll)
        animationFrame = null
        return
      }

      window.scrollTo(0, currentScroll)
      animationFrame = window.requestAnimationFrame(animateScroll)
    }

    const handleSectionNavigate = (event: Event) => {
      const { id } = (event as CustomEvent<{ id?: string }>).detail ?? {}
      const element = id ? document.getElementById(id) : null

      if (!element) {
        return
      }

      event.preventDefault()

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame)
      }

      currentScroll = window.scrollY
      targetScroll = clampScroll(element.getBoundingClientRect().top + window.scrollY)
      animationFrame = window.requestAnimationFrame(animateScroll)
    }

    const handleWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
        return
      }

      event.preventDefault()

      const deltaMultiplier = event.deltaMode === 1 ? 18 : event.deltaMode === 2 ? window.innerHeight : 1
      const nextTarget = targetScroll + event.deltaY * deltaMultiplier

      if (animationFrame === null) {
        currentScroll = window.scrollY
        targetScroll = window.scrollY
      }

      targetScroll = clampScroll(nextTarget)

      if (animationFrame === null) {
        animationFrame = window.requestAnimationFrame(animateScroll)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('resize', syncScrollPosition)
    window.addEventListener('imschool:navigate', handleSectionNavigate)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('resize', syncScrollPosition)
      window.removeEventListener('imschool:navigate', handleSectionNavigate)

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame)
      }
    }
  }, [])

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
