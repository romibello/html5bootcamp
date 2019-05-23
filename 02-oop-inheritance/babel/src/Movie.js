class Movie extends EventEmitter{
    constructor(name,year,duration){
        super();
        this.title=name;
        this.year=year;
        this.duration=duration;
        this.cast = [];

    }

    play(){
        console.log("you are watching " + this.title + " movie");        
    }

    pause(){
        console.log( this.title + " movie is paused");                
    }

    resumed(){
        console.log(+ this.title + " movie can be resume");
    }

    addCast(character){//add one or more actors to the cast 
        this.cast = this.cast.concat(character);
    }

    showCast(){
        this.cast.forEach((item)=>console.log(item));
    }

}