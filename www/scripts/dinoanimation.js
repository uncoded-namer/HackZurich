var canvas;
var context;
var images = {};
var totalResources = 3; // TODO: think
var numResourcesLoaded = 0;
var fps = 30;
var charX = 150;
var charY = 185;
var fpsInterval = setInterval(updateFPS, 1000);
var numFramesDrawn = 0;
var curFPS = 0;

// TODO: refactor

var recommendedEnergy = 2000;
var recommendedProtein = 50;
var recommendedFat = 70;
var recommendedSaturatedFat = 24;
var recommendedCarbohydrates = 310;
var recommendedSugar = 90;
var recommendedSalt = 2.3;
var recommendedFiber = 30; // g
var recommendedWater = 1.5; // L
var recommendedVegetables = 3; // pieces
var recommendedFruits = 2; // kilos


var energy = recommendedEnergy;
var protein = recommendedProtein;
var fat = recommendedFat;
var saturatedFat = recommendedSaturatedFat;
var carbohydrates = recommendedCarbohydrates;
var sugar = recommendedSugar;
var salt = recommendedSalt;
var fiber = recommendedFiber;
var water = recommendedWater;
var vegetables = recommendedVegetables;
var fruits = recommendedFruits;


function updateFPS() {

    curFPS = numFramesDrawn;
    numFramesDrawn = 0;
}

function clearCanvas() {
    canvas.width = canvas.width;
} 

function prepareCanvas(canvasDiv, canvasWidth, canvasHeight) {
    // Create the canvas (Neccessary for IE because it doesn't know what a canvas element is)
    canvas = document.createElement('canvas');
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
    canvas.setAttribute('id', 'canvas');
    canvasDiv.appendChild(canvas);

    if (typeof G_vmlCanvasManager != 'undefined') {
        canvas = G_vmlCanvasManager.initElement(canvas);
    }
    context = canvas.getContext("2d"); // Grab the 2d canvas context
    // Note: The above code is a workaround for IE 8and lower. Otherwise we could have used:
    //     context = document.getElementById('canvas').getContext("2d");


    clearCanvas();
    context.fillText("loading...", 40, 140);

    loadImage("torso");
    loadImage("head");
    loadImage("eye");
}

function loadImage(name) {

    images[name] = new Image();
    images[name].onload = function () {
        resourceLoaded();
    }
    images[name].src = "images/placeholder/" + name + ".png";
}

function resourceLoaded() {

    numResourcesLoaded += 1;
    if (numResourcesLoaded === totalResources) {

        setInterval(redraw, 1000 / fps);
    }
}

function isHealthy() {
    return false;
}

function isRipped() {
    return false;
}

function isObese() {
    return false;
}

function isStarving() {
    return false;
}


function isObese() {
    return false;
}

function drawHead() {
    var x = charX - 10;
    var y = charY - 125;
    var img = images["head"];

    context.drawImage(img, x, y, img.width, img.height);
}

function drawTorso() {
    var x = charX;
    var y = charY - 50;
    var img = images["torso"];

    context.drawImage(img, x, y, img.width, img.height);
}

function drawEyes() {
    var x = charX - 10;
    var y = charY - 110;
    var img = images["eye"];
    context.drawImage(images["eye"], x - 5, y, img.width, img.height);
    context.drawImage(images["eye"], x + 5, y, img.width, img.height);
}


function redraw() {

    clearCanvas();

    drawHead();
    drawTorso();
    drawEyes();
   
}


prepareCanvas(document.getElementById("canvasDiv"), 490, 220);