import React from 'react';

export const AboutProject = React.memo((props) => {

  return (
    <section className="about" id="about-project">
      <h2 className="section-title">О проекте</h2>
      <ul className="about__items page__list">
        <li className="about__item">
          <h3 className="about__title">Дипломный проект включал 5 этапов</h3>
          <p className="about__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about__item">
          <h3 className="about__title">На выполнение диплома ушло 5 недель</h3>
          <p className="about__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="about__line page__list">
        <li className="about__line-item">
          <p className="about__line-subtitle about__line-subtitle_theme_green">1 неделя</p>
          <h4 className="about__line-title">Back-end</h4>
        </li>
        <li className="about__line-item">
          <p className="about__line-subtitle about__line-subtitle_theme_grey">4 недели</p>
          <h4 className="about__line-title">Front-end</h4>
        </li>
      </ul>
    </section>
  )
})