import instance from "../instances/instance"

const getArtistsTopTracks = async (id) => {
  try {
    const response = await instance.get(`/artists/${id}/top-tracks?market=ES`)
    return response.data.tracks
  }
  catch (error) {
    return []
  }
}

export default getArtistsTopTracks