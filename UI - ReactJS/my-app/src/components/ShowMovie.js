import React, {Component} from 'react';


class ShowMovie extends Component{
    
    render(){
        return(
            <div className="card">
                <div className="card-header">
                    <h4> {this.props.Movie.title} </h4>
                </div>
                <div className="card-body">
                    <p> {this.props.Movie.duration} </p>
                    <p> {this.props.Movie.year} </p>
                    <p> {this.props.Movie.description} </p>
                </div>
            </div>
        )
    }
}

   


export default ShowMovie;
