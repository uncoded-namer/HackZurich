// Eine Einführung zur leeren Vorlage finden Sie in der folgenden Dokumentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Zum Debuggen von Code beim Laden einer Seite in cordova-simulate oder auf Android-Geräten/-Emulatoren: Starten Sie Ihre App, legen Sie Haltepunkte fest, 
// und führen Sie dann "window.location.reload()" in der JavaScript-Konsole aus.
move = false;
startX = 0;
startY = 0;
pointerPositionX = 0;
pointerPositionY = 0;
selectedFoodName = "";

(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function movePointer(e) {
        if (move) {
            $("#movingImage").css({ left: e.pageX, top: e.pageY });
            pointerPositionX = e.pageX;
            pointerPositionY = e.pageY;
        }
    }

    function startMovePointer(event) {
        move = true;
        selectedFoodName = $(this).children("img").get(0).parentElement.getAttribute("name"); // TODO: what
        var imageUrl = $(this).children("img").get(0).getAttribute("src");
        $("#movingImage").css({ left: event.pageX, top: event.pageY });
        $("#movingImage").attr("src", imageUrl);
        pointerPositionX = event.pageX;
        pointerPositionY = event.pageY;
        event.preventDefault();
        event.stopPropagation();
    }

    function endMovePointer(event) {
        event.preventDefault();
        event.stopPropagation();
        move = false;
        $("#movingImage").attr("src", "");
        $("#movingImage").css({ left: startX, top: startY });
    }

    function onDeviceReady() {
        // Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        var isTouchSupport = 'ontouchstart' in window;
        var startEvent = isTouchSupport ? 'ontouchstart' : 'mousedown';
        var moveEvent = isTouchSupport ? 'touchmove' : 'mousemove';
        var endEvent = isTouchSupport ? 'touched' : 'mouseup';

        document.addEventListener(moveEvent, movePointer, false);
        //$(".food-button").addEventListener(startEvent, startMovePointer, false);
        //$("body").addEventListener(endEvent, endMovePointer, false);
        //$(document).mousemove(movePointer);
        $(".food-button").on(startEvent, startMovePointer);
        $("body").on(endEvent, endMovePointer);
    }

    function onPause() {
        // TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
    }

    function onResume() {
        // TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
    }
})();