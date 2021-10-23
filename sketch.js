function setup() {
  createCanvas(1300, 1000);
}
var gap = 30;
var b_number = "110101";
var temp_b_number = b_number;
var optn = "";
var optn_text = "";
var trnslt = 0;
var color_value = '#ff0000';
let strk_weight = 2.53;
function draw(){
  background(227); 
  textSize(32);
  textAlign(CENTER);
  text(optn_text, width/2, 50);
  translate(0,100);
  //QPSK_temp();
  
    if(optn == "unipolar_NRZ"){
      unipolar_NRZ();
    }
    else if(optn == "polar_NRZ_L"){
      polar_NRZ_L();
    }
    else if(optn == "polar_NRZ_I"){
      polar_NRZ_I();
    }
    else if(optn == "polar_RZ"){
      polar_RZ();
    }
}
