import React from 'react';

export const MoviesCardList = React.memo((props) => {

  return (
    <ul className="movies-card-list page__list">
      {props.children}
    </ul >
  )
})