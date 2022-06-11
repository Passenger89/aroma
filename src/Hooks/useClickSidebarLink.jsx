import { useEffect, useRef } from 'react'

export const useClickSidebarLink = (handler, condition) => {
  let domNode = useRef()
  useEffect(() => {
    let maybeHandler = e => {
      if (!domNode.current?.contains(e.target)) {
        handler()
      }
    }
    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })
  return domNode
}
