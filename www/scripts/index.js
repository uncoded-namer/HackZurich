// Eine Einführung zur leeren Vorlage finden Sie in der folgenden Dokumentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Zum Debuggen von Code beim Laden einer Seite in cordova-simulate oder auf Android-Geräten/-Emulatoren: Starten Sie Ihre App, legen Sie Haltepunkte fest, 
// und führen Sie dann "window.location.reload()" in der JavaScript-Konsole aus.
move = false;
moveGeneral = false;
startX = 0;
startY = 0;
pointerPositionX = 0;
pointerPositionY = 0;
selectedFoodCategory = "";
selectedFoodName = "";

var categoryMap = [];
categoryMap["fruits"] = fruits;
categoryMap["vegetables"] = vegetables;
categoryMap["animalProducts"] = animalProducts;
categoryMap["cornProducts"] = cornProducts;
categoryMap["sweets"] = sweets;
categoryMap["drinks"] = drinks;

var i = 0;

var pointerEventToXY = function (e) {
    var out = { x: 0, y: 0 };
    if (e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel') {
        var touch = e.touches[0] || e.changedTouches[0];
        out.x = touch.pageX;
        out.y = touch.pageY;
    } else if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover' || e.type == 'mouseout' || e.type == 'mouseenter' || e.type == 'mouseleave') {
        out.x = e.pageX;
        out.y = e.pageY;
    }
    return out;
};

var movingImagePosOffset = 24; // TODO: prettier


(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function movePointer(event) {
        event.preventDefault();
        var position = pointerEventToXY(event);
        pointerPositionX = position.x;
        pointerPositionY = position.y;
        if (move) {
            $("#movingImage").css({ left: pointerPositionX - movingImagePosOffset, top: pointerPositionY - movingImagePosOffset });
        }
    }


    function startMovePointerGeneral(event) {
        event.preventDefault();
        moveGeneral = true;
        pointerPositionX = position.x;
        pointerPositionY = position.y;
    }
  
    function startMovePointer(event) {
        event.preventDefault();
        event.stopPropagation();
        move = true;
        selectedFoodName = $(this).attr("food");
        selectedFoodCategory = $(this).parent().attr("id");
        var imageUrl = $(this).children("img").get(0).getAttribute("src");
        var position = pointerEventToXY(event);
        pointerPositionX = position.x;
        pointerPositionY = position.y;
        $("#movingImage").css({ left: pointerPositionX - movingImagePosOffset, top: pointerPositionY - movingImagePosOffset });
        $("#movingImage").attr("src", imageUrl);
    }

    function endMovePointer(event) {
        event.preventDefault();
        event.stopPropagation();
        move = false;
        moveGeneral = false;
        $("#movingImage").attr("src", "");
        $("#movingImage").css({ left: startX , top: startY });
    }

    function onDeviceReady() {
        // Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        var isTouchSupport = 'ontouchstart' in window;
        var startEvent = isTouchSupport ? 'touchstart' : 'mousedown';
        var moveEvent = isTouchSupport ? 'touchmove' : 'mousemove';
        var endEvent = isTouchSupport ? 'touchend' : 'mouseup';

        var size = Math.floor($(window).width() / (2 * 6 + 2));
        Object.keys(categoryMap).forEach(function(key) {
            var category = key;
            var foodsByName = categoryMap[category];
            $("#category-headers").append("<li><a data-toggle=\"tab\" href=\"#" + category + "\"><img src=\"images/icons/"+ category + ".png\" height=\"" + size + "\" width=\"" + size + "\"/></a></li>");
            $("#category-content").append("<div id=\"" + category + "\" class=\"tab-pane fade\">");
            Object.keys(foodsByName).forEach(function(name) {
                $("#" + category).append("<a role=\"button\" class=\"btn food-button\" food=\"" + name + "\"><img src=\"images/icons/" + name + ".png\" /></a>");
            });
        });
        $("#category-headers li").first().addClass("active");
        $("#category-content div").first().addClass("in active");

        document.addEventListener(moveEvent, movePointer, false);
        $(".food-button").on(startEvent, startMovePointer);
        $("body").on(startEvent, startMovePointerGeneral);
        $("body").on(endEvent, endMovePointer);
    }

    function onPause() {
        // TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
    }

    function onResume() {
        // TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
    }
})();