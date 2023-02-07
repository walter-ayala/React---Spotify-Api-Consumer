import { useState, useEffect } from 'react'
import getRecommendations from '../services/getRecommendations'

const useRecommendations = () => {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getRecommendations()
      .then(response => {
        setTracks(response)
      })
      .finally(() => setLoading(false))
  }, [])

  return { tracks, loading }
}

export default useRecommendations
