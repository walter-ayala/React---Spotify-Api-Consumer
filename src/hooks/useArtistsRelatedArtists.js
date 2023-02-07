import { useState, useEffect } from 'react'
import getArtistsRelatedArtists from '../services/getArtistsRelatedArtists'

const useArtistsRelatedArtists = (artist) => {
  const [artists, setArtists] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getArtistsRelatedArtists(artist)
      .then(response => {
        setArtists(response)
      })
      .finally(() => setLoading(false))
  }, [artist])

  return { artists, loading }
}

export default useArtistsRelatedArtists
