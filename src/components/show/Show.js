import React from 'react'
import { Link } from 'react-router-dom'

class Show extends React.Component {
  render() {
    return (
      <li key={this.props.show.showId}>
        <Link to={`/bands/${this.props.show.bandId}/shows/${this.props.show.showId}`}>
          {`${this.props.show.title}`}
        </Link>
      </li>
    )
  }

}

export default Show
