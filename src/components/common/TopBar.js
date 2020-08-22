import React from 'react'
import Icon from '../Icons'
import './style.scss'

const TopBar = ({children}) => {
  return(
    <div className="Topbar">
      <h1 className="Topbar__h1">{children}</h1>
      <Icon name="stars" color="rgb(224, 36, 94)" size={23}/>
    </div>
  )
}

export { TopBar }