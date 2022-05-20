export const BASE_URL = 'http://localhost:3000';

async  function checkResOk(res) {
  if (!res.ok) {
    const error = await res.json();
    return Promise.reject(new Error(error.message));
    // return res.json();
  }
  return res.json();
  // return Promise.reject();
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  })
    .then((response) => {
      return checkResOk(response);
    })
};


export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((response) => {
      return checkResOk(response)
    })
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  })
    .then((response) => {
      return checkResOk(response)
    })
};