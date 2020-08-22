import React from 'react'
import { Form, List } from '../../components/Timeline'
import {items} from '../../data/timeline.json'
import { TopBar } from '../../components/common/TopBar'

import './style.scss'

const Timeline = () => {
  return (
    <div className="timeline-container">
      <TopBar>Página Inicial</TopBar>
      <Form />
      <List data={items} />
    </div>
  )
}

export default Timeline