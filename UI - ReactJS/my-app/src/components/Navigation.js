import React, {Component} from 'react';

class Navigation extends Component{
    render(){
        return(
            <div className="Nav">
                <a>
                    { this.props.titulo}
                </a>
            </div>
        )
    }
}

export default Navigation;