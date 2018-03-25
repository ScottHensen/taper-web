import React from 'react'
import Iframe from 'react-iframe'

class ShowPage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      embedUrl: ''
    }
    this.buildEmbedUrl = this.buildEmbedUrl.bind(this)
  }

  componentWillMount() {
    const { match: { params } } = this.props
    console.log("show.params=" + params)
    const bandId = params.bandId
    console.log("bandId=" + bandId)
    const showId = params.showId
    console.log("showId=" + showId)
    const url = this.buildEmbedUrl(showId)
    this.setState({
      embedUrl: url
    })

  }

  buildEmbedUrl(showId) {
    const baseUrl = 'https://archive.org/embed/'
    const autoplay = '&autoplay=1'
    // const numberOfShows = taperResp[0].shows.length
    //let i = 0
    // switch (this.state.resultFilter) {
    //   case 'last':
    //     i = numberOfShows - 1
    //     break
    //   case 'random':
    //     i = Math.floor(Math.random() * numberOfShows)
    //     break
    //   default:
    //     i = 0
    // }
    //
    // console.log('i',i)
    const url = baseUrl
              + showId 
              + autoplay
    console.log('url',url)
    return url
  }

  render() {
    const { shows } = this.state
    console.log("foo=" + shows)

    return (
      <div>
        <Iframe
            url={this.state.embedUrl}
            position="relative"
            display="initial"
            styles={{height: "30px"}} />
        <p>Embed URL = {this.state.embedUrl}</p>
      </div>
    )
  }
}
export default ShowPage
