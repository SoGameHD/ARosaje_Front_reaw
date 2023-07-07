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
    const response = await instance.get('/plants')
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getPlantById = async (id) => {
  try {
    const response = await instance.get(`plant/${id}`)
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
    const response = await instance.post(`plant`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const postAdvice = async (idPlant, data) => {
  try {
    const response = await instance.post(`/advice?plantId=${idPlant}&botanistId=-1`, data, {
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
    const response = await instance.delete("plant/" + idPlant)
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

const sendMessage = async (conv_id, user_id, content) => {
  try {
    const response = await instance.post(`message?conv=${conv_id}&user=${user_id}&content=${content}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const createConversation = async (name, sender_id, recept_id, content) => {
  try {
    const response = await instance.post(`/conversation?name=${name}&sender=${sender_id}&recept=${recept_id}&content=test`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getMessage = async (conv_id) => {
  try {
    const response = await instance.get(`message?conv_id=${conv_id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getConversation = async (user_id) => {
  try {
    const response = await instance.get(`conversation?user_id=${user_id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

const getConversationById = async (conv_id, user_id) => {
  try {
    const response = await instance.get(`conversation/${conv_id}?user_id=${user_id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getPlants,
  getPlantById,
  getPhotoById,
  postPlant,
  postAdvice,
  deletePlant,
  deleteUser,
  sendMessage,
  createConversation,
  getMessage,
  getConversation,
  getConversationById

}
