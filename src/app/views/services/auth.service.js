import api from './axiosConfig'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const instance = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  timeout: 10000
})

const authenticate = async (jsonUser) => {
  const isValid = checkToken()
  if (!isValid) {
    try {
      const response = await instance.post(`/auth/authenticate`, jsonUser)
      localStorage.setItem('token', response.data.token)
      return response.data
    } catch (error) {
      console.error(error)
    }
  } else {
    return true
  }
}

const register = async (jsonUser) => {
  try {
    localStorage.clear()
    const response = await instance.post(`/auth/register`, jsonUser)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const logout = async () => {
  localStorage.clear()
  window.history.pushState({}, '', '/connexion')
  window.location.reload()
}

const getCurrentUser = async () => {
  try {
    const email = getCurrentUserEmail()
    if (email != false) {
      const response = await api.get(`/getUser?email=` + email)
      return response.data
    } else {
      return false
    }
  } catch (error) {
    console.error(error)
  }
}

function getCurrentUserEmail() {
  let token = localStorage.getItem('token')
  if (token) {
    let decodedToken = jwtDecode(token)
    return decodedToken.sub
  } else {
    return false
  }
}

function checkToken() {
  let token = localStorage.getItem('token')
  if (token) {
    let decodedToken = jwtDecode(token)
    let currentDate = new Date()
    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      localStorage.clear()
      return false
    } else {
      return true
    }
  } else {
    return false
  }
}

export { authenticate, logout, register, getCurrentUser, checkToken }
