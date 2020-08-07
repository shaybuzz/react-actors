import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ActorCard() {

    return (
            <div class="border border-primary mb-3 w-25 p-3">
            <div className="card" styles="width: 18rem;">
                <img className="card-img-top" width="100px" src="https://m.media-amazon.com/images/M/MV5BMTM4NzMzMTkwNV5BMl5BanBnXkFtZTcwMzU4MDg1Mw@@._V1_.jpg" alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="https://www.imdb.com/name/nm0842770/" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
    );

}


export default ActorCard;