import React from 'react'
import xhr from '../../utils/xhr'

class BandsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      page: null,
      totalPages: null,
      bands: []
    }
    this.getBands = this.getBands.bind(this)
  }

  componentWillMount() {
    this.getBands(1)
  }

  getBands(page) {
    xhr.get(`/users?page=${page}`).then(response => {
      this.setState({
        bands: response.data,
        totalPages: response.total_pages,
        page: response.page
      })
    })
  }

  render() {
    const { bands, totalPages } = this.state
    if (!Array.isArray(bands)) return <div>Loading...</div>

    // A hacky way to make an array representing the pages we need
    const pages = [...Array(totalPages).keys()]

    return (
      <div>
        <h1>Bands</h1>
        <ul>
          {bands.map(band => (
            <li key={band.id}>{`${band.first_name} ${band.last_name}`}</li>
          ))}
        </ul>
        <div>
          {pages.map((x, i) => {
            return <button key={i} onClick={() => this.getBands(i + 1)}>{i + 1}</button>
          })}
        </div>
      </div>
    )
  }

}

export default BandsPage
