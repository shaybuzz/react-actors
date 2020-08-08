import React, { Component } from 'react';
import ActorCard from './ActorCard';
import 'bootstrap/dist/css/bootstrap.min.css';


function GalleryComp(props) {
    const { actors } = props;

    let cards = actors.map(actor => (
        <div className="col-sm">
            <ActorCard className="col-sm" key={actor.imdbId} actor={actor} />
        </div>
    ));

    return (

        <div className="container">
            <div className="row">
                {cards}
            </div>
        </div>
    )
}

export default GalleryComp;