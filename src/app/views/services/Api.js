import axios from 'axios'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  timeout: 10000
})

const getPlants = async () => {
  try {
    const response = await api.get('/getPlants')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getPlantById = async (id) => {
  try {
    const response = await api.get(`/getPlant/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getPlants,
  getPlantById,
}
