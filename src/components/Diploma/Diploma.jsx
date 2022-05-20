import React from 'react';
import diploma from '../../images/diploma.jpg';
import diplomaBody from '../../images/diplomaBody.jpg';

export const Diploma = React.memo((props) => {

  return (
    <section className="diploma" id="diploma">
      <h2 className="section-title">Диплом</h2>
      <div className="diploma__images">
        <img src={diploma} alt="диплом" className="diploma__image" />
        <img src={diplomaBody} alt="диплом" className="diploma__image" />
      </div>
    </section >
  )
})