const API_ENDPOINT = 'http://localhost:3000/api';
const LOGIN_URL = `${API_ENDPOINT}/users/login`;
const SIGNUP_URL = `${API_ENDPOINT}/users/signup`;
const VALIDATE_URL = `${API_ENDPOINT}/users/validate`
const SEARCH_URL =`${API_ENDPOINT}/books/search`
const SHELF_URL = `${API_ENDPOINT}/shelves`
const BOOKS_URL = `${API_ENDPOINT}/books`
const REVIEWS_URL = `${API_ENDPOINT}/reviews`
const TIMELINE_URL = `${API_ENDPOINT}/users/timeline`
const USERS_URL = `${API_ENDPOINT}/users`
const FOLLOW_URL = `${API_ENDPOINT}/follows`
const LIKES_URL = `${API_ENDPOINT}/likes`
const UPDATES_URL = `${API_ENDPOINT}/updates`
const PROGRESSES_URL = `${API_ENDPOINT}/progresses`
const COMMENTS_URL = `${API_ENDPOINT}/comments`
const COPY_URL = `${API_ENDPOINT}/copies`

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

const getUser = (userId) => {
  return fetch(`${USERS_URL}/${userId}`, {
    headers: {
      Authorisation: localStorage.getItem("token")
    }
  }).then(res => jsonify(res))
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

const getShelf = (shelfId) => {
  return fetch(`${SHELF_URL}/${shelfId}`).then(res => jsonify(res))
}

const getCopy = (copyId) => {
  return fetch(`${COPY_URL}/${copyId}`).then(res => jsonify(res))
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
      shelf_id: shelfId
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

const getUserProfile = (userId) => {
  return fetch(`${USERS_URL}/${userId}/profile`, {
    'headers': {
      'Authorisation': localStorage.getItem("token")
    }
  }).then(res => jsonify(res))
}

const unfollowUser = (userId) => {
  return fetch(`${FOLLOW_URL}/${userId}`, {
    'method': "DELETE",
    'headers': {
      'Authorisation': localStorage.getItem("token"),
    }
  }).then(res => jsonify(res))
}

const followUser = (userId) => {
  return fetch(`${FOLLOW_URL}`, {
    'method': "POST",
    'headers': {
      "Content-Type": "application/json",
      "Accept": "application/json",
      'Authorisation': localStorage.getItem("token"),
    },
    'body': JSON.stringify({
      id: userId
    })
  })
  .then(res => jsonify(res))
}

const likePost = (postId, postType) => {
  return fetch(LIKES_URL, {
    'method': "POST",
    'headers': {
      "Content-Type": "application/json",
      "Accept": "application/json",
      'Authorisation': localStorage.getItem("token"),
    },
    'body': JSON.stringify({
      likeable_id: postId,
      likeable_type: postType
    })
  })
  .then(res => jsonify(res))
}

const unlikePost = (likeId) => {
  return fetch(`${LIKES_URL}/${likeId}`, {
    'method': "DELETE",
    'headers': {
      "Content-Type": "application/json",
      "Accept": "application/json",
      'Authorisation': localStorage.getItem("token"),
    }
  })
  .then(res => jsonify(res))
}

const getUserShelves = (userId) => {
  return fetch(`${SHELF_URL}/${userId}`).then(res => jsonify(res))
}

const updateUserDetails = (userId, formData) => {
  return fetch(`${USERS_URL}/${userId}`, {
    'method': "PATCH",
    'headers': {
      "Accept": "application/json",
      'Authorisation': localStorage.getItem("token"),
    },
    'body': formData
  })
  .then(res => jsonify(res))
}

const createUpdate = (copyId, pageCount) => {
  return fetch(`${UPDATES_URL}`, {
    'method': "POST",
    'headers': {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorisation': localStorage.getItem("token"),
    },
    'body': JSON.stringify({
      copy_id: copyId,
      page_number: pageCount
    })
  })
  .then(res => jsonify(res))
}

const getPostComments = (post, postType) => {
  const url = (postType == "Progress") ? PROGRESSES_URL : REVIEWS_URL
  const id = post.id
  return fetch(`${url}/${id}/comments`, {
    'headers': {
      'Authorisation': localStorage.getItem("token"),
    }
  })
  .then(res => jsonify(res))
}

const createComment = (content, postType, postId) => {
  return fetch(`${COMMENTS_URL}`, {
    'method': "POST",
    'headers': {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorisation': localStorage.getItem("token"),
    },
    'body': JSON.stringify({
      content: content,
      commentable_type: postType,
      commentable_id: postId
    })
  })
  .then(res => jsonify(res))
}

const createProgress = (content) => {
  return fetch(`${PROGRESSES_URL}/submit`, {
    'method': "POST",
    'headers': {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorisation': localStorage.getItem("token"),
    },
    'body': JSON.stringify({
      content: content
    })
  })
  .then(res => jsonify(res))
}

const unlikeComment = (likeId) => {
  return fetch(`${LIKES_URL}/${likeId}`, {
    'method': "DELETE",
    'headers': {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorisation': localStorage.getItem("token"),
    }
  })
  .then(res => jsonify(res))
}

const likeComment = (commentId) => {
  let like = {likeable_id: commentId, likeable_type: "Comment"}
  return fetch(`${LIKES_URL}`, {
    'method': "POST",
    'headers': {
      "Accept": "application/json",
      "Content-Type": "application/json",
      'Authorisation': localStorage.getItem("token"),
    },
    'body': JSON.stringify(like)
  })
  .then(res => jsonify(res))
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
  getUser,
  login,
  logout,
  getTimeline,
  getShelf,
  search,
  addBookToShelf,
  findOrCreateBook,
  getBook,
  createReview,
  getUserProfile,
  unfollowUser,
  getCopy,
  followUser,
  getUserShelves,
  updateUserDetails,
  likePost,
  unlikePost,
  createUpdate,
  getPostComments,
  createComment,
  createProgress,
  unlikeComment,
  likeComment,
  jsonify
}