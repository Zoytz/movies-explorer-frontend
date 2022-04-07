import React from 'react';
import developer from '../../images/developer.png';

export const AboutMe = React.memo((props) => {

  return (
    <section className="developer" id="developer">
      <h2 className="section-title">Студент</h2>
      <div className="developer__container">
        <div className="developer__description">
          <h3 className="developer__title">Виталий</h3>
          <p className="developer__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="developer__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="developer__links">
            <a target="_blank" rel="noreferrer" href="https://www.torproject.org/" className="developer__link page__link">Facebook</a>
            <a target="_blank" rel="noreferrer" href="https://github.com/" className="developer__link page__link">Github</a>
          </div>
        </div>
        <img src={developer} alt="" className="developer__image" />
      </div>
    </section >
  )
})