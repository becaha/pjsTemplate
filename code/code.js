var sketchProc = function (processingInstance) {
    with (processingInstance) {
        // !! DEFINE FUNCTIONS HERE !!
        // EXAMPLE: var drawDiagram = function() {...}
        
        size(400, 400);
        frameRate(30);
        // !! PUT THE FUNCTION EXECUTE CALLS HERE !!
        // EXAMPLE: drawDiagram();
    }
};

// Get the canvas that Processing-js will use
// !! PUT THE CANVAS_ID HERE !!
var canvas = document.getElementById("CANVAS_ID");
// Pass the function sketchProc (defined in code.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc);