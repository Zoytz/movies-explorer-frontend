import React from 'react';
import developer from '../../images/2021.webp';

export const AboutMe = React.memo((props) => {

  return (
    <section className="developer" id="developer">
      <h2 className="section-title">Студент</h2>
      <div className="developer__container">
        <div className="developer__description">
          <h3 className="developer__title">Алексей</h3>
          <p className="developer__subtitle">Фронтенд-разработчик, 33 года</p>
          <p className="developer__text">Я родился и живу в Москве. Раньше работал в активных продажах, привлекал новые компании для сотрудничества. В свободное время самостоятельно изучал JS, HTML и CSS. Работать с кодом мне всегда нравилось больше, по этой причине я закончил курсы Яндекс.Практикум по специальности Веб-Разработчик. <span className="developer__span">😉</span>
          </p>
          <div className="developer__links">
            {/* <a target="_blank" rel="noreferrer" href="https://www.torproject.org/" className="developer__link page__link">Facebook</a> */}
            <a target="_blank" rel="noreferrer" href="https://github.com/" className="developer__link page__link">Github</a>
          </div>
        </div>
        <img src={developer} alt="" className="developer__image" />
      </div>
    </section >
  )
})