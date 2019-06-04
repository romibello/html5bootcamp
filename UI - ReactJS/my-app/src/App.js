import React from 'react';
import './App.css';

//import {Movies} from './Movies.json';
import FormMovie from './components/FormMovie';
import Movie from './components/Movie';

let isEdit = false;
let pos = 0;
let title = "Add a new Movie";

class App extends React.Component {
  constructor(){
    super();
    this.state = {//has an arrangement of movies
        Movies : [],
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

  handleEdit(props){/*save the position, change the title and the variable isEdit*/
    isEdit = true;
    pos=props;
    title = "change Movie";
    this.setState({
      Movies: this.state.Movies
    })
    console.log("pos y edit: " + isEdit);
    console.log(pos);
  }

  edit(props){/** save changes */
    const change = new Movie(props.title,props.duration,props.year,props.description);
    this.state.Movies[pos] = change;
    isEdit = false;
    title = "Add a new Movie";
    this.setState({
      Movies: this.state.Movies
    })
  }

  handleAdd(props) {/** control if it's a new movie or a change */
    if(isEdit){
      this.edit(props);
    }else{
      let movie = new Movie(props.title,props.duration,props.year,props.description);
      this.setState({
        Movies: [...this.state.Movies,movie]
      })
    }
  }

  render(){
    const movies = this.state.Movies.map((movie,i) => {
      return(
        <div className="col-md-4"  key={i}>
          <div className="card">
            <div className="card-header">
              <h4> {movie.state.title} </h4>
            </div>
            <div className="card-body">
              <p> {movie.state.duration} </p>
              <p> {movie.state.year} </p>
              <p> {movie.state.description} </p>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.remove.bind(this, i)}> Delete </button>
              <button className="btn btn-info" onClick={this.handleEdit.bind(this,i)}> Edit </button>
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
            <FormMovie title={title} onAddTodo={this.handleAdd}/>
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
