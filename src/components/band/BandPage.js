import React from 'react'
import xhr from '../../utils/xhr'
import Show from '../show/Show'

class BandPage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      shows: [],
      filteredShows: [],
      search: ''
    }
    this.getShows = this.getShows.bind(this)
    this.handleChangeInDateFilter = this.handleChangeInDateFilter.bind(this)
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
        filteredShows: response
      })
    })
  }

  handleChangeInDateFilter(event) {
    this.setState({search: event.target.value})
  }

  render() {
    let filteredShows = this.state.shows.filter(
      (show) => {
        return show.showDate.indexOf(this.state.search) !== -1
      }
    )

    return (
      <div>
        <input type="text"
            id="filterDate"
            value={this.state.search}
            placeholder="YYYY-MM-DD"
            onChange={this.handleChangeInDateFilter} />
        <p>Shows</p>
        <ul>
          {filteredShows.map( (show) => {
            return <Show show={show} key={show.showId} />
          })}
        </ul>
      </div>
    )
  }

}
export default BandPage

// works
// <ul>
//   {shows.map(show => (
//     <li key={show.showId}>
//       <Link to={`/bands/${show.bandId}/shows/${show.showId}`}>
//         {`${show.title}`}
//       </Link>
//     </li>
//   ))}
// </ul>
