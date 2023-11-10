var v1 = v2 = r1 = r2 = rf = v0 = 0;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "red";
ctx.lineWidth = 2;


ctx.beginPath();
ctx.moveTo(540, 235);
ctx.lineTo(430, 295);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(540, 235);
ctx.lineTo(430, 175);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(430, 175);
ctx.lineTo(430, 295);
ctx.stroke();

//horizontal
ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(430, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(540, 235);
ctx.lineTo(710, 235);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 270);
ctx.lineTo(430, 270);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(490, 100);
ctx.lineTo(600, 100);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(420, 100);
ctx.lineTo(360, 100);
ctx.stroke();

ctx.beginPath();  
ctx.moveTo(140, 270);
ctx.lineTo(180, 270);
ctx.stroke();

ctx.beginPath();  
ctx.moveTo(140, 200);
ctx.lineTo(180, 200);
ctx.stroke();

ctx.strokeStyle = "black";
//opamp
ctx.beginPath();
ctx.moveTo(540, 235);
ctx.lineTo(430, 295);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(540, 235);
ctx.lineTo(430, 175);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(430, 175);
ctx.lineTo(430, 295);
ctx.stroke();

ctx.strokeStyle = "red";
//vertical

ctx.beginPath();
ctx.moveTo(360, 100);
ctx.lineTo(360, 200);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(600, 100);
ctx.lineTo(600, 235);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(369, 270);
ctx.lineTo(369, 309);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(369, 385);
ctx.lineTo(369, 425);
ctx.stroke();

ctx.strokeStyle = "black";
//resistor1

ctx.beginPath();
ctx.moveTo(180, 201);
ctx.lineTo(190,188);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(190, 188);
ctx.lineTo(200,212);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 212);
ctx.lineTo(210,188);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(210, 188);
ctx.lineTo(220,212);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(220, 212);
ctx.lineTo(230,188);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(230, 188);
ctx.lineTo(240,212);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 212);
ctx.lineTo(250,200);
ctx.stroke();

//resistor2

ctx.beginPath();
ctx.moveTo(180, 271);
ctx.lineTo(190,258);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(190, 258);
ctx.lineTo(200,282);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 282);
ctx.lineTo(210,258);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(210, 258);
ctx.lineTo(220,282);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(220, 282);
ctx.lineTo(230,258);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(230, 258);
ctx.lineTo(240,282);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(240, 282);
ctx.lineTo(250,270);
ctx.stroke();

//resistor3

ctx.beginPath();
ctx.moveTo(420, 101);
ctx.lineTo(430,88);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(430, 88);
ctx.lineTo(440,112);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(440, 112);
ctx.lineTo(450,88);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(450, 88);
ctx.lineTo(460,112);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(460, 112);
ctx.lineTo(470,88);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(470, 88);
ctx.lineTo(480,112);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(480, 112);
ctx.lineTo(490,100);
ctx.stroke();

//resistor4
      
ctx.beginPath();
ctx.moveTo(360, 380);
ctx.lineTo(370, 386);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(360, 380);
ctx.lineTo(380, 368);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(380, 368);
ctx.lineTo(360, 356);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(360, 356);
ctx.lineTo(380, 342);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(380, 342);
ctx.lineTo(360, 330);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(360, 330);
ctx.lineTo(380, 318);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(380, 318);
ctx.lineTo(368, 308);
ctx.stroke();

//ground
ctx.beginPath();  
ctx.moveTo(385, 450);
ctx.lineTo(355, 450);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(380, 455);
ctx.lineTo(360, 455);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(375, 460);
ctx.lineTo(365, 460);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(369, 385);
ctx.lineTo(369, 450);
ctx.stroke();
//ground 2

ctx.beginPath();
ctx.moveTo(715, 294);
ctx.lineTo(715, 345);
ctx.stroke();

ctx.beginPath();  
ctx.moveTo(700, 345);
ctx.lineTo(730, 345);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(705, 350);
ctx.lineTo(725, 350);
ctx.stroke();
      
ctx.beginPath();
ctx.moveTo(710, 355);
ctx.lineTo(720, 355);
ctx.stroke();


//dots
ctx.beginPath();
ctx.arc(137, 200, 5, 0, 2 * Math.PI);
ctx.fillStyle = 'black'; 
ctx.fill();

ctx.beginPath();
ctx.arc(137, 270, 5, 0, 2 * Math.PI);
ctx.fillStyle = 'black'; 
ctx.fill();

ctx.beginPath();
ctx.arc(369, 270, 5, 0, 2 * Math.PI);
ctx.fillStyle = 'black'; 
ctx.fill();

ctx.beginPath();
ctx.arc(360, 200, 5, 0, 2 * Math.PI);
ctx.fillStyle = 'black'; 
ctx.fill();

ctx.beginPath();
ctx.arc(715, 235, 5, 0, 2 * Math.PI);
ctx.fillStyle = 'black'; 
ctx.stroke();

ctx.beginPath();
ctx.arc(600, 235, 5, 0, 2 * Math.PI);
ctx.fillStyle = 'black'; 
ctx.fill();

ctx.beginPath();
ctx.arc(715, 290, 5, 0, 2 * Math.PI);
ctx.fillStyle = 'black'; 
ctx.stroke();


// resistor 1 naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("R1", 185, 175)

// resistor 2 naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("R2", 185, 300)

// resistor 3 naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Rf", 435, 75)

// resistor 4 naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("R3", 400, 345)

//positive naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("+", 435, 200)

//negative naming
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("_", 440, 260)

ctx.fillStyle = "black";
ctx.fillRect(200,200, 1, 1);

//voltage v1
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("V1", 105, 200)

//voltage v2
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("V2", 105, 271)

//output voltage
ctx.font = "bold small-caps 20px Arial";
ctx.textBaseline = "middle";
ctx.fillText("Vo", 730, 235)

function voltage1Display(volt){
  let text = `${volt} V`;
  ctx.fillStyle = "white";
  ctx.fillRect(90,210, 90, 30);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text,100,225)
  ctx.fillStyle = "black";
}

function voltage2Display(volt){
  let text = `${volt} V`;
  ctx.fillStyle = "white";
  ctx.fillRect(90,280, 90, 30);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text,100,295)
  ctx.fillStyle = "black";
}

function resistance2Display(res){
  let text = `= ${res} Ω`;
  ctx.fillStyle = "white";
  ctx.fillRect(220,285, 90, 30);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text,220,300)
  ctx.fillStyle = "black";
}

function resistance1Display(res){
  let text = `= ${res} Ω`;
  ctx.fillStyle = "white";
  ctx.fillRect(220,155, 90, 30);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text,220,175)
  ctx.fillStyle = "black";
}

function resistancefDisplay(res){
  let text = `= ${res} Ω`;
  ctx.fillStyle = "white";
  ctx.fillRect(470,55, 90, 30);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text,470, 75)
  ctx.fillStyle = "black";
}

function outputDisplay(volt){
  let text = `${volt} V`
  ctx.fillStyle = "white";
  ctx.fillRect(700,250, 150, 30);
  ctx.fillStyle = "black";
  ctx.font = "small-caps 20px Arial";
  ctx.textBaseline = "middle";
  ctx.fillText(text,710,260)
  ctx.fillStyle = "black";
}

//Initialise system parameters here
function varinit() {
  varchange();
  //Variable slider and number input types
  $("#voltage1Slider").slider("value", 0.05); // slider initialisation : jQuery widget
  $("#voltage1Spinner").spinner("value", 0.05); // number initialisation : jQuery widget
  
  $("#voltage2Slider").slider("value", 0.05); // slider initialisation : jQuery widget
  $("#voltage2Spinner").spinner("value", 0.05);
  //resistor 1
  $("#resistor1Slider").slider("value", 0.01);
  $("#resistor1Spinner").spinner("value", 0.01);
  //resistor 2
  $("#resistor2Slider").slider("value", 0.01);
  $("#resistor2Spinner").spinner("value", 0.01);
  //resistor 3
  $("#resistorfSlider").slider("value", 0.01);
  $("#resistorfSpinner").spinner("value", 0.01);
  // $("#CsArea").spinner("value", 0.01);
  // $("#Ivalue").spinner("value", 0.01);

  $('#voltage1Slider').slider("disable");
  $("#voltage1Spinner").spinner("disable");
  $('#voltage2Slider').slider("disable"); 
  $("#voltage2Spinner").spinner("disable");
  $('#resistor1Slider').slider("disable"); 
  $("#resistor1Spinner").spinner("disable");
  $('#resistor2Slider').slider("disable"); 
  $("#resistor2Spinner").spinner("disable");
  $('#resistorfSlider').slider("disable"); 
  $("#resistorfSpinner").spinner("disable");

  $("#add-to-table-btn").prop("disabled", true);
  $("#result-btn").prop("disabled", true);
  
}

function varchange() {
  $("#voltage1Slider").slider({ max: 30, min: 0, step: 1 });
  $("#voltage1Spinner").spinner({ max: 30, min: 0, step: 1 });

  $("#voltage1Slider").on("slide", function (e, ui) {
    $("#voltage1Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltage1Spinner").on("spin", function (e, ui) {
    $("#voltage1Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltage1Spinner").on("change", function () {
    varchange();
  });
 
  $("#voltage2Slider").slider({ max: 30, min: 0, step: 1 });
  $("#voltage2Spinner").spinner({ max: 30, min: 0, step: 1 });

  $("#voltage2Slider").on("slide", function (e, ui) {
    $("#voltage2Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltage2Spinner").on("spin", function (e, ui) {
    $("#voltage2Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#voltage2Spinner").on("change", function () {
    varchange();
  });

  // resistor 1

  $("#resistor1Slider").slider({ max: 200, min: 0, step: 1 });
  $("#resistor1Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistor1Slider").on("slide", function (e, ui) {
    $("#resistor1Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor1Spinner").on("spin", function (e, ui) {
    $("#resistor1Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor1Spinner").on("change", function () {
    varchange();
  });
  $("#resistor1Spinner").on("touch-start", function () {
    varchange();
  });

  // resistor 2
  $("#resistor2Slider").slider({ max: 200, min: 0, step: 1 });
  $("#resistor2Spinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistor2Slider").on("slide", function (e, ui) {
    $("#resistor1Spinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor2Spinner").on("spin", function (e, ui) {
    $("#resistor2Slider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistor2Spinner").on("change", function () {
    varchange();
  });
  $("#resistor2Spinner").on("touch-start", function () {
    varchange();
  });

  // resistor 3
  $("#resistorfSlider").slider({ max: 200, min: 0, step: 1 });
  $("#resistorfSpinner").spinner({ max: 200, min: 0, step: 1 });

  $("#resistorfSlider").on("slide", function (e, ui) {
    $("#resistorfSpinner").spinner("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistorfSpinner").on("spin", function (e, ui) {
    $("#resistorfSlider").slider("value", ui.value);
    time = 0;
    varupdate();
  });
  $("#resistorfSpinner").on("change", function () {
    varchange();
  });
  $("#resistorfSpinner").on("touch-start", function () {
    varchange();
  });
  //
  $("#CsArea").spinner({ max: 1, min: 0.01, step: 0.0001 });
  $("#Ivalue").spinner({ max: 1, min: 0.01, step: 0.0001 });
}
function varupdate() {
  $("#voltage1Spinner").spinner("value", $("#voltage1Slider").slider("value")); //updating slider location with change in spinner(debug)
  $("#voltage2Spinner").spinner("value", $("#voltage2Slider").slider("value"));
  $("#resistor1Spinner").spinner("value", $("#resistor1Slider").slider("value"));
  $("#resistor2Spinner").spinner("value", $("#resistor2Slider").slider("value"));
  $("#resistorfSpinner").spinner("value", $("#resistorfSlider").slider("value"));
  volt1 = $("#voltage1Spinner").spinner("value"); //Updating variables
  volt2 = $("#voltage2Spinner").spinner("value"); //Updating variables
  res1 = $("#resistor1Spinner").spinner("value");
  res2 = $("#resistor2Spinner").spinner("value");
  resf = $("#resistorfSpinner").spinner("value");

  resistance2Display(res2);
  resistance1Display(res1);
  resistancefDisplay(resf);
  voltage1Display(volt1);
  voltage2Display(volt2);

  v1Assign(volt1);
  v2Assign(volt2);

  let v0 = volt1*(resf/(res2+resf)*(1+ (resf/res1)))-((resf/res1)*volt2)
  // v0Assign(v0);

  if (isNaN(v0) || !isFinite(v0)) {
    v0Assign(0)    
    outputDisplay(0)
  }else{
    v0Assign(v0.toFixed(2));
    outputDisplay(v0.toFixed(2))
  }
  resis1Assign(res1);
  resis2Assign(res2);
  resisfAssign(resf);

// console.log(v0);
};

function v1Assign(volt) {
  v1 = volt;
  // console.log(v1);
}

function v2Assign(volt) {
  v2 = volt;
  // console.log(v1);
}

function v0Assign(volt) {
  v0 = volt;
  // console.log("v0",v0);
}

function resis1Assign(res) {
  r1 = res;
  // console.log(r1);
}

function resis2Assign(res) {
  r2 = res;
  // console.log(r2);
}

function resisfAssign(res) {
  rf = res;
  // console.log(rf);
}

function v0Assign(volt) {
  v0 = volt;
  console.log("v0",v0);
}


function startSimulation(){
  $('#voltage1Slider').slider("enable");
  $('#voltage2Slider').slider("enable");
  $('#resistor1Slider').slider("enable"); 
  $('#resistor2Slider').slider("enable"); 
  $("#voltage1Spinner").spinner("enable");
  $("#voltage2Spinner").spinner("enable");
  $("#resistor1Spinner").spinner("enable");
  $("#resistor2Spinner").spinner("enable");
  $("#resistorfSpinner").spinner("enable");
  $('#resistorfSlider').slider("enable"); 
  $("#simulate-btn").prop("disabled", true);
  $("#add-to-table-btn").prop("disabled", false);
  $("#result-btn").prop("disabled", false);
};

function addtable(){
  var table=document.getElementById("mytable");
  var row=table.insertRow(-1);
  var cell1=row.insertCell(0);
  var cell2=row.insertCell(1);
  var cell3=row.insertCell(2);
  var cell4=row.insertCell(3);
  var cell5=row.insertCell(4);
  var cell6=row.insertCell(5);

  cell1.innerHTML= v1;
  cell2.innerHTML= v2;
  cell3.innerHTML= r1;
  cell4.innerHTML= r2;
  cell5.innerHTML= rf;
  // cell5.classList.add("column-font");
  cell6.innerHTML= v0;
}

function showResult() {
  document.getElementById('result-display-div').style.display = 'block'    
}


window.addEventListener("load", varinit);