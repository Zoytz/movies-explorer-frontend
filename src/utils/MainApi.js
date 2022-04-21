class Api {
  constructor(config){
    this._url = config.url;
  }


  getSavedMovies(token) {
    return fetch(`${this._url}movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkResOk)
  }

  addMovie(data, token) {
    return fetch(`${this._url}movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
    .then(this._checkResOk)
  }

  deleteMovie(movieId, token) {
    return fetch(`${this._url}movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkResOk)
  }

  getUserInfo(token) {
    return fetch(`${this._url}users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
    .then(this._checkResOk)
  }

  editUserInfo(data, token) {
    return fetch(`${this._url}users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    })
    .then(this._checkResOk)
  }

  _checkResOk(res) {
    
      if (res.ok){
        return  res.json();
      }
      return Promise.reject(res);
  }
}

const mainApi = new Api({
  url: 'http://localhost:3000/',
})

export default mainApi;