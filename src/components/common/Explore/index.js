import React from 'react'
import './style.scss'
import Icon from '../../Icons'

const Explore = () => {
  return(
    <div className="explore">
      <div className="explore__search">
        <Icon name="search" color="#646C72" size={19} style={{ marginLeft: '18px'}} />
        <input type="text" placeholder="Buscar no Twitter" className="explore__search__input" />
      </div>
      <div className="explore__subject">
        <div className="explore__subject__h2">
          <h2>O que está acontecendo</h2>
        </div>
        <article className="explore__subject__hashtag">
          <span className="explore__subject__hashtag__span">Notícias</span>
          <h3 className="explore__subject__hashtag__h3">Trem de passageiros descarrila da Escócia</h3>
        </article>

        <article className="explore__subject__hashtag">
          <span className="explore__subject__hashtag__span">Assuntos do momento em Brasil</span>
          <h3 className="explore__subject__hashtag__h3">willy wonka</h3>
          <span className="explore__subject__hashtag__span">28,5 mil</span>
        </article>

        <article className="explore__subject__hashtag">
          <span className="explore__subject__hashtag__span">Clima</span>
          <h3 className="explore__subject__hashtag__h3">Neve pode atingir esados do Sul a partir de quinta-feira</h3>
        </article>

        <article className="explore__subject__hashtag">
          <span className="explore__subject__hashtag__span">Assuntos do momento em Brasil</span>
          <h3 className="explore__subject__hashtag__h3">Alok</h3>
        </article>

        <article className="explore__subject__hashtag">
          <span className="explore__subject__hashtag__span">Assuntos do momento em Brasil</span>
          <h3 className="explore__subject__hashtag__h3">Castração</h3>
          <span className="explore__subject__hashtag__span">14,3 mil</span>
        </article>
        <div className="explore__subject__more">
          <a href="#" className="explore__subject__more__link">Mostrar mais</a>
        </div>
      </div>
      <div className="explore__footer">
        <ul className="explore__footer__list">
          <li className="explore__footer__list__item">Termos</li>
          <li className="explore__footer__list__item">Política de Privacidade</li>
          <li className="explore__footer__list__item">Cookies</li>
          <li className="explore__footer__list__item">Informações de anúncios</li>
          <li className="explore__footer__list__item">Mais <Icon name="sit" color="rgb(110, 118, 125)" size={13} style={{ marginLeft: '1px', marginTop: '3px'}} /></li>
          <li className="explore__footer__list__item">&copy; 2020 Twitter, Inc.</li>
        </ul>
      </div>
    </div>
  )
}

export { Explore }