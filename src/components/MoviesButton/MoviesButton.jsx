import React from 'react';

export const MoviesButton = React.memo((props) => {

return (
  <button onClick={props.handleChoseQuantityMultiplier} className={`movies-button ${props.isMoviesButtonActive ? 'movies-button_visible' : ''}`}>
    Ещё
  </button>
)
})