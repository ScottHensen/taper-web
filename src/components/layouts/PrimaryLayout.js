import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrimaryHeader from './layout-helpers/PrimaryHeader'
import LandingPage from '../bands/LandingPage'
import BandsPage from '../band/BandsPage'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <PrimaryHeader />
    <div className="primary-content">
      <Switch>
        <Route path="/"        exact component={LandingPage} />
        <Route path="/bands"   exact component={LandingPage} />
        <Route path="/bands/:bandId" component={BandsPage}   />
      </Switch>
    </div>
  </div>
)

export default PrimaryLayout
