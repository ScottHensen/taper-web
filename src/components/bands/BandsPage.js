import React from 'react'
import { Link } from 'react-router-dom'
import xhr from '../../utils/xhr'

class BandsPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bands: []
    }
    this.getBands = this.getBands.bind(this)
  }

  componentWillMount() {
    this.getBands()
  }

  getBands() {
    xhr.get(`/bands`).then(response => {
      this.setState({
        bands: response,
        // TODO: things to consider adding to taper data response
        //       if we do add stuff, put a key on the returned bands array too
        //       so that we can say bands: response.data.bands
        // totalPages: response.total_pages,
        // page: response.page
      })
    })
  }

  render() {
    const { bands } = this.state

    return (
      <div>
        <p>Bands</p>
        <ul>
          {bands.map(band => (
            <li key={band.bandId}>
              <Link to={`/bands/${band.bandId}`}>
                {`${band.bandName}`}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    )
  }

}

export default BandsPage
