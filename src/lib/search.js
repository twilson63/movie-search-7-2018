/* global fetch */
const searchUrl = process.env.URL
const token = process.env.TOKEN

/**
 * search
 *
 * searches for movies based on criteria
 *
 * @param criteria {string} - search criteria for moview
 * @returns results {array} - array of movies or emty array
 */
const search = async criteria => {
  const response = await fetch(`${searchUrl}?q=${encodeURI(criteria)}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  const data = await response.json()
  if (data.Response === 'False') {
    return []
  }
  return data.Search
}

export default search
