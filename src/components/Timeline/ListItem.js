import React, { useState } from 'react'
import { Avatar } from '../common'
import Icon from '../Icons'

const ListItem = ({item}) => {
  const [liked, setLiked] = useState(false)
  return(
    <li className="tweet">
      <Avatar size={50} radius src={item.user.avatar} />
      <div className="tweet__container">
        <div className="tweet__container__box">
          <span className="tweet__container__box__name">
          {item.user.name}
          </span>

          <span className="tweet__container__box__username">
            @{item.user.username}
          </span>

          <span className="tweet__container__box__hour">
            2h
          </span>
        </div>

        <div className="tweet__container__content">
          <p className="tweet__container__content__p">
          {item.tweet.text}
          </p>
          { item.tweet.img && item.tweet.img.map(img => <img src={img} className="tweet__container__content__img" />) }
        </div>

        <div className="tweet__container__icons">
          <Icon name="reply" color="rgb(110, 118, 125)" size={20} label="47" />
          <Icon name="retweet" color="rgb(110, 118, 125)" size={20} label="126" />
          <Icon name={liked ? 'heart-fill' : 'heart'} color={liked ? 'rgb(224, 36, 94)' : 'rgb(110, 118, 125)'} size={20} onClick={() => setLiked(!liked)} label="1053" />
          <Icon name="upload" color="rgb(110, 118, 125)" size={20} />
        </div>
      </div>
    </li>
  )
}

export default ListItem