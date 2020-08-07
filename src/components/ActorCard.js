import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ActorCard(props) {
    const {actor} = props;

    return (
        <div class="border border-primary mb-3 w-25 p-3">
            <div className="card" styles="width: 18rem;">
                <img className="card-img-top" src={actor.imageUrl} width='100px' alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{`${actor.fname} ${actor.lname}`}</h5>
                    <p className="card-text">Some info.</p>
                    <a href={`https://www.imdb.com/name/${actor.imdbId}/`} className="btn btn-warning">IMDB</a>
                </div>
            </div>
        </div>
    );

}


export default ActorCard;