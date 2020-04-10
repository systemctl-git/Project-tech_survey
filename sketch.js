var database = firebase.database();
var q_no = 1;
var form1, thanks;
var heading1, input1, title1;
var heading2, input2;
var heading3, input3;
var heading4, input4;
var submit;
var drawn = false;
var submitted = false;

function setup() {
    var canvas = createCanvas(800, 1200);
    form1 = new Form();
}

function draw() {
    background(255, 255, 255);
    console.log(mouseX, mouseY);
    form1.askQuestions();
}