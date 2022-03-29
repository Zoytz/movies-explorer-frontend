import React from 'react';
import developer from '../images/developer.png';
import { Link } from 'react-router-dom';
import arrow from '../images/arrow.svg';

export const AboutMe = React.memo((props) => {

  return (
    <section className="developer">
      <h2 className="section-title">Студент</h2>
      <div className="developer__container">
        <div className="developer__description">
          <h3 className="developer__title">Виталий</h3>
          <p className="developer__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="developer__text">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <div className="developer__links">
            <Link to="#" className="developer__link">Facebook</Link>
            <Link to="#" className="developer__link">Github</Link>
          </div>
        </div>
        <img src={developer} alt="" className="developer__image" />
      </div>
      <h4 className="developer__portfolio">Портфолио</h4>
      <Link to="#" className="developer__portfolio-link">
        <p className="developer__portfolio-text">Статичный сайт</p>
        <img src={arrow} alt="Стрелка перехода" className="developer__portfolio-image" />
      </Link>
      <Link to="#" className="developer__portfolio-link">
        <p className="developer__portfolio-text">Адаптивный сайт</p>
        <img src={arrow} alt="Стрелка перехода" className="developer__portfolio-image" />
      </Link>
      <Link to="#" className="developer__portfolio-link">
        <p className="developer__portfolio-text">Одностраничное приложение</p>
        <img src={arrow} alt="Стрелка перехода" className="developer__portfolio-image" />
      </Link>
    </section >
  )
})