import React, {Component} from 'react';

/* I let the form to have his React state because I think that it state doesnt have an App global impact.
   And doesnt make a big chain of sending and receiving props and data. */
class FormMovie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      duration: '',
      year: '',
      description: '',
      favorite: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmit(this.state);
  }

  
  render() {
    return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
            <label> Add a Movie </label>
            <div className="form-group">
                <input type="text" name="title" className="form-control" placeholder="Title" required onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
                <input type="number" name="duration" className="form-control" placeholder="Duration" required onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
                <input type="number" name="year" className="form-control" placeholder="Year" required onChange={this.handleChange}></input>
            </div>
            <div className="form-group">
                <input type="text" name="description" className="form-control" placeholder="Description" required onChange={this.handleChange}></input>
            </div>
            <div className="form-group"> 
                <input type="checkbox" checked={this.state.favorite} name="favorite" onChange={this.handleChange}/> favorite
            </div>
            <button className="btn btn-info" > Save </button>
        </form> 
      </div>
      
    );
  }
}
export default FormMovie;
