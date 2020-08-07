import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import actorsModel from './components/actors-mock.json';
import { mockComponent } from 'react-dom/test-utils';

console.log(actorsModel);
let actor = actorsModel[0];



function App() {
  return (
    <div>
        Hello {actor.fname + " " + actor.lname}
    </div>
  );
}

export default App;
