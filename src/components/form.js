import React from 'react'
import PropTypes from 'prop-types'
import { TextField, Button } from '@material-ui/core'
import Component from '@reactions/component'

import search from '../lib/search'

const styles = {
  form: {
    display: 'flex',
    padding: '64px'
  },
  textfield: {
    flex: 'auto'
  }
}
/**
 * SearchForm
 *
 * This search form calls the search function and invokes the onResults function with
 * the movie results
 *
 * @param {object} props - onResults handler is included in this prop object
 */
const SearchForm = ({ onResults }) => {
  /**
   * Form
   *
   * Form Component for movie search
   *
   * @param {object} props - contains state and setState
   */
  const Form = ({ state, setState }) => {
    const handleSubmit = async e => {
      e.preventDefault()
      const results = await search(state.criteria)
      onResults(results)
    }

    const handleChange = e => {
      setState({
        criteria: e.target.value
      })
    }

    return (
      <form style={styles.form} onSubmit={handleSubmit}>
        <TextField
          style={styles.textfield}
          name="criteria"
          label="Search"
          value={state.criteria}
          onChange={handleChange}
        />
        <Button type="submit">Search</Button>
      </form>
    )
  }

  Form.propTypes = {
    state: PropTypes.shape({
      criteria: PropTypes.string
    }).isRequired,
    setState: PropTypes.func.isRequired
  }

  return <Component initialState={{ criteria: '' }}>{Form}</Component>
}

SearchForm.propTypes = {
  /**
   * function to report the movie results to the parent component
   */
  onResults: PropTypes.func.isRequired
}

export default SearchForm
