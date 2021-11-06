
function zoro_value(x, y) {
    line(x, y + 20, x + gap * 2, y + 20);
}
function possitiveFull(x, y) {
    line(x, y, x + gap * 2, y);
}
function negetiveFull(x, y) {
    line(x, y + 40, x + gap * 2, y + 40);
}

function toNegative(x, y){
    possitive(x,y);
    translate(gap,0);
    line(x,y+40,x,y);
    negetive(x,y);
  }


  function toPossitive(x, y){
    negetive(x,y);
    translate(gap,0);
    line(x,y+40,x,y);
    possitive(x,y);
  }

  function negetive(x, y){
    line(x+0,y+40,x+gap,y+40);
  }
  function possitive(x, y){
    line(x+0,y+0,x+gap,y+0);
  }
function show_graph(x, y) {
    strokeWeight(1);
    line(x, y, x + width, y);

    for (i = 1; i * gap < width; i = i + 2) {
        for (j = -10; j < 10; j++) {
            line((i * gap), y + (5 * j), (i * gap), y + (j * 5) + 2);
        }
    }
    strokeWeight(strk_weight);
}

function unipolar_NRZ() {
    show_graph(0, 60);
    stroke(color_value);
    for (i = 0; i < b_number.length; i++) {
        if (b_number[i] == 0) {
            zoro_value(gap, 40);
        }
        else if ((b_number[i] == 1)) {
            possitiveFull(gap, 40);
        }
        translate(gap + gap, 0);
        if ((b_number[i] != b_number[i + 1]) && i < b_number.length - 1) {
            line(gap, 40, gap, 60);
        }
        wText(b_number[i]);
    }
    stroke(0, 0, 0);
}
function polar_NRZ_L() {
    show_graph(0, 60);
    stroke(color_value);
    for (i = 0; i < b_number.length; i++) {
        if (b_number[i] == 0) {
            negetiveFull(gap, 40);
        }
        else if ((b_number[i] == 1)) {
            possitiveFull(gap, 40);
        }
        translate(gap + gap, 0);
        if ((b_number[i] != b_number[i + 1]) && i < b_number.length - 1) {
            line(gap, 40, gap, 80);
        }
        wText(b_number[i]);
    }
    stroke(0, 0, 0);
}
function polar_NRZ_I() {
    show_graph(0, 60);
    stroke(color_value);
    var value = 1;
    for (i = 0; i < b_number.length; i++) {
        if (value == 1) {
            if (b_number[i] == 0) {
                possitiveFull(gap, 40);
            }
            else if ((b_number[i] == 1)) {
                negetiveFull(gap, 40);
                value *= -1;
            }
        }
        else {
            if (b_number[i] == 0) {
                negetiveFull(gap, 40);
            }
            else if ((b_number[i] == 1)) {
                possitiveFull(gap, 40);
                value *= -1;
            }
        }
        translate(gap + gap, 0);
        if (b_number[i + 1] == 1) {
            line(gap, 40, gap, 80);
        }
        wText(b_number[i]);
    }
    stroke(0, 0, 0);
}

function manchester(){
    show_graph(5,60);
    stroke(color_value);
      for(i=0; i<b_number.length; i++){
        if(b_number[i] == 0){
          toNegative(gap,40);
        }
        else if((b_number[i] == 1)){
          toPossitive(gap,40);
        }
        translate(gap,0);
        if((b_number[i] == b_number[i+1])){
          line(gap,40,gap,80);
        }
        wText(b_number[i]);
      }
      stroke(0,0,0);
  }
  function differential_manchester(){
      show_graph(5,60);
      stroke(color_value);
      var value = 1;
      for(i=0; i<b_number.length; i++){
        if(value==1){
          if(b_number[i] == 0){
            toPossitive(gap,40);
          }
          else if((b_number[i] == 1)){
            toNegative(gap,40);
            value *= -1;
          }
        }
        else{
          if(b_number[i] == 0){
            toNegative(gap,40);
          }
          else if((b_number[i] == 1)){
            toPossitive(gap,40);
            value *= -1;
          }
        }
        translate(gap,0);
        if(b_number[i+1]==0){
          line(gap,40,gap,80);
        }
        wText(b_number[i]);
      }
      stroke(0,0,0);
  }

  function AMI(){
    show_graph(5,60);
    stroke(color_value);
    var value = 1;
    for(i=0; i<b_number.length; i++){
      if(value==1){
        if(b_number[i] == 0){
          zoro_value(gap,40);
        }
        else if((b_number[i] == 1)){
          possitiveFull(gap,40);
          value *= -1;
        }
      }
      else{
        if(b_number[i] == 0){
          zoro_value(gap,40);
        }
        else if((b_number[i] == 1)){
          negetiveFull(gap,40);
          value *= -1;
        }
      }
      translate(gap+gap,0);
      if(b_number[i]==0){
        if((b_number[i+1] == 1 && value==-1) && i<b_number.length-1){
          line(gap,60,gap,80);
        }
        else if((b_number[i+1] == 1 && value==1) && i<b_number.length-1){
          line(gap,60,gap,40);
        }
      }
      else if(b_number[i]==1){
        if((b_number[i+1] == 1) && i<b_number.length-1){
          line(gap,40,gap,80);
        }
        else if((b_number[i+1] == 0 && value==-1) && i<b_number.length-1){
          line(gap,60,gap,40);
        }
        else if((b_number[i+1] == 0 && value==1) && i<b_number.length-1){
          line(gap,60,gap,80);
        }
      }
      wText(b_number[i]);
    }
    stroke(0,0,0);
}


function select_option(value, optn_text_) {
    //optn = document.getElementById('wave_function').value; 
    optn = value;
    optn_text = optn_text_;
}
function get_number() {
    b_number = document.getElementById('b_number').value;
}
function wText(bit) {
    noStroke();
    textSize(16);
    text(bit, 0, 20);
    stroke(color_value);
}