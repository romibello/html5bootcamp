import React, {Component} from 'react';

import {Movies} from '../Movies.json';

class ShowMovie extends Component{
    constructor(){
        super();
        this.state = {
            Movies
        }
    }

    

    render(){
         const movies = this.state.Movies.map((movie) => {
            return(
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            <h4> {movie.title} </h4>
                        </div>
                        <div className="card-body">
                            <p> {movie.duration} </p>
                            <p> {movie.year} </p>
                            <p> {movie.description} </p>
                        </div>
                    </div>
                </div>
            )
        })
        return(
            <div className="container">
                <div className="row mt-4">
                    {movies}
                </div>
            </div>
        )
    }
}

export default ShowMovie;
