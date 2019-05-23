/***********************************************************classes*****************************************************************/ 


class Actor{
    constructor(name,age){
        this.name=name;
        this.age=age;

    }
}

class EventEmitter{ 
    constructor(){
        this.events={};
    }

    on(eventName, callBack){
        if(!this.events[eventName]){
            this.events[eventName]=[];
        }
        this.events[eventName].push(callBack);

    }

    off(eventName,callBack){
        if(this.events[eventName]){// create a new array with all the elements that meet the condition
            this.events[eventName] = this.events[eventName].filter((eventCallback)=>{
                callBack!==eventCallback;
            });
        }

    }

    emit(eventName){
        const Arr = this.events[eventName];
        if(Arr){
            Arr.forEach((callBack) => {
                if(typeof callBack === "Object"){
                    callBack.log(eventName);
                }
                else if(typeof callBack === "function"){
                    callBack();
                }
            })
        }
        
    }
}

class Movie extends EventEmitter{
    constructor(name,year,duration){
        super();
        this.title=name;
        this.year=year;
        this.duration=duration;
        this.cast = [];

    }

    play(){
        this.on("play",playMovie);
        this.emit("play");
        
    }

    pause(){
        this.on("pause",pauseMovie);
        this.emit("pause");
                
    }

    resumed(){
        this.on("resume",resumedMovie);
        this.emit("resume");
          
    }

    addCast(character){//add one or more actors to the cast 
        this.cast = this.cast.concat(character);
    }

    showCast(){
        this.cast.forEach((item)=>console.log(item));
    }
}

class Logger{
    constructor(){

    }

    log(info){
        console.log("the " + info + " event has been emitted");
    }

}

/***********************************************************classes*****************************************************************/ 
/***********************************************************functions*****************************************************************/ 

function playMovie(){
    console.log("play movie");
}

function pauseMovie(){
   console.log("you movie is paused");    
}

function resumedMovie(){
    console.log("you can resume the movie");
}



/***********************************************************functions*****************************************************************/ 
/*********************************************************** test *****************************************************************/ 

const theNotebook= new Movie("the notebook",2004,2);
/*theNotebook.play();
theNotebook.pause();
theNotebook.off("pause",pauseMovie);
theNotebook.pause();*/

const allie = new Actor("Allie",17);
const actors = [
    new Actor("Noah",19),
    new Actor("Joan",35),
    new Actor("Davis",40)
]

theNotebook.addCast(allie);
theNotebook.addCast(actors);
theNotebook.showCast();


let playLogger = new Logger();
theNotebook.on("play",playLogger.log("play"));

theNotebook.play();
/*theNotebook.resumed();
const goneGirl= new Movie("gone girl",2014,2,29);
goneGirl.play();
goneGirl.pause();
goneGirl.resumed();
const zombieland= new Movie("zombieland",2009,1);
zombieland.play();
zombieland.pause();
zombieland.resumed();


/*********************************************************** test *****************************************************************/ 
