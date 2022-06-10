import React from 'react';

const SearchResult = React.memo((props) => {


  return (
    <div className={`search-result search-result_active`}>
      {!props.isMoviesRequestSuccessful &&
        <p>
          Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      }
      {!props.isMoviesSearchSuccessful &&
        <p>
          Ничего не найдено
        </p>
      }
    </div>
  );
})

export default SearchResult;