function setup() {
  createCanvas(1300, 600);
}
var gap = 30;
var b_number = "";
var optn = "unipolar_NRZ";
var color_value = '#ff0000';
let strk_weight = 2.53*2;
function draw() {
  background(227);
  translate(0, 100);
  show_graph(5, 60);
  stroke(color_value);
  for (i = 0; i < b_number.length; i++) {
    if (b_number[i] == 0) {
      line(gap, 40 + 20, gap + gap * 2, 40 + 20);
    }
    else if ((b_number[i] == 1)) {
      line(gap, 40, gap + gap * 2, 40);
    }
    translate(gap + gap, 0);
    if ((b_number[i] != b_number[i + 1]) && i < b_number.length - 1) {
      line(gap, 40, gap, 60);
    }
    noStroke();
    text(b_number[i], 0, 25);
    stroke(color_value);
  }
  stroke(0, 0, 0);
}

function show_graph(x, y) {
  strokeWeight(1);
  line(x, y, x + width, y);
  line(x, y + 40, x, y - 40);
  for (i = -1; i * gap < width; i = i + 2) {
    for (j = -10; j < 10; j++) {
      line((i * gap), y + (5 * j), (i * gap), y + (j * 5) + 2);
    }
  }
  strokeWeight(strk_weight);
}

function get_number() {
  b_number = document.getElementById('b_number').value;
}
