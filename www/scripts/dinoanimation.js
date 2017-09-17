var canvas;
var context;
var images = {};
var totalResources = 26; // TODO: think
var numResourcesLoaded = 0;
var fps = 30;
var fpsInterval = setInterval(updateFPS, 1000);
var numFramesDrawn = 0;
var curFPS = 0;
var mouthState = 0; // 0 = closed, 1 opening, 2 open, 3 closing
var mouthHalfFrameAmount = 4;
var mouthHalfFrameCounter = 0;

var isExcited = false;
var excitementCounter = 0;
var excitementDuration = 30;

var isSpeaking = 0;
var speakDuration = 200;
var speakDurationCounter = 0;
var speakTexture;
// TODO: refactor

var recommendedEnergy = 2000;
var recommendedProtein = 50;
var recommendedFat = 70;
var recommendedSaturatedFat = 24;
var recommendedCarbohydrates = 310;
var recommendedSugar = 90;
var recommendedSalt = 2300; // mg
var recommendedFiber = 30; // g
var recommendedWater = 10; // pieces
var recommendedVegetables = 3; // pieces
var recommendedFruits = 2; // pieces

var energy = 0;
var protein = 0;
var fat = 0;
var saturatedFat = 0;
var carbohydrates = 0;
var sugar = 0;
var salt = 0;
var fiber = 0;
var water = 0;
var vegetables = 0;
var fruits = 0;

var fatness = 0; 
var muscle = 0;

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
    loadImage("speech_water");
    loadImage("speech_carrot");
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

var iconShakeDuration = 30;


var isSugarShaking = 0;
var sugarShakeStartPositionX = -10;
var sugarShakeEndPositionX = 10;
var sugarShakeDuration = 5;
var sugarShakeValue = sugarShakeDuration / 2;
var sugarShakeOffsetX = 0;

function updateSugarShaking() {
	if(!isSugarShaking) {
		sugarShakeOffsetX = 0;
		return;
	}
	
	sugarShakeValue = (sugarShakeValue + 1);
	var dtime = sugarShakeValue % sugarShakeDuration;
    var t = dtime / sugarShakeDuration;
	sugarShakeOffsetX = interpolateValues(sugarShakeStartPositionX, sugarShakeEndPositionX, headBobbingTweening(t));
	
	if(sugarShakeValue >= iconShakeDuration) {
		isSugarShaking = 0;
	}
}

function setSugarShaking() {
	isSugarShaking = 1;
	sugarShakeValue = 0;
}

var isFatShaking = 0;
var fatShakeStartPositionX = -10;
var fatShakeEndPositionX = 10;
var fatShakeDuration = 5;
var fatShakeValue = sugarShakeDuration / 2;
var fatShakeOffsetX = 0;

function updateFatShaking() {
	if(!isFatShaking) {
		fatShakeOffsetX = 0;
		return;
	}
	
	fatShakeValue = (sugarShakeValue + 1);
	var dtime = fatShakeValue % fatShakeDuration;
    var t = dtime / fatShakeDuration;
    fatShakeOffsetX = interpolateValues(fatShakeStartPositionX, fatShakeEndPositionX, headBobbingTweening(t));
	
	if(fatShakeValue >= iconShakeDuration) {
		isFatShaking = 0;
	}
}

function setFatShaking() {
	isFatShaking = 1;
	fatShakeValue = 0;
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

function calculateFatness() {
    if (water > recommendedWater && energy > recommendedEnergy && sugar < recommendedSugar && fat < recommendedFat && protein >= recommendedProtein) {
        fatness = 0;
        if (fruits >= recommendedFruits && vegetables >= recommendedVegetables && carbohydrates < recommendedCarbohydrates / 2) muscle = 2;
        else muscle = 1;
    } else {
       fatness = Math.min(Math.max(0, Math.floor((energy - 2000) / 500)), 4);
        muscle = 0;
    }
}

function evaluateFood() {
    var foodName = selectedFoodName;
    var categoryName = selectedFoodCategory;
    var food = categoryMap[categoryName][foodName];
    
    energy += food.kcal;
    protein += food.protein;
    fat += food.fat;
    saturatedFat += food.saturatedFat;
    carbohydrates += food.carbohydrates;
    sugar += food.sugar;
    salt += food.salt;
    fiber += food.fiber;
    water += (categoryName == "drinks") + (foodName == "water");
    vegetables += (categoryName == "vegetables");
    fruits += (categoryName == "fruits");
	
	if(sugar - food.sugar > recommendedSugar && sugar > recommendedSugar && food.sugar > 0) {
		setSugarShaking();	
	}
	
	if(fat - food.fat > recommendedFat && fat > recommendedFat && food.fat > 0) {
		setFatShaking();	
	}
	
    calculateFatness();

    if ((isThirsty() || needsVegetables()) && energy > recommendedEnergy / 2) {
        activateSpeechBubble();
    } else {
        deactivateSpeechBubble();
    }
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
            startExcitement();
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

    drawEllipse(canvas.width * 0.35, canvas.height * 0.85, width * ratio, 50 * ratio);
}

function drawImageWithOffsetAngleAndScale(img, offsetX, offsetY, angle, centerX, centerY, scaleX, scaleY) {
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    ratio = Math.min(hRatio, vRatio);

    var centerShift_x = (canvas.width - img.width * ratio) / 2 + offsetX * ratio;
    var centerShift_y = (canvas.height - img.height * ratio) / 2 + offsetY * ratio;
    var cx = centerShift_x + centerX * ratio;
    var cy = centerShift_y + centerY * ratio;

    context.translate(cx, cy);
    context.rotate(angle);
    context.scale(scaleX, scaleY);
    context.drawImage(img, 0, 0, img.width, img.height, -centerX * ratio, -centerY * ratio, img.width * ratio, img.height * ratio);
    context.scale(1 / scaleX, 1 / scaleY);
    context.rotate(-angle);
    context.translate(-cx, -cy);
}


function drawImageWithOffset(img, offsetX, offsetY) {
    drawImageWithOffsetAngleAndScale(img, offsetX, offsetY, 0, 0, 0, 1, 1);
}

function drawImageWithAngle(img, angle, centerX, centerY) {
    drawImageWithOffsetAngleAndScale(img, 0, 0, angle, centerX, centerY, 1, 1);
}

function drawImageWithScale(img, scaleX, scaleY, scaleCenterX, scaleCenterY) {
    drawImageWithOffsetAngleAndScale(img, 0, 0, 0, scaleCenterX, scaleCenterY, scaleX, scaleY);
}

function drawImageGeneral(img) {
    drawImageWithOffset(img, 0, 0);
}

function drawHead() {
    var img = getHeadImage(images["head"]);

    drawImageWithOffset(img, 0, headBobbingOffsetY);
}

function getBodyImageBasedOnFatness() {
    if (fatness == 0) return images["body"];
    else if (fatness == 1) return images["body_fat1"];
    else if (fatness == 2) return images["body_fat2"];
    else if (fatness == 3) return images["body_fat3"];
    else return images["body_fat4"];

}

function drawBody() {
    var img = getBodyImageBasedOnFatness();

    var scaleX;
    if (muscle == 1) scaleX = 1;
    else if (muscle == 2) scaleX = 1;
    else scaleX = 1;
    drawImageWithScale(img, scaleX, 1, 155, 298);

    if (muscle == 0) return;
    if (muscle == 1) img = images["sixpack1"];
    else img = images["sixpack2"];
    drawImageWithScale(img, scaleX, 1, 155, 298);
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

function drawIcon(name, percent, number, bad, offsetX, add_percent) {
    var img = images[name];

    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    ratio = Math.min(hRatio, vRatio);

    context.beginPath();
    context.rect(canvas.width - img.width * ratio + 2, ratio * (18+ number * 298 + 298 * (1 - percent)), img.width * ratio - 5, ratio * 298 * percent);
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

    context.beginPath();
    context.rect(canvas.width - img.width * ratio + 2, ratio * (18 + number * 298 + 298 * (1 - percent - add_percent)), img.width * ratio - 5, ratio * 298 * add_percent);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();

    context.drawImage(img, 0, 0, img.width, img.height, canvas.width - (img.width + offsetX) * ratio, 0, img.width * ratio, img.height * ratio);
}

function drawIcons() {
    var fat_percent = Math.min(1, fat / recommendedFat);
    var sugar_percent = Math.min(1, sugar / recommendedSugar);
    var vitamine_percent = Math.min(1, (fruits + vegetables) / (recommendedFruits + recommendedVegetables));
    var water_percent = Math.min(1, water / recommendedWater); 

    var fatAdded, sugarAdded, vitamineAdded, waterAdded;
    if (move) fatAdded = categoryMap[selectedFoodCategory][selectedFoodName].fat;
    else fatAdded = 0;
    if (move) sugarAdded = categoryMap[selectedFoodCategory][selectedFoodName].sugar;
    else sugarAdded = 0;
    if (move) vitamineAdded = selectedFoodCategory == "fruits" || selectedFoodCategory == "vegetables";
    else vitamineAdded = 0;
    if (move) waterAdded = ((selectedFoodCategory == "drinks") ? 1 : 0) + ((selectedFoodName == "water") ? 1 : 0); 
    else waterAdded = 0;


    var fat_add_percent = Math.min(1 - fat_percent, fatAdded / recommendedFat);
    var sugar_add_percent = Math.min(1 - sugar_percent, sugarAdded / recommendedSugar);
    var vitamine_add_percent = Math.min(1 - vitamine_percent, vitamineAdded / (recommendedFruits + recommendedVegetables));
    var water_add_percent = Math.min(1 - water_percent, waterAdded / recommendedWater);

    var img = images["background1"];
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    ratio = Math.min(hRatio, vRatio);
    context.drawImage(img, 0, 0, img.width, img.height, canvas.width - img.width * ratio, 0, img.width * ratio, img.height * ratio);
    
	updateFatShaking();
	updateSugarShaking();

    drawIcon("vis_vitamine", vitamine_percent, 0, false, 0, vitamine_add_percent);
    drawIcon("vis_sugar", sugar_percent, 1, true, sugarShakeOffsetX, sugar_add_percent);
    drawIcon("vis_fat", fat_percent, 2, true, fatShakeOffsetX, fat_add_percent)
    drawIcon("vis_water", water_percent, 3, false, 0, water_add_percent);

    img = images["background2"];
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    ratio = Math.min(hRatio, vRatio);
    context.drawImage(img, 0, 0, img.width, img.height, canvas.width - img.width * ratio, 0, img.width * ratio, img.height * ratio);
}

function startExcitement() {
    headBobbingStartPositionY = 0;
    headBobbingEndPositionY = 10;
    headBobbingDuration = 10;

    armRotationStart = 0;
    armRotationEnd = 0.3;
    armRotationDuration = 10;

    footRotationStart = -0.07;
    footRotationEnd = 0.07;
    footRotationDuration = 20;

    tailRotationStart = -0.04;
    tailRotationEnd = 0.04;
    tailRotationDuration = 10;

    isExcited = 1;
    excitementCounter = 0;
}

function stopExcitement() {
    headBobbingStartPositionY = 0;
    headBobbingEndPositionY = 5;
    headBobbingDuration = 180;

    armRotationStart = 0;
    armRotationEnd = 0.3;
    armRotationDuration = 120;

    footRotationStart = -0.07;
    footRotationEnd = 0.07;
    footRotationDuration = 180;

    tailRotationStart = -0.04;
    tailRotationEnd = 0.04;
    tailRotationDuration = 140;

    isExcited = false;
}

function getPointerDistance(x, y) {
    var px = pointerPositionX;
    var py = pointerPositionY;
    var dx = px - x;
    var dy = py - y;

    return Math.sqrt(dx * dx + dy * dy);
}

function checkStartExcitement() {
    if (moveGeneral && getPointerDistance(canvas.width * 0.5, canvas.height * 0.7) < 80) {
        startExcitement();
    }
    return;
}

function updateExcitement() {
    if (!isExcited) {
        checkStartExcitement();
        return;
    }

    excitementCounter++;
    if (excitementCounter >= excitementDuration) {
        stopExcitement();
    }

}

function isThirsty() {
    return water < recommendedWater / 4;
}


function needsVegetables() {
    return vegetables < recommendedVegetables / 2;
}

function selectSpeechBubbleTexture() {
    if (isThirsty()) speakTexture = images["speech_water"];
    else speakTexture = images["speech_carrot"];

}

function activateSpeechBubble() {
    isSpeaking = 1;
    speakDurationCounter = 0;
    selectSpeechBubbleTexture();
}


function deactivateSpeechBubble() {
    isSpeaking = 0;
    stopExcitement();
}

function updateSpeechBubble() {
    if (!isSpeaking) {
        return;
    }

    startExcitement();
    speakDurationCounter += 1;
    if (speakDurationCounter >= speakDuration) {
        deactivateSpeechBubble();
    }

}

function drawSpeechBubble() {
    if (!isSpeaking) return;

    startExcitement();
    var img = images["speechbubble"];
    drawImageGeneral(img);

    img = speakTexture;
    drawImageGeneral(img);
}

function redraw() {

    updateExcitement();
    updateHeadBobbing();
    updateArmRotation();
    updateFootRotation();
    updateTailRotation();
    updateMouthState();
    updateSpeechBubble();

    clearCanvas();

    drawIcons();
    drawShadow();
    drawTail();
    drawBody();
    drawHands();
    drawFeet();
    drawHead();
    drawSpeechBubble();
}

prepareCanvas(document.getElementById("canvasDiv"), $(window).width(), $(window).height() / 5 * 3);