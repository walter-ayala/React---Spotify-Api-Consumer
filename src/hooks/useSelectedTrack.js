import { useState, useEffect } from 'react'
import getCategories from '../services/getCategories'
import getTrack from '../services/getTrack'
import empty from '../utils/empty'
import { useParams } from 'react-router-dom'

const useSelectedTrack = (track) => {
  const [dataTrack, setDataTrack] = useState({})
  const [loading, setLoading] = useState(false)
  const {id} = useParams()

  useEffect(() => {
    if(!empty(track)) return setDataTrack(track)
    setLoading(true)
    getTrack(id)
      .then(response => {
        setDataTrack(response)
      })
      .finally(() => setLoading(false))
  }, [track])

  return { dataTrack, loading }
}

export default useSelectedTrack