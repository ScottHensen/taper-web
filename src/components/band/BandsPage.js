import React from 'react'
import xhr from '../../utils/xhr'

class BandsPage extends React.Component {

  constructor(props) {
    super(props)
    console.log("this.props", this.props)
    this.state = {
      bands: [],
      bandId: null
    }
    this.getBands = this.getBands.bind(this)
  }

  componentWillMount() {
    const { match: { params } } = this.props
    const bandId = params.bandId
    this.setState({bandId})
    console.log("bandId=" + bandId)
    this.getBands(bandId)
  }

  getBands(id) {
    xhr.get(`/users/${id}`).then(response => {
      this.setState({
        bands: response.data,
        totalPages: response.total_pages,
        page: response.page
      })
    })
  }

  render() {
    const { bands } = this.state
    console.log("bands", bands)

    return (
      <div>
        <p>Bands</p>
        <h1>{bands.last_name}</h1>
        <img src={bands.avatar} alt={bands.last_name} />
    </div>
    )
  }

}
export default BandsPage
