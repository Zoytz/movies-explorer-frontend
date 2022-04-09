import React from 'react';

export const Movies = React.memo((props) => {

return (
  <section className="movies">
    {props.children}
  </section>
)
})