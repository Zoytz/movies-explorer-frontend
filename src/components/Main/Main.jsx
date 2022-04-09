import React from 'react';

const Main = React.memo((props) => { 


  return (
    <>
      {props.children}
    </>
  );
})

export default Main;