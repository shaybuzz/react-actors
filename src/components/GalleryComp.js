import React, { Component } from 'react';
import ActorCard from './ActorCard';
import 'bootstrap/dist/css/bootstrap.min.css';


function GalleryComp(props){
    const {actors} = props;

    let cards = actors.map(actor => (
        <ActorCard actor={actor} />
      ));

    return (
            <div>
               {cards}
            </div>
    )
}

export default GalleryComp;