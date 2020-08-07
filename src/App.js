import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import ActorModel from './components/ActorModel';
import ActorCard from './components/ActorCard';

import actorsMock from './components/actors-mock.json';
import { mockComponent } from 'react-dom/test-utils';

// let actors = [];
// for(let i = 0 ; i < actorsMock.length ; i++){
//   actors.push(new ActorModel(
//     actorsMock[i].fname,
//     actorsMock[i].lname,
//     actorsMock[i].birthday,
//     actorsMock[i].imageUrl,
//     actorsMock[i].imdbId
//     ));
// }

let actorsDiv = actorsMock.map((actor, index) =>
  <div key={index}>{actor.lname} {actor.fname}</div>
);

let actors = actorsMock.map(actor =>
  new ActorModel(
    actor.fname,
    actor.lname,
    actor.birthday,
    actor.imageUrl,
    actor.imdbId)
);

console.log(actors[1].fname);

function App() {
  return (
    <div>
      <div>{actorsDiv}</div>
      <p>{actors[0].sayHello()}</p>
      <ActorCard />
    </div>
  );
}

export default App;
