import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ActorCard(props) {
    const { actor } = props;

    let birthdayBoy = actor.isBirthday() ? <div><h3>Happy BirthDay!!!</h3>{actor.getFullName()}</div> : null;

    return (
        <div>
            <div className="border border-primary mb-3 w-25 p-3">
                <div className="card" styles="width: 18rem;">
                    <img className="card-img-top" src={actor.imageUrl} width='100px' alt="Card image cap"></img>
                    <div className="card-body">
                        <h5 className="card-title">{`${actor.fname} ${actor.lname}`}</h5>
                        <p className="card-text">{`the Age: ${actor.getAge()}`}{birthdayBoy}</p>
                        <a href={`https://www.imdb.com/name/${actor.imdbId}/`} target="_blank" className="btn btn-warning">IMDB</a>
                    </div>
                </div>
            </div>
        </div>
    );

}



export default ActorCard;