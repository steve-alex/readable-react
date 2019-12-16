const API_ENDPOINT = 'http://localhost:3000/api';
const LOGIN_URL = `${API_ENDPOINT}/users/login`;
const SIGNUP_URL = `${API_ENDPOINT}/users/signup`;
const VALIDATE_URL = `${API_ENDPOINT}/users/validate`

const login = ({ email, password }) => {
  return fetch(LOGIN_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(resp => jsonify(resp))
  .then(data => {
    localStorage.setItem("token", data.token)
    return data.user;
  })
}

const logout = () => {
  localStorage.removeItem("token");
};

const validate = () => {
  return fetch(VALIDATE_URL, {
    headers: {
      Authorisation: localStorage.getItem("token")
    }
  })
  .then(resp => jsonify(resp))
}

const jsonify = (resp) => {
  if (!resp.ok)
    throw resp
  return resp.json()
    .then((data) => {
      if (data.errors)
        throw data.errors;
      else
        return data
    })
}

export default {
  validate,
  login,
  logout,
  jsonify
}