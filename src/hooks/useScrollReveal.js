import { useEffect, useRef } from 'react'

export function useScrollReveal(selector = '.reveal', threshold = 0.12) {
  const observerRef = useRef(null)

  useEffect(() => {
    const elements = document.querySelectorAll(selector)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
            observerRef.current.unobserve(entry.target)
          }
        })
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observerRef.current.observe(el))

    return () => {
      elements.forEach((el) => {
        if (observerRef.current) observerRef.current.unobserve(el)
      })
    }
  }, [selector, threshold])
}
