import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getRecommendations from '../services/getRecommendations'

const useRecommendations = (artist='4NHQUGzhtTLFvgF5SZesLK') => {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)
  const {id} = useParams()
  
  useEffect(() => {
    setLoading(true)

    getRecommendations(artist, id)
      .then(response => {
        setTracks(response)
      })
      .finally(() => setLoading(false))
  }, [id])

  return { tracks, loading }
}

export default useRecommendations
