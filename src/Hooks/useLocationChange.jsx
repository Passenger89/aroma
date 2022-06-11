import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const useLocationChange = handler => {
  const location = useLocation()

  useEffect(() => {
    handler()
  }, [location])
}
