function anotherAddEventListener(typeOfEvent, callback){

    var eventThatHappened={
        eventType:"keydown",
        key:"p",
        duration:2
    }

    if(eventThatHappened.eventType===typeOfEvent){
        callback(eventThatHappened);
    }
}