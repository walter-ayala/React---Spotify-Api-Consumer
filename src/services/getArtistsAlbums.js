import instance from "../instances/instance"

const getArtistsAlbums = async (id) => {
  try {
    const response = await instance.get(`/artists/${id}/albums?limit=4`)
    return response.data.items
  }
  catch (error) {
    return []
  }
}

export default getArtistsAlbums