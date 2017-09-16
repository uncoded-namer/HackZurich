// Eine Einführung zur leeren Vorlage finden Sie in der folgenden Dokumentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// Zum Debuggen von Code beim Laden einer Seite in cordova-simulate oder auf Android-Geräten/-Emulatoren: Starten Sie Ihre App, legen Sie Haltepunkte fest, 
// und führen Sie dann "window.location.reload()" in der JavaScript-Konsole aus.
move = false;
startX = 0;
startY = 0;
(function () {
    "use strict";

    document.addEventListener('deviceready', onDeviceReady.bind(this), false);

    function onDeviceReady() {
        // Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
        document.addEventListener('pause', onPause.bind(this), false);
        document.addEventListener('resume', onResume.bind(this), false);

        $(document).mousemove(function (e) {
            if (move) {
                $("#movingImage").css({ left: e.pageX, top: e.pageY });
            }
        });
        $(".food-button").on('mousedown', function (event) {
            move = true;
            var imageUrl = $(this).children("img").get(0).getAttribute("src");
            $("#movingImage").css({ left: event.pageX, top: event.pageY });
            $("#movingImage").attr("src", imageUrl);
            event.preventDefault();
            event.stopPropagation();
        });
        $("body").on('mouseup', function (event) {
            event.preventDefault();
            event.stopPropagation();
            move = false;
            $("#movingImage").attr("src", "");
            $("#movingImage").css({ left: startX, top: startY });
        });
    };

    function onPause() {
        // TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
    };

    function onResume() {
        // TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
    };
})();