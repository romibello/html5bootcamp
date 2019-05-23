/*********************************************************** classes *****************************************************************/ 

let social = {
    share(friendName) {
      console.log(`${friendName} share ${this.title}`);
    },
    like(friendName) {
      console.log(`${friendName} like ${this.title}`);
    }
}

class Movie{
    constructor(name,year,duration){
        this.title=name;
        this.year=year;
        this.duration=duration;

    }

    play(){
        console.log("you are watching " + this.title + " movie");
    }

    pause(){
        console.log( this.title + " movie is paused");
    }

    resume(){
        console.log(+ this.title + " movie can be resume");
    }
}

Object.assign(Movie.prototype, social);

/*********************************************************** classes *****************************************************************/ 
/*********************************************************** test *****************************************************************/ 

let zombieland= new Movie("zombieland",2009,1);
zombieland.like("fulano");
zombieland.share("fulano");
zombieland.like("fulano");

/*********************************************************** test *****************************************************************/ 