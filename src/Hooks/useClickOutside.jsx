import { useEffect, useRef } from 'react'
export const useClickOutside = handler => {
  const domNode = useRef(null)

  useEffect(() => {
    function handleClick(event) {
      if (domNode.current && !domNode.current.contains(event.target)) {
        handler(false)
      }
    }
    document.addEventListener('mouseup', handleClick)
    return () => {
      document.removeEventListener('mouseup', handleClick)
    }
  }, [])

  return domNode
}
