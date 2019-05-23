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
        if(this.events[eventName]){
            this.events[eventName].forEach(callBack => callBack());
        }
        
    }

    /** 
    * //  should be able to accept others functions (logger)
    * @param {*} eventName 
    */
   emit(eventName){
    if(this.events[eventName]) {
        this.events[eventName].forEach(fn => fn.log(eventName));
    }
};
    
}