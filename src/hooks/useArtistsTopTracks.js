import { useState, useEffect } from 'react'
import getArtistsTopTracks from '../services/getArtistsTopTracks'

const useArtistsTopTracks = (artist) => {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getArtistsTopTracks(artist)
      .then(response => {
        setTracks(response)
      })
      .finally(() => setLoading(false))
  }, [artist])

  return { tracks, loading }
}

export default useArtistsTopTracks
