import React, { Component } from 'react';
import './FirstPage.css';
import SecondPage from './../SecondPage/index'

export default class FirstPage extends Component {
  render () {
    return (
      <div className={ 'FirstPage' }>
        <h1> Hello Moto </h1>
        <SecondPage />
        <p> I am your FirstPage </p>
      </div>
    )
  }
}
