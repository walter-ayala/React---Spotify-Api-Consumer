import { useState, useEffect } from 'react'
import getTopTracks from '../services/getTopTracks'

const useTopTracks = () => {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getTopTracks()
      .then(response => {
        setTracks(response)
      })
      .finally(() => setLoading(false))
  }, [])

  return { tracks, loading }
}

export default useTopTracks
