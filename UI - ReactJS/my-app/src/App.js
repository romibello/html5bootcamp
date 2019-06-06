import React from 'react';
import './App.css';

import FormMovie from './components/FormMovie';
import ShowMovie from './components/ShowMovie';
import Navigation from './components/Navigation';


class App extends React.Component {
  constructor(){
    super();
    this.state = {//has an arrangement of movies
        Movies : [],
        editingId: -1,
        filter: false
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.edit = this.edit.bind(this);
    this.filter = this.filter.bind(this);
  }
    
  remove(props) {
    let Mov = this.state.Movies.filter((e, i) => {
        return i !== props
      });

    this.setState({
      Movies: Mov
    })
  }

  handleEdit(props){/*save the position, change the title and the variable isEdit*/
    this.setState({
      editingId: props
    })
  }

  edit(props){/** save changes */
    this.setState( prevState =>{
      let save = [...prevState.Movies];
      save[prevState.editingId] = props;
      let newState = {
        Movies: save,
        editingId: -1
      }
      return newState;
    })
  }

  filter(props){
    let favorites = props;
    this.setState({
      filter:favorites
    })
  }

  handleAdd(props) {/** add a new movie*/
    console.log(props);
      let save = [...this.state.Movies,props];
      this.setState( {
        Movies: save
      })
  }

  render(){
    const movies = this.state.Movies.length ? (this.state.Movies.map((movie,i) => {
      return(
        this.state.editingId == i ?
        <div className="col-md-4"  key={i}>
          <div className="card">
                <FormMovie onAddTodo={this.edit}/>
          </div>
        </div>
        :
        movie.favorite ?
        <div className="col-md-4"  key={i}>
          <div className="card">
              <ShowMovie Movie={movie} remove={this.remove.bind(this, i)} edit={this.handleEdit.bind(this,i)} />
          </div>
        </div>
        :
        null
      )
   })):(
     <p> Add a Movie please</p>
   )

   //return the component
   return(
      <div className="container">
        <Navigation onAddTodo={this.filter}/>
        <div className="row">
          <div className="col">
            <FormMovie title="add a Movie" onAddTodo={this.handleAdd}/>
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
