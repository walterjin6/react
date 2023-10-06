import React from 'react'
import ReactDom from 'react-dom'
const OVERLAY_STYLES = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(1, 1, 1, 1)',
  zIndex: 1000,
  minHeight: '100vh',
  maxHeight: '10000px', // Set a very large value for maxHeight
  overflowY: 'auto' // Enable vertical scrolling
}
const TOP_STYLES = {
  position: 'FIXED',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'WHITE',
  zIndex: 1000,
}
export default function Modal({ open, children, onClose }) {
  if (!open) return null
  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} >
        <button className=" w-full text-left font-bold px-3 py-2 text-lg" style={TOP_STYLES} onClick={onClose}>&lt; Back</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}
