import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

// These two containers are siblings in the DOM
const modalRootEl = document.getElementById('modal-root')

const Modal = ({ children }) => {
  // Create a div that we'll render the modal into. Because each
  // Modal component has its own element, we can render multiple
  // modal components into the modal container.
  const el = document.createElement('div')

  useEffect(() => {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    modalRootEl.appendChild(el)

    return () => {
      // Remove the element from the DOM when we unmount
      modalRootEl.removeChild(el)
    }
  }, [])

  // Use a portal to render the children into the element
  return ReactDOM.createPortal(
    // Any valid React child: JSX, strings, arrays, etc.
    children,
    // A DOM element
    el
  )
}

export default Modal
