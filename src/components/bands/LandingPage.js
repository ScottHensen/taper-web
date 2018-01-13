import React from 'react'
import { Link } from 'react-router-dom'
import xhr from '../../utils/xhr'

class LandingPage extends React.Component {
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
    xhr.get(`/users`).then(response => {
      this.setState({
        bands: response.data,
        totalPages: response.total_pages,
        page: response.page
      })
    })
  }

  render() {
    const { bands } = this.state

    return (
      <div>
        <p>Landing</p>
        <ul>
          {bands.map(band => (
            <li key={band.id}>
              <Link to={`/bands/${band.id}`}>
                {`${band.last_name}`}
              </Link>
            </li>

          ))}
        </ul>
      </div>
    )
  }

}

export default LandingPage
