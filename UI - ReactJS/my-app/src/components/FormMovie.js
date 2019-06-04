import React, {Component} from 'react';


class FormMovie extends Component{
    constructor(){
        super();
        this.state = {
            title: '',
            duration: '',
            year: '',
            description: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            title: '',
            duration: '',
            year: '',
            description: ''
        });
    }

    handleInputChange(e) {
       const {value, name} = e.target;
       console.log(value, name);
       this.setState({
         [name]: value
       });
    }
    
    render() {
        return(
            <div className="card">
                <form className="card-body" onSubmit={this.habndleSubmit}>
                    <label> Add a new Movie </label>
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