import React from 'react';
import './App.css';

import {Movies} from './Movies.json';
import FormMovie from './components/FormMovie';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
        Movies
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  remove(props) {
    this.setState({
      Movies: this.state.Movies.filter((e, i) => {
        return i !== props
      })
    });
  }

  edit(props){

  }

  handleAdd(props) {
    this.setState({
      Movies: [...this.state.Movies, props]
    })
    Movies.push(props);
  }

  render(){
    const movies = this.state.Movies.map((movie,i) => {
      return(
        <div className="col-md-4"  key={i}>
          <div className="card">
            <div className="card-header">
              <h4> {movie.title} </h4>
            </div>
            <div className="card-body">
              <p> {movie.duration} </p>
              <p> {movie.year} </p>
              <p> {movie.description} </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.remove.bind(this, i)}> Delete </button>
              <button className="btn btn-info" onClick={this.edit.bind(this, i)}> Edit </button>
            </div>
          </div>
        </div>
      )
   });

   //return the component
   return(
      <div className="container">
        <div className="row">
          <div className="col">
            <FormMovie onAddTodo={this.handleAdd}/>
          </div>
          <div className="col-8">
            <div className="App">
              <div className="container"> <div className="row mt-4"> {movies} </div> </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }

  
}

export default App;
