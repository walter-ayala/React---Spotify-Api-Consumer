import instance from "../instances/instance"

const getTopTracks = async () => {
  try {
    const response = await instance.get('playlists/37i9dQZEVXbMDoHDwVN2tF')
    return response.data.tracks.items
  }
  catch (error) {
    return []
  }
}

export default getTopTracks