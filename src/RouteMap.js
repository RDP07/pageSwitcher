import React from 'react'
import FirstPage from './FirstPage/index'
import SecondPage from './SecondPage/index'
import Home from './Home/index'

const routeMap = [
   {
    name: 'SIGNIN',
    path: '/signin',
    // action: () => goToHref('/signin'),
    render: <FirstPage />
  },
  {
    name: 'HOME',
    path: '/:dealerId',
    // action: () => HOME,
    component: <Home />
  },
  {
    name: 'VENUE',
    path: '/:dealerId/:venueId',
    // action: () => VENUE,
    component: <SecondPage />
  },
  {
    name: 'VEHICLE',
    path: '/:dealerId/:venueId/v/:vehicleId',
    // action: () => VEHICLE,
    component: <FirstPage />
  },
  {
    name: 'PLUGINS',
    path: '/:dealerId/plugins',
    // action: () => PLUGINS,
    component: <FirstPage />
  },
  {
    name: 'LOGOUT',
    path: '/logout',
    // action: () => goToHref('/signin'),
    component: <SecondPage />
  },
]

export default routeMap
