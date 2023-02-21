import React from 'react'
import { useLocation } from 'react-router-dom'
import useSelectedTrack from '../hooks/useSelectedTrack'

const Detail = () => {
  const { state } = useLocation()
  const { dataTrack, loading } = useSelectedTrack(state?.track)

  return (
    <div>
      <p>Detalle</p>
    </div>
  )
}

export default Detail