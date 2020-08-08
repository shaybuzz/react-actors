import React, { Component, Suspense } from 'react';
import './App.css';
import ActorModel from './components/ActorModel';
import GalleryComp from './components/GalleryComp';
import SearchComp from './components/SearchComp';

import actorsMock from './components/actors-mock.json';
import { act } from '@testing-library/react';

function App() {
  
  const allActors = actorsMock.map(actor =>
    new ActorModel(
      actor.fname,
      actor.lname,
      actor.birthday,
      actor.imageUrl,
      actor.imdbId)
  );
  
  const [actors, updateActors] = React.useState(allActors);

  function searchActor(prefix) {
    if (prefix == undefined || prefix == "") {
      updateActors(allActors);
    }
    else {
      let sub = allActors.filter(actor => {
        return actor.isNamePrefix(prefix);
      });
      updateActors(sub);
    }
  }

  return (
    <div>
      <SearchComp onSearch={searchActor} />
      <GalleryComp actors={actors} />
    </div>
  );
}

export default App;
