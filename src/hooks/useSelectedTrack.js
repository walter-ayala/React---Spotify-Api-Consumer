import { useState, useEffect } from 'react'
import getTrack from '../services/getTrack'
import empty from '../utils/empty'
import { useParams } from 'react-router-dom'

const useSelectedTrack = (track) => {
  const [dataTrack, setDataTrack] = useState({})
  const [loading, setLoading] = useState(false)
  const [artists, setArtists] = useState()
  const { id } = useParams()

  useEffect(() => {
    if (!empty(track)) {
      setDataTrack(track)
      const artistsToJoin = track.artists.length > 4 ? track.artists.slice(0,4) : track.artists  //if the artists' list is big
      const artistsList = artistsToJoin.map(u => u.id).join()
      setArtists(artistsList)
      return
    }

    setLoading(true)
    getTrack(id)
      .then(response => {
        setDataTrack(response)
        const artistsList = response.artists.map(u => u.id).join()
        setArtists(artistsList)
      })
      .finally(() => setLoading(false))
  }, [id])

  return { dataTrack, loading, artists }
}

export default useSelectedTrack