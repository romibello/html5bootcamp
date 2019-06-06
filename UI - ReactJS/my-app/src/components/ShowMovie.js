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
                <div className="card-footer">
                <button className="btn btn-danger" onClick={this.props.remove}> Delete </button>
                <button className="btn btn-info" onClick={this.props.edit}> Edit </button>
              </div>
            </div>
        )
    }
}

   


export default ShowMovie;
