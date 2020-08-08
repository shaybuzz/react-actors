import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchComp(props) {
    const { onSearch } = props;

    function onSearchName(env) {
        let searchTerm = env.target.value;
        if (onSearch) {
            onSearch(searchTerm);
        }
    }



    return (
        <div className="container">
            <label for="actor">Search Actor:</label>
            <input id="actor" type='text' onChange={onSearchName} ></input>
        </div>
    );

}

export default SearchComp;