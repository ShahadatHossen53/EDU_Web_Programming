function setup() {
  createCanvas(1300, 300);
}
var gap = 30;
var b_number = "110101";
var optn = "";
var optn_text = "";
var color_value = '#ff0000';
let strk_weight = 3.53;

function draw() {
  background(227);
  textSize(32);
  textAlign(CENTER);
  text(optn_text, width / 2, 50);
  translate(0, 100);
  if (optn == "unipolar_NRZ") {
    unipolar_NRZ();
  }
  else if (optn == "polar_NRZ_L") {
    polar_NRZ_L();
  }
  else if (optn == "polar_NRZ_I") {
    polar_NRZ_I();
  }
}
