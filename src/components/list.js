import React from 'react'
import { map } from 'ramda'
import styles from './list.css.js'
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  CardMedia
} from '@material-ui/core'

const createLineItem = classes => movie => {
  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Typography variant="headline">{movie.Title}</Typography>
        <Typography variant="subheading">Year: {movie.Year}</Typography>
      </CardContent>
      <CardMedia
        className={classes.media}
        image={movie.Poster}
        title={movie.Title}
      />
    </Card>
  )
}

const Movies = ({ movies, classes }) => {
  return (
    <div>
      <p>Results</p>
      <div>{map(createLineItem(classes), movies)}</div>
    </div>
  )
}

const higherOrderComponent = withStyles(styles)

export default higherOrderComponent(Movies)
