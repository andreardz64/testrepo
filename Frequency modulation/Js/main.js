

var patch;
$.get("Pd/3-6-1-2-frequencymodulation.pd", function(patchStr) {
  patch = Pd.loadPatch(patchStr)
  Pd.start()
});

function setup(){

}



function draw(){
    console.log (Pd);
    console.log (mouseX);
    Pd.send('modAmp',[mouseX]);
    Pd.send('carr',[mouseY]);


}

function keyPressed(){
    P.send('on',[mouseX]);
}

function keyReleased(){
    Pd.send('off',[mouseX]);
}