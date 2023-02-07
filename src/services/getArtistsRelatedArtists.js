import instance from "../instances/instance"

const getArtistsRelatedArtists = async (id) => {
  try {
    const response = await instance.get(`/artists/${id}/related-artists`)
    return response.data.artists
  }
  catch (error) {
    return []
  }
}

export default getArtistsRelatedArtists