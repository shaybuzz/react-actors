import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import ActorModel from './components/ActorModel';
import ActorCard from './components/ActorCard';
import 'bootstrap/dist/css/bootstrap.min.css';

import actorsMock from './components/actors-mock.json';
import { mockComponent } from 'react-dom/test-utils';

let actors = actorsMock.map(actor =>
  new ActorModel(
    actor.fname,
    actor.lname,
    actor.birthday,
    actor.imageUrl,
    actor.imdbId)
);

let cards = actors.map(actor => (
  <ActorCard lname={actor.lname} fname={actor.fname} imdbId={actor.imdbId} imageUrl={actor.imageUrl} />
));

console.log(actors[1].fname);

function App() {
  return (
    <div class="container">
      {cards}
    </div>
  );
}

export default App;
