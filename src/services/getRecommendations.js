import instance from "../instances/instance"

const getRecommendations = async (artist, id='0c6xIDDpzE81m2q797ordA') => {
  try {
    const response = await instance.get(`/recommendations?seed_artists=${artist}&seed_tracks=${id}`)
    return response.data.tracks
  }
  catch (error) {
    return []
  }
}

export default getRecommendations