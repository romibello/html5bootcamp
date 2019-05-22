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
        this.events[eventName].push(callBack(this.title));
        console.log("this.events[eventName], en on, luego del push");
        console.log(this.events[eventName]);

    }

    off(eventName,callBack){
        if(this.events[eventName]){// create a new array with all the elements that meet the condition
            this.events[eventName] = this.events[eventName].filter((eventCallback)=>{
                callBack!==eventCallback;
            });
        }

    }

    emit(eventName){
        let Arr = this.events[eventName];
        console.log("emit");
        console.log(this.events[eventName]);
        if(Arr){
            Arr.forEach(callBack => {
                if(typeof callBack === "function"){
                    callBack();
                }else if(typeof callBack === "Object"){
                    callBack.log(eventName);
                }
            });
        }
        
    }
}

class Movie extends EventEmitter{
    constructor(name,year,duration){
        super();
        this.title=name;
        this.year=year;
        this.duration=duration;

    }

    play(){
        this.emit("play");
        this.on("play",playMovie);
    }

    pause(){
        this.emit("pause");
        this.on("pause",pauseMovie);        
    }

    resumed(){
        this.emit("resume");
        this.on("resume",resumedMovie);  
    }
}

/***********************************************************classes*****************************************************************/ 
/***********************************************************functions*****************************************************************/ 

function playMovie(title){
    return "playing: " + title + " movie";
}

function pauseMovie(title){
   return title + " is paused";    
}

function resumedMovie(title){
    return "you can resume " + title + " movie";
}



/***********************************************************functions*****************************************************************/ 
/*********************************************************** test *****************************************************************/ 

let theNotebook= new Movie("the notebook",2004,2);
theNotebook.play();
theNotebook.pause();
theNotebook.off("pause",pauseMovie);
theNotebook.pause();
/*theNotebook.resumed();
let goneGirl= new Movie("gone girl",2014,2,29);
goneGirl.play();
goneGirl.pause();
goneGirl.resumed();
let zombieland= new Movie("zombieland",2009,1);
zombieland.play();
zombieland.pause();
zombieland.resumed();


/*********************************************************** test *****************************************************************/ 
