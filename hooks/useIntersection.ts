import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useIntersection = (element: any, rootMargin: any) => {
  const [isVisible, setState] = useState(false)
  const route = useRouter()
  const routePath = route.pathname

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting)
      },
      { rootMargin }
    )

    element.current && observer.observe(element.current)

    if (typeof element.current === 'string') {
      return () => observer.unobserve(element.current)
    }
  }, [])

  return isVisible
}
