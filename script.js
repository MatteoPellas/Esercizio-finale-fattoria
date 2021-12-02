let mucca ={
    specie: "mucca",
    razza: "chianina",
    zampe: "4",
    fullName : function() {
        return this.specie + " " + this.razza+ " "+ this.zampe;
      }
}
let animale3 ={
    specie: "maiale",
    razza: "maiale",
    zampe: "4",
    fullName : function() {
        return this.specie + " " + this.razza+ " "+ this.zampe;
      }
}
let gallo ={
    specie: "gallina",
    razza: "andalusa",
    zampe: "2",
    fullName : function() {
        return this.specie + " " + this.razza+ " "+ this.zampe;
      }
}

function tastoGallo(){
    document.getElementById("testo").innerHTML = gallo.fullName()
}
function tastoMucca(){
    document.getElementById("testo").innerHTML = mucca.fullName()
}
function tastoMaiale(){
    document.getElementById("testo").innerHTML = animale3["fullName()"]
}