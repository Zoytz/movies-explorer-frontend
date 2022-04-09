import React from 'react';

export const SavedMovies = React.memo((props) => {

  return (
    <section className="saved-movies">
      {props.children}
    </section>
  )
})