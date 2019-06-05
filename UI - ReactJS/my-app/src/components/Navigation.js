import React, {Component} from 'react';

class Navigation extends Component{
    constructor(){
        super();
        this.state = {
            favorite: false
        }
        this.sendFilter = this.sendFilter.bind(this);
    }

    sendFilter(e) {/**send data */
        const {value, name} = e.target;
        e.preventDefault();
        this.setState({
            favorite:value
        })
        this.props.onAddTodo(this.state);
    }


    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
                <div className=" filter filter-basic">
                    <div className="filter-nav">
                        <button className="btn btn-success active" data-filter="" value="false"  onClick={this.sendFilter}>All</button>
                        <button className="btn btn-primary" data-filter="nature" value="true" onClick={this.sendFilter}>favorites</button>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navigation;