import React, {Component} from 'react';
import Movie from './Movie';

class FormMovie extends Component{
    constructor(){
        super();
        this.state = {
            Movie
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {/**send data */
        if((this.state.title) && (this.state.duration) && (this.state.year) && (this.state.description)){
            e.preventDefault();
            this.props.onAddTodo(this.state);
        }
    }

    handleInputChange(e) {
       const {value, name} = e.target;
       this.setState({
         [name]: value
       });
    }
    
    render() {
        return(
            <div className="card">
                <form className="card-body">
                    <label> {this.props.title} </label>
                    <div className="form-group">
                        <input type="text" name="title" className="form-control" placeholder="Title" required onChange={this.handleInputChange}></input>
                    </div>
                    <div className="form-group">
                        <input type="number" name="duration" className="form-control" placeholder="Duration" required onChange={this.handleInputChange}></input>
                    </div>
                    <div className="form-group">
                        <input type="number" name="year" className="form-control" placeholder="Year" required onChange={this.handleInputChange}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" name="description" className="form-control" placeholder="Description" required onChange={this.handleInputChange}></input>
                    </div>
                    <button className="btn btn-info" onClick={this.handleSubmit}> Save </button>
                </form>
            </div>
        )
    }

}

export default FormMovie;