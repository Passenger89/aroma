import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollToTop = () => {
  let location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])
}

export default useScrollToTop
