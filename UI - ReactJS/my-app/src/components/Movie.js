import React, {Component} from 'react';


class Movie extends Component{
    constructor(title,duration,year,description){
        super();
        this.state = {
            title: title,
            duration: duration,
            year: year,
            description: description
        }
    }

    setTitle(title){
        this.state.title=title;
    }

    setDuration(duration){
        this.state.duration=duration;
    }

    setYear(year){
        this.state.year=year;
    }

    setDescription(description){
        this.state.description=description;
    }

    render(){
        
        return  this.state

    }


}

export default Movie;