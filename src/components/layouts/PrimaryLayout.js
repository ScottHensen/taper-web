import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrimaryHeader     from './layout-helpers/PrimaryHeader'
import BandsPage         from '../bands/BandsPage'
import BandPage          from '../band/BandPage'
import ShowPage          from '../show/ShowPage'

const PrimaryLayout = () => (

  <div className="primary-layout">
    <PrimaryHeader />
    <div className="primary-content">
      <Switch>
        <Route path="/"                      exact component={BandsPage} />
        <Route path="/bands"                 exact component={BandsPage} />
        <Route path="/bands/:bandId"         exact component={BandPage}   />
        <Route path="/bands/:bandId/shows/:showId" component={ShowPage} />
      </Switch>
      {/*TODO: Add footer*/}
    </div>
  </div>
)

export default PrimaryLayout
