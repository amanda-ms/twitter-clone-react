import React from 'react'
import ListItem from './ListItem'

const List = ({data}) => {
  return(
    <ul>
      {
        data && data.map(item => <ListItem item={item} />)
      }
    </ul>
  )
}

export {List}