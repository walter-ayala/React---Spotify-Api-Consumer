import { useState, useEffect } from 'react'
import getCategories from '../services/getCategories'

const useCategories = () => {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    getCategories()
      .then(response => {
        setCategories(response)
      })
      .finally(() => setLoading(false))
  }, [])

  return { categories, loading }
}

export default useCategories
