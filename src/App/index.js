import React, { Component } from 'react';
import './App.css';
import RouteMap from './../RouteMap'

function PageSwitcher(props) {
  return (
    <div>
      { props.children }
    </div>
  )
}

function pageRouter(nextRoute) {
  const route = RouteMap.filter((route) => {
    return route.name === nextRoute
  })
  return route[0].render
}

class App extends Component {
  
  render() {
    const nextRoute = 'HOME'
    console.log(pageRouter(nextRoute))

    return (
        <section className="pages">
         <PageSwitcher>
          { pageRouter(nextRoute) }
        </PageSwitcher>
        </section>
    );
  }
}

export default App;
