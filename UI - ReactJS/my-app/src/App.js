import React from 'react';
import './App.css';

import FormMovie from './components/FormMovie';
import ShowMovie from './components/ShowMovie';
import Navigation from './components/Navigation';

let isEdit = false;
let pos = 0;
let title = "Add a new Movie";
let favorites = false;

class App extends React.Component {
  constructor(){
    super();
    this.state = {//has an arrangement of movies
        Movies : [],
        editingId: -1
    }
    var state = this.state;
    this.handleAdd = this.handleAdd.bind(this);
    this.edit = this.edit.bind(this);
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
    isEdit = true;
    pos=props;
    title = "change Movie";
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
    isEdit=false;
    title = "Add a new Movie";
  }

  filter(props){
    favorites = props;
    console.log(favorites);
  }

  handleAdd(props) {/** control if it's a new movie or a change */
    if(isEdit){ 
      this.edit(props);
    }else{
      console.log(props);
      let save = [...this.state.Movies,props];
      this.setState( {
        Movies: save
      })
    }
  }

  render(){
    console.log("estado: " + favorites);
    const movies = this.state.Movies.length ? (this.state.Movies.map((movie,i) => {
      console.log(this.state.editingId);
      console.log(i);
      
      return(
        this.state.editingId == i ?
        <div className="col-md-4"  key={i}>
          <div className="card">
                <FormMovie onAddTodo={this.edit}/>
          </div>
        </div>
        :
        <div className="col-md-4"  key={i}>
        <div className="card">
            <ShowMovie Movie={movie}/>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.remove.bind(this, i)}> Delete </button>
              <button className="btn btn-info" onClick={this.handleEdit.bind(this,i)}> Edit </button>
            </div>
        </div>
      </div>
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
