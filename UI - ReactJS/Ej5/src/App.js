import React, {Component} from 'react';
import FormMovie from './components/FormMovie';
import ShowMovie from './components/ShowMovie';
import { connect } from "react-redux";
import { ADD_MOVIE } from './constants/action-types';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(data) {
    this.props.addMovie(data);
  }

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col">
            <FormMovie title="add a Movie" handleSubmit= {this.handleFormSubmit}/>
          </div>
          <div className="col-8">
             {this.props.movies ? <ShowMovie /> : null} 
          </div>
        </div>
        
      </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    moviesId: state.moviesId,
    editingId: state.editingId
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addMovie: (payload) => { dispatch({type: ADD_MOVIE, payload: payload})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
