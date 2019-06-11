import React from 'react';
import FormMovie from './FormMovie';
import { connect } from "react-redux";
import { DELETE_MOVIE, EDIT_MOVIE, HANDLE_EDIT_MOVIE } from '../constants/action-types';

function ShowMovie(props) {

  function handleDelete(e) {
    const id = parseInt(e.target.value);
    props.deleteMovie(id);
  }

  function handleSave(data) {
    props.editMovie(data);
  }

  function handleEdit(e) {
    const id = parseInt(e.target.value);
    props.handleEditMovie(id);
  }

  let movies = props.moviesId.map(id => {
    return(
      props.editingId === id ?
        <div>
          <FormMovie handleSubmit={handleSave}/>
        </div>
      :
        props.movies[id].favorite ?
          <div key={id} className="card text-white bg-dark mb-3">
            
            <div className="card-header">
            <h4> {props.movies[id].title} </h4>
            </div>
            <div className="card-body">
              <p> {props.movies[id].duration} </p>
              <p> {props.movies[id].year} </p>
              <p> {props.movies[id].description} </p>
            </div>
            <div className="card-footer">
              <button type="button" className="btn btn-danger" value={id} onClick={handleDelete}>Delete</button>
              <button type="button" className="btn btn-info" value={id} onClick={handleEdit}>Edit</button>
            </div>
          </div>
        :
          null
      );
    });
    return(
      <div className="card-columns">
        {movies}
      </div>
    )
}

//state of the store
const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    moviesId: state.moviesId,
    editingId: state.editingId
  }
}

//actions 
const mapDispatchToProps = (dispatch) => {
  return{
    deleteMovie: (id) => { dispatch({type: DELETE_MOVIE, id: id})},
    handleEditMovie: (id) => { dispatch({ type: HANDLE_EDIT_MOVIE, id: id})},
    editMovie: (input) => { dispatch({ type: EDIT_MOVIE, input: input})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowMovie);