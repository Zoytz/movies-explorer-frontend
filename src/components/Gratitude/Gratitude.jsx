import React from 'react';
import cat from '../../images/2021.webp';

export const Gratitude = React.memo((props) => {

  return (
    <section className="gratitude" id="gratitude">
      <h2 className="section-title">Огромную помощь в создании проекта оказали:</h2>
      <ul className="gratitude__cats page__list">
        <li className="gratitude__cat gratitude__cat-image_type_kuzya">
          <h3 className="gratitude__title">Кот Кузя</h3>
          <img src={cat} alt="" className="gratitude__cat-image" />
        </li>
        <li className="gratitude__cat gratitude__cat-image_type_marusya">
          <h3 className="gratitude__title">Кошка Маруся</h3>
          <img src={cat} alt="" className="gratitude__cat-image" />
        </li>
        <li className="gratitude__cat gratitude__cat-image_type_top-kitten">
          <h3 className="gratitude__title">Котёнок Маркиз</h3>
          <img src={cat} alt="" className="gratitude__cat-image" />
        </li>
        <li className="gratitude__cat gratitude__cat-image_type_top-kitten">
          <h3 className="gratitude__title">Котёнок Маркиза</h3>
          <img src={cat} alt="" className="gratitude__cat-image" />
        </li>
        <li className="gratitude__cat gratitude__cat-image_type_bottom-kitten">
          <h3 className="gratitude__title">Котёнок Матроскин</h3>
          <img src={cat} alt="" className="gratitude__cat-image" />
        </li>
        <li className="gratitude__cat gratitude__cat-image_type_bottom-kitten">
          <h3 className="gratitude__title">Котёнок Кузьмич</h3>
          <img src={cat} alt="" className="gratitude__cat-image" />
        </li>
      </ul>
      <h2 className="gratitude__subtitle">Музыкальное сопровождение - великолепная Zivert:</h2>
      <iframe className="gratitude__player" src="https://www.youtube.com/embed/6OQtDhN5Q9k" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section >
  )
})