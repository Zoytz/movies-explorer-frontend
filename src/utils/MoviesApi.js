class Api {
  constructor(config) {
    this._url = config.url;
  }

  _checkResOk(res) {

    if (res.ok) {
      return res.json();
    }
    return Promise.reject('Ошибка в moviesApi');
  }

  getMovies() {
    return fetch(`${this._url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(this._checkResOk)
  }

}

const moviesApi = new Api({
  url: 'https://api.nomoreparties.co/beatfilm-movies/',
})

export default moviesApi;