import React from 'react'
import xhr from '../../utils/xhr'
import { Link } from 'react-router-dom'

class BandPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      shows: []
    }
    this.getShows = this.getShows.bind(this)
    console.log("this.props", this.props)
  }

  componentWillMount() {
    const { match: { params } } = this.props
    const bandId = params.bandId
    console.log("bandId=" + bandId)
    this.getShows(bandId)
  }

  getShows(id) {
    xhr.get(`/bands/${id}/shows`).then(response => {
      this.setState({
        shows: response,
      })
    })
  }

  render() {
    const { shows } = this.state
    console.log("foo=" + shows)

    return (
      <div>
        <p>Shows</p>
        <ul>
          {shows.map(show => (
            <li key={show.showId}>
              <Link to={`/bands/${show.bandId}/shows/${show.showId}`}>
                {`${show.title}`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

}
export default BandPage
