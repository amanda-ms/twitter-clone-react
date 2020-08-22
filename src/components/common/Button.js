import React from 'react'

import './style.scss'


const Button = ({children, disabled, width, height}) => {
  return (
    <>
      <button className="button" disabled={disabled} style={{width:`${width}px`, height: `${height}px`}}>{children}</button>
    </>
  )
}

export { Button }