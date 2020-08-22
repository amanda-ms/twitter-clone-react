import React from 'react'
import './style.scss'
import Icon from '../../Icons'
import { Button, Avatar } from '../'

const Sidebar = () => {
  return(
    <header className="sidebar">
      <figure className="sidebar__icon-twitter">
        <Icon name="twitter" color="rgba(217,217,217,1.00)" size={30} />
      </figure>

      <ul className="sidebar__list">
        <li className="sidebar__list__item">
          <a href="#" className="sidebar__list__item__page">
            <Icon name="home" color="rgba(217,217,217,1.00)" size={26} style={{ marginRight: '10px'}} />
            Página Inicial
          </a>
        </li>

        <li className="sidebar__list__item">
          <a href="#" className="sidebar__list__item__page">
            <Icon name="explore" color="rgba(217,217,217,1.00)" size={26} style={{ marginRight: '10px'}} />
            Explorar
          </a>
        </li>

        <li className="sidebar__list__item">
          <a href="#" className="sidebar__list__item__page">
            <Icon name="notification" color="rgba(217,217,217,1.00)" size={26} style={{ marginRight: '10px'}} />
            Notificações
          </a>
        </li>

        <li className="sidebar__list__item">
          <a href="#" className="sidebar__list__item__page">
            <Icon name="message" color="rgba(217,217,217,1.00)" size={26} style={{ marginRight: '10px'}} />
            Mensagens
          </a>
        </li>

        <li className="sidebar__list__item">
          <a href="#" className="sidebar__list__item__page">
            <Icon name="saved" color="rgba(217,217,217,1.00)" size={26} style={{ marginRight: '10px'}} />
            Itens salvos
          </a>
        </li>

        <li className="sidebar__list__item">
          <a href="#" className="sidebar__list__item__page">
            <Icon name="lists" color="rgba(217,217,217,1.00)" size={26} style={{ marginRight: '10px'}} />
            Listas
          </a>
        </li>

        <li className="sidebar__list__item">
          <a href="#" className="sidebar__list__item__page">
            <Icon name="profile" color="rgba(217,217,217,1.00)" size={26} style={{ marginRight: '10px'}} />
            Perfil
          </a>
        </li>

        <li className="sidebar__list__item">
          <a href="#" className="sidebar__list__item__page">
            <Icon name="more" color="rgba(217,217,217,1.00)" size={26} style={{ marginRight: '10px'}} />
            Mais
          </a>
        </li>
      </ul>

      <Button width={225} height={50}>Tweetar</Button>

      <div className="sidebar__profile">
        <Avatar size={40} radius src="https://avatars2.githubusercontent.com/u/59808416?s=460&u=58981469d609584af2a665aa29ed021677e63387&v=4" />
        <div className="sidebar__profile__info">
          <span className="sidebar__profile__info__name">Amandita</span>
          <span className="sidebar__profile__info__username">@ams_amandaa</span>
        </div>
        <Icon name="sit" color="rgba(217,217,217,1.00)" size={19} style={{ marginLeft: '58px'}} />
      </div>
    </header>
  )
}

export { Sidebar }