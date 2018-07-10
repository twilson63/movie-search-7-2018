import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'ramda'
import { List, ListItem, ListItemText } from '@material-ui/core'

const li = movie => (
  <ListItem key={movie.imdbId}>
    <ListItemText>{movie.Title}</ListItemText>
  </ListItem>
)

const Movies = ({ movies }) => <List>{map(li, movies)}</List>

Movies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      Title: PropTypes.string,
      Poster: PropTypes.string,
      Year: PropTypes.string,
      Type: PropTypes.string,
      imdbId: PropTypes.string
    })
  )
}

Movies.defaultProps = {
  movies: []
}

export default Movies
