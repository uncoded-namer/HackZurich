var canvas;
var context;
var images = {};
var totalResources = 24; // TODO: think
var numResourcesLoaded = 0;
var fps = 30;
var fpsInterval = setInterval(updateFPS, 1000);
var numFramesDrawn = 0;
var curFPS = 0;
var mouthState = 0; // 0 = closed, 1 opening, 2 open, 3 closing
var mouthHalfFrameAmount = 4;
var mouthHalfFrameCounter = 0;

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
var recommendedFruits = 2; // kilo

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

var fatness = 0; // TODO: remove

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

    loadImage("background1");
    loadImage("background2");
    loadImage("body");
    loadImage("body_fat1");
    loadImage("body_fat2");
    loadImage("body_fat3");
    loadImage("body_fat4");
    loadImage("sixpack1");
    loadImage("sixpack2");
    loadImage("head");
    loadImage("head_half");
    loadImage("head_sad1");
    loadImage("head_sad2");
    loadImage("head_open");
    loadImage("left_foot");
    loadImage("left_hand");
    loadImage("right_foot");
    loadImage("right_hand");
    loadImage("tail");
    loadImage("vis_fat");
    loadImage("vis_sugar");
    loadImage("vis_vitamine");
    loadImage("vis_water");
    loadImage("speechbubble");
}

function loadImage(name) {

    images[name] = new Image();
    images[name].onload = function () {
        resourceLoaded();
    };
    images[name].src = "images/parts/" + name + ".png";
}

function resourceLoaded() {

    numResourcesLoaded += 1;
    if (numResourcesLoaded === totalResources) {

        setInterval(redraw, 1000 / fps);
    }
}

function interpolateValues(startPos, endPos, t) {
    return startPos + t * (endPos - startPos);
}

var headBobbingStartPositionY = 0;
var headBobbingEndPositionY = 5;
var headBobbingDuration = 180;
var headBobbingValue = 0;
var headBobbingOffsetY = 0;

function headBobbingTweening(t) {
    if (t <= 0.5) {
        return t * 2;
    } else {
        t -= 0.5;
        t *= 2;
        return 1 - t;
    }
}

function updateHeadBobbing() {
    headBobbingValue = (headBobbingValue + 1) % headBobbingDuration;
    var t = headBobbingValue / headBobbingDuration;
    headBobbingOffsetY = interpolateValues(headBobbingStartPositionY, headBobbingEndPositionY, headBobbingTweening(t));
}


var armRotationStart = 0;
var armRotationEnd = 0.3;
var armRotationDuration = 120;
var armaRotationValue = 0;
var armRotation = armRotationStart;

function armRotationTweening(t) {
    if (t <= 0.5) {
        return t * 2;
    } else {
        t -= 0.5;
        t *= 2;
        return 1 - t;
    }
}

function updateArmRotation() {
    armaRotationValue = (armaRotationValue + 1) % armRotationDuration;
    var t = armaRotationValue / armRotationDuration;
    armRotation = interpolateValues(armRotationStart, armRotationEnd, armRotationTweening(t));
}

var footRotationStart = -0.07;
var footRotationEnd = 0.07;
var footRotationDuration = 180;
var footRotationValue = footRotationDuration / 2;
var footRotation = 0;

function updateFootRotation() {
    footRotationValue = (footRotationValue + 1) % footRotationDuration;
    var t = footRotationValue / footRotationDuration;
    footRotation = interpolateValues(footRotationStart, footRotationEnd, armRotationTweening(t));
}

var tailRotationStart = -0.04;
var tailRotationEnd = 0.04;
var tailRotationDuration = 140;
var tailRotationValue = tailRotationDuration / 2;
var tailRotation = 0;

function updateTailRotation() {
    tailRotationValue = (tailRotationValue + 1) % tailRotationDuration;
    var t = tailRotationValue / tailRotationDuration;
    tailRotation = interpolateValues(tailRotationStart, tailRotationEnd, armRotationTweening(t));
}


function evaluateFood() {
    var foodName = selectedFoodName;
    // TODO
}

function updateMouthState() {
    if (mouthState == 1 || mouthState == 3) {
        mouthHalfFrameCounter += 1;
        if (mouthHalfFrameCounter >= mouthHalfFrameAmount) {
            mouthState = (mouthState + 1) % 4;
        }
    }

    var isHolding = move;
    if (!isHolding) {
        if (mouthState == 1 || mouthState == 2) {
            evaluateFood();
            fatness += 1; // TODO
        }

        if (mouthState == 1) mouthState = 0;
        if (mouthState == 2) {
            mouthHalfFrameCounter = 0;
            mouthState = 3;
        }
        return;
    }

    var x = canvas.width * 0.30;
    var y = canvas.height * 0.30;
    var pointerX = pointerPositionX;
    var pointerY = pointerPositionY;
    var dx = pointerX - x;
    var dy = pointerY - y;

    var threshold = 90;
    var dist = Math.sqrt(dx * dx + dy * dy);
    if (dist < threshold && mouthState == 0) {
        mouthState = 1;
        mouthHalfFrameCounter = 0;
    } else if (dist >= threshold && mouthState == 2) {
        mouthState = 3;
        mouthHalfFrameCounter = 0;
    } else if (dist >= threshold && mouthState == 1) {
        mouthState = 0;
    }
}

function getIdleHeadImageBasedOnFatness() {
    if (fatness == 0) return images["head"];
    else if (fatness == 1) return images["head_sad1"];
    else if (fatness == 2) return images["head_sad1"];
    else if (fatness == 3) return images["head_sad2"];
    else return images["head_sad2"];
}

function getHeadImage(){
    switch (mouthState) {
        case 0:
            return getIdleHeadImageBasedOnFatness();
        case 1:
            return images["head_half"];
        case 2:
            return images["head_open"];
        default:
            return images["head_half"];
    }
}

function drawEllipse(centerX, centerY, width, height) {
    context.beginPath();

    context.moveTo(centerX, centerY - height / 2); // A1

    context.bezierCurveTo(
        centerX + width / 2, centerY - height / 2, // C1
        centerX + width / 2, centerY + height / 2, // C2
        centerX, centerY + height / 2); // A2

    context.bezierCurveTo(
        centerX - width / 2, centerY + height / 2, // C3
        centerX - width / 2, centerY - height / 2, // C4
        centerX, centerY - height / 2); // A1

    context.fillStyle = "black";
    context.fill();
    context.closePath();
}

function drawShadow() {
    var img = images["head"]; // TODO: rewrite
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var width;
    if (fatness == 0) width = 300;
    else if (fatness == 1) width = 330;
    else if (fatness == 2) width = 360;
    else if (fatness == 3) width = 390;
    else width = 420;

    drawEllipse(canvas.width / 2.6, 390 * ratio, width * ratio, 50 * ratio);
}

function drawImageWithOffsetAndAngle(img, offsetX, offsetY, angle, centerX, centerY) {
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2 + offsetX * ratio;
    var centerShift_y = (canvas.height - img.height * ratio) / 2 + offsetY * ratio;
    var cx = centerShift_x + centerX * ratio;
    var cy = centerShift_y + centerY * ratio;

    context.translate(cx, cy);
    context.rotate(angle);
    context.drawImage(img, 0, 0, img.width, img.height, -centerX * ratio, -centerY * ratio, img.width * ratio, img.height * ratio);
    context.rotate(-angle);
    context.translate(-cx, -cy);
}


function drawImageWithOffset(img, offsetX, offsetY) {
    drawImageWithOffsetAndAngle(img, offsetX, offsetY, 0, 0, 0);
}


function drawImageWithAngle(img, angle, centerX, centerY) {
    drawImageWithOffsetAndAngle(img, 0, 0, angle, centerX, centerY);
}


function drawImageGeneral(img) {
    drawImageWithOffset(img, 0, 0);
}

function drawHead() {
    var img = getHeadImage(images["head"]);

    drawImageWithOffset(img, 0, headBobbingOffsetY);
}

function drawBody() {
    var img;
    if (fatness == 0) img = images["body"];
    else if (fatness == 1) img = images["body_fat1"];
    else if (fatness == 2) img = images["body_fat2"];
    else if (fatness == 3) img = images["body_fat3"];
    else img = images["body_fat4"];
    drawImageGeneral(img);
}

function drawHands() {
    var img = images["left_hand"];
    drawImageWithAngle(img, -armRotation, 216, 244);
    img = images["right_hand"];
    drawImageWithAngle(img, armRotation, 77, 244);
}

function drawFeet() {
    var img = images["left_foot"];
    drawImageWithAngle(img, footRotation, 209, 366);
    img = images["right_foot"];
    drawImageWithAngle(img, footRotation, 91, 366);
}

function drawTail() {
    var img = images["tail"];
    drawImageWithAngle(img, tailRotation, 243, 332);
}

function drawIcon(name, percent, number, bad) {
    var img = images[name];

    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    ratio = Math.min(hRatio, vRatio);

    context.beginPath();
    context.rect(canvas.width - img.width * ratio + 2, ratio * (number * 103 + 100 * (1 - percent)), img.width * ratio - 5, ratio * 100 * percent);
    if (bad) {
        if (percent > 0.66) context.fillStyle = "red";
        else if (percent > 0.33) context.fillStyle = "orange";
        else context.fillStyle = "green";
    } else {
        if (percent > 0.66) context.fillStyle = "green";
        else if (percent > 0.33) context.fillStyle = "orange";
        else context.fillStyle = "red";
    }
    context.fill();
    context.closePath();

    context.drawImage(img, 0, 0, img.width, img.height, canvas.width - img.width * ratio, 0, img.width * ratio, img.height * ratio);
}

function drawIcons() {
    var fat_percent = 0.8;
    var sugar_percent = 0.3;
    var vitamine_percent = 0.5;
    var water_percent = 0.2; // TODO!

    var img = images["background1"];
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    ratio = Math.min(hRatio, vRatio);
    context.drawImage(img, 0, 0, img.width, img.height, canvas.width - img.width * ratio, 0, img.width * ratio, img.height * ratio);

    drawIcon("vis_vitamine", vitamine_percent, 0, false);
    drawIcon("vis_sugar", sugar_percent, 1, true);
    drawIcon("vis_fat", fat_percent, 2, true)
    drawIcon("vis_water", water_percent, 3, false);

    img = images["background2"];
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    ratio = Math.min(hRatio, vRatio);
    context.drawImage(img, 0, 0, img.width, img.height, canvas.width - img.width * ratio, 0, img.width * ratio, img.height * ratio);
}

function redraw() {

    updateHeadBobbing();
    updateArmRotation();
    updateFootRotation();
    updateTailRotation();
    updateMouthState();

    clearCanvas();

    drawIcons();
    drawShadow();
    drawTail();
    drawBody();
    drawHands();
    drawFeet();
    drawHead();
}

prepareCanvas(document.getElementById("canvasDiv"), $(window).width(), $(window).height() / 5 * 3);