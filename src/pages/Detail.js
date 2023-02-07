import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Detail = () => {
  const state = useLocation()

  useEffect(() => {
    console.log(state)
  }, [state])
  

  return (
    <div>
      <p>aja</p>
    </div>
  )
}

export default Detail