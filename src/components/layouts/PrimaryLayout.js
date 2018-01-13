import React from 'react'
import { Switch, Route } from 'react-router-dom'
import PrimaryHeader from './layout-helpers/PrimaryHeader'
import BandsPage from '../bands/BandsPage'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <PrimaryHeader />
    <div className="primary-content">
      <Switch>
        <Route path="/" exact component={BandsPage} />
      </Switch>
    </div>
  </div>
)

export default PrimaryLayout
