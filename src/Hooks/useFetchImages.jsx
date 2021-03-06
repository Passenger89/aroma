import { useEffect } from 'react'
import unsplash from '../api/unsplash.js'

export const useFetchImages = (term, images, setImages) => {
  useEffect(() => {
    async function getResponse() {
      const response = await unsplash.get('/search/photos', {
        params: { query: term, per_page: 30 },
      })
      setImages(response.data.results)
      return images
    }
    getResponse()
  }, [])
}
