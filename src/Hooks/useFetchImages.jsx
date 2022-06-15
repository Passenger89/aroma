import { useEffect } from 'react'
import unsplash from '../api/unsplash.js'

export const useFetchImages = (term, images, setImages) => {
  useEffect(() => {
    async function getResponse() {
      const response = await unsplash.get('/search/photos', {
        params: { query: term, per_page: 50 },
      })
      console.log(response.data.results)
      setImages(response.data.results)
      return images
    }
    getResponse()
  }, [])
}
