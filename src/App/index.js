import React, { Component } from 'react';
import './App.css';
import RouteMap from './../RouteMap'
import Home from './../Home/index'
import titleCase from 'title-case'

function PageSwitcher(props, element) {
 console.log('pageSwitcher', props.children)
 console.log(props.children)
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
  var Component = eval('Home')
  return <Component />
}

class App extends Component {
  
  render() {
    const nextRoute = 'HOME'


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
