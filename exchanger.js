var outputR = document.getElementById("textR");
var outputG = document.getElementById("textG");
var outputB = document.getElementById("textB");
var hexText = document.getElementById("hex");
var r = document.querySelector(':root');
var rs = getComputedStyle(r);


var slider = document.getElementById("redSlider").oninput = function(){

    var value = (this.value)

    outputR.innerHTML = this.value;

    r.style.setProperty('--r',this.value);

    //HEX
    /*
    var hex = rgbToHex(rs.getPropertyValue('--r'),rs.getPropertyValue('--g'),rs.getPropertyValue('--b'));
    hexText.innerHTML = hex;
    */
    hexText.innerHTML = rgbToHex(rs.getPropertyValue('--r'),rs.getPropertyValue('--g'),rs.getPropertyValue('--b'));

}

var slider = document.getElementById("greenSlider").oninput = function(){

    var value = (this.value)

    outputG.innerHTML = this.value;

    r.style.setProperty('--g',this.value);

    //HEX
    /*
    var hex = rgbToHex(rs.getPropertyValue('--r'),rs.getPropertyValue('--g'),rs.getPropertyValue('--b'));
    hexText.innerHTML = hex;
    */
    hexText.innerHTML = rgbToHex(rs.getPropertyValue('--r'),rs.getPropertyValue('--g'),rs.getPropertyValue('--b'));

}

var slider = document.getElementById("blueSlider").oninput = function(){

    var value = (this.value)

    outputB.innerHTML = this.value;

    r.style.setProperty('--b',this.value);

    //HEX
    /*
    var hex = rgbToHex(rs.getPropertyValue('--r'),rs.getPropertyValue('--g'),rs.getPropertyValue('--b'));
    hexText.innerHTML = hex;
    */
    hexText.innerHTML = rgbToHex(rs.getPropertyValue('--r'),rs.getPropertyValue('--g'),rs.getPropertyValue('--b'));

}

function rgbToHex(r, g, b) {
    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
  }


//Hex translator
/* 
function valueToHex(c){
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r,g,b){
    return(valueToHex(r) + valueToHex(g) + valueToHex(b));
}
*/