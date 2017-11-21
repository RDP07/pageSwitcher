import React from 'react'
import FirstPage from './FirstPage/index'
import SecondPage from './SecondPage/index'

const routeMap = [
   {
    name: 'SIGNIN',
    path: '/signin',
    // action: () => goToHref('/signin'),
  },
  {
    name: 'HOME',
    path: '/:dealerId',
    // action: () => HOME,
  },
  {
    name: 'VENUE',
    path: '/:dealerId/:venueId',
    // action: () => VENUE,
  },
  {
    name: 'VEHICLE',
    path: '/:dealerId/:venueId/v/:vehicleId',
    // action: () => VEHICLE,
  },
  {
    name: 'PLUGINS',
    path: '/:dealerId/plugins',
    // action: () => PLUGINS,
  },
  {
    name: 'LOGOUT',
    path: '/logout',
    // action: () => goToHref('/signin'),
  },
]

export default routeMap
