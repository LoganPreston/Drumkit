/*specific object*/
var housekeeper1={
    yearsOfExperience:12,
    name:"Janice",
    cleaningRepetoir:["bedrooms","lobby"]
}

/*general case*/
function Housekeeper(name,yearsOfExperience,cleaningRepetoir){
    this.name=name;
    this.yearsOfExperience=yearsOfExperience;
    this.cleaningRepetoir=cleaningRepetoir;
    this.clean=function(){
        alert("Cleaning in prog...");
    }
}


/*object factory */
function BellBoy(name,age,hasWorkPermit,languages){
    this.name=name;
    this.age=age;
    this.hasWorkPermit=hasWorkPermit;
    this.languages=languages;
    this.moveSuitcase=function(){
        alert("May i have your suitcase");
        pickUpSuitcase();
        move();
    }
}

var bellBoy1=new BellBoy("Timmy",16,true,["English"]);