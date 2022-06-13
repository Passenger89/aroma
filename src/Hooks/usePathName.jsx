import { useLocation } from 'react-router-dom'

export const usePathName = () => {
  let { pathname } = useLocation()
  // Remove forward slash from path
  pathname = pathname === '/' ? 'home' : pathname.substring(1, pathname.length)
  // Capitalise first letter
  pathname = pathname[0].toUpperCase() + pathname.substring(1)

  return pathname
}
