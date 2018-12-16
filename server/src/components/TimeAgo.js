import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

export default function TimeAgo ({ timestamp, ...props }) {
  return <time {...props}>{moment(timestamp).fromNow()}</time>
}

TimeAgo.propTypes = {
  timestamp: PropTypes.number.isRequired
}
