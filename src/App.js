import React, { Component } from 'react';
import './App.css';
import ActorModel from './components/ActorModel';
import 'bootstrap/dist/css/bootstrap.min.css';
import GalleryComp from './components/GalleryComp';
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

function App() {
  return (
    <div class="container">
      <GalleryComp actors={actors} />
    </div>
  );
}

export default App;
