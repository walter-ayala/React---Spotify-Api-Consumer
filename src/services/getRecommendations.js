import instance from "../instances/instance"

const getRecommendations = async () => {
  try {
    const response = await instance.get('/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=hip-hop,electronic,latino&seed_tracks=0c6xIDDpzE81m2q797ordA')
    return response.data.tracks
  }
  catch (error) {
    return []
  }
}

export default getRecommendations