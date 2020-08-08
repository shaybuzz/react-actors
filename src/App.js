import React, { Component } from 'react';
import './App.css';
import ActorModel from './components/ActorModel';
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
    <div>
      <GalleryComp actors={actors} />
    </div>
  );
}

export default App;
