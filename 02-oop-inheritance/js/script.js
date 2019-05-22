/***********************************************************classes*****************************************************************/ 
class Movie{
    constructor(name,year,duration){
        this.title=name;
        this.year=year;
        this.duration=duration;

    }

    play(){
        console.log("playing: " + this.title + " movie");
        
    }

    pause(){
        console.log(this.title + " is paused");
        
    }

    resumed(){
        console.log("you can resume " + this.title + " movie");
        
    }
}

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
        let Arr = this.events[eventName];
        if(Arr){
            Arr.forEach(callBack => {
                callBack();
            });
        }
        
    }
}



/***********************************************************classes*****************************************************************/ 
/***********************************************************classes*****************************************************************/ 

let theNotebook= new Movie("the notebook",2004,2);
theNotebook.play();
theNotebook.pause();
theNotebook.resumed();
let goneGirl= new Movie("gone girl",2014,2,29);
goneGirl.play();
goneGirl.pause();
goneGirl.resumed();
let zombieland= new Movie("zombieland",2009,1);
zombieland.play();
zombieland.pause();
zombieland.resumed();


/***********************************************************classes*****************************************************************/ 
