import instance from './axiosConfig';

const getUsersPlants = async () => {
  try {
    const response = await instance.get('/plants')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getPlants = async () => {
  try {
    const response = await instance.get('/getPlants')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getPlantById = async (id) => {
  try {
    const response = await instance.get(`/getPlant/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getPhotoById = async (id) => {
  try {
    const response = await instance.get(`plants/1/pictures/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const postPlant = async (formData) => {
  try {
    const response = await instance.post(`addPlant`, formData)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const postAdvice = async (idPlant, data) => {
  try {
    const response = await instance.post(`/addAdvice?plantId=${idPlant}&botanistId=-1`, data, {
      headers: {
        'Content-Type': 'application/json'
      }})
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const deletePlant = async (idPlant) => {
  try {
    const response = await instance.delete("deletePlant/" + idPlant)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const deleteUser = async (data) => {
  try {
    const response = await instance.delete("user", data)
        
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getUsersPlants,
  getPlants,
  getPlantById,
  getPhotoById,
  postPlant,
  postAdvice,
  deletePlant,
  deleteUser,
}
