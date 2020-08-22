import React from 'react'
import './style.scss'

const Avatar = ({size, radius, src}) => {
  return(
    <>
      <figure className="avatar" style={{width:size, height: size, borderRadius: radius ? '50%' : 0}}>
        <img src={src} className="avatar__image" />
      </figure>
    </>
  )
}

export { Avatar }