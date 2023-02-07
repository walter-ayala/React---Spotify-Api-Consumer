import { useState, useEffect } from 'react'
import getArtistsAlbums from '../services/getArtistsAlbums'

const useArtistsAlbums = (artist) => {
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getArtistsAlbums(artist)
      .then(response => {
        setAlbums(response)
      })
      .finally(() => setLoading(false))
  }, [artist])

  return { albums, loading }
}

export default useArtistsAlbums
