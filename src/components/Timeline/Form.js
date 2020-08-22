import React from 'react'
import { Button, Avatar } from '../common'
import Icon from '../Icons'
import './style.scss'

const Form = () => {
  return(
    <>
      <div className="timeline">
        <div className="timeline__avatar">
          <Avatar size={50} radius src="https://avatars2.githubusercontent.com/u/59808416?s=460&u=58981469d609584af2a665aa29ed021677e63387&v=4"/>
        </div>
        <form className="timeline__form">
          <textarea placeholder="O que está acontecendo?" className="timeline__form__area" />
          <div className="timeline__form__container">
            <div className="timeline__form__container__icons">
              <Icon name="picture" color="rgb(224, 36, 94)" size={23} style={{ marginRight: '5px'}} />
              <Icon name="gif" color="rgb(224, 36, 94)" size={23} style={{ marginRight: '5px'}} />
              <Icon name="graph" color="rgb(224, 36, 94)" size={23} style={{ marginRight: '5px'}} />
              <Icon name="smile" color="rgb(224, 36, 94)" size={23} style={{ marginRight: '5px'}} />
              <Icon name="calendar" color="rgb(224, 36, 94)" size={23} />
            </div>
            <Button width={90} height={40} disabled>Tweetar</Button>
          </div>
        </form>
      </div>
    </>
  )
}

export { Form }