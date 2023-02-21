import instance from "../instances/instance"

const getTrack = async (id) => {
  try {
    const response = await instance.get(`tracks/${id}`)
    return response.data
  }
  catch (error) {
    return {}
  }
}

export default getTrack