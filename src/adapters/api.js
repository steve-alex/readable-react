const API_ENDPOINT = 'http://localhost:3000/api';
const LOGIN_URL = `${API_ENDPOINT}/users/login`;
const SIGNUP_URL = `${API_ENDPOINT}/users/signup`;
const VALIDATE_URL = `${API_ENDPOINT}/users/validate`
const SEARCH_URL =`${API_ENDPOINT}/books/search`
const SHELF_URL = `${API_ENDPOINT}/shelves`
const BOOKS_URL = `${API_ENDPOINT}/books`
const REVIEWS_URL = `${API_ENDPOINT}/reviews`
const TIMELINE_URL = `${API_ENDPOINT}/users/timeline`

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
  }).then(resp => jsonify(resp))
}

const getTimeline = () => {
  return fetch(`${TIMELINE_URL}`, {
    headers: {
      Authorisation: localStorage.getItem("token")
    }
  }).then(res => jsonify(res))
}

const getBook = (bookid) => {
  return fetch(`${BOOKS_URL}/${bookid}`, {
    headers: {
      Authorisation: localStorage.getItem("token")
    }
  }).then(res => jsonify(res))
}

const findOrCreateBook = (book) => {
  return fetch(`${BOOKS_URL}/find_or_create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      book: book
    })
  }).then(resp => jsonify(resp))
}

const search = (query) => {
  return fetch(SEARCH_URL, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      query: query
    })
  }).then(resp => jsonify(resp))
}

const addBookToShelf = (book, shelfId) => {
  return fetch(`${SHELF_URL}/add_book`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      book: book,
      shelfId: shelfId
    })
  })
  .then(resp => jsonify(resp))
}

const createReview = (content, rating, bookId, userId) => {
  return fetch(`${REVIEWS_URL}`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorisation': localStorage.getItem("token")
    },
    body: JSON.stringify({
      content: content,
      rating: rating,
      book_id: bookId,
      user_id: userId,
      sentiment: 0
    })
  }).then(resp => jsonify(resp))
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
  getTimeline,
  search,
  addBookToShelf,
  findOrCreateBook,
  getBook,
  createReview,
  jsonify
}