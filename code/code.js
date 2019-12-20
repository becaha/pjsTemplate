var sketchProc = function (processingInstance) {
    with (processingInstance) {
        var offCenterX =120;
        var centerX = 200;
        var centerY = 200;
        var offCenterY = 60;
        var diameter = 50;
        var drawDiagram = function() {
            background(255, 255, 255);
            fill(0, 0, 0);
                //noFill();
            stroke(0, 0, 0);
            
            ellipse(centerX - offCenterX,centerY + offCenterY,diameter,diameter);
            ellipse(centerX + offCenterX,centerY + offCenterY,diameter,diameter);
            ellipse(centerX,centerY + offCenterY,diameter,diameter);
            
            ellipse(centerX,centerY - offCenterY,diameter,diameter);
            
            line(centerX, centerY - offCenterY + diameter/2, centerX, centerY + offCenterY - diameter/2);
            
            line(centerX, centerY - offCenterY + diameter/2, centerX - offCenterX, centerY + offCenterY - diameter/2);
            
            line(centerX, centerY - offCenterY + diameter/2, centerX + offCenterX, centerY + offCenterY - diameter/2);   
        }
        size(400, 400);
        frameRate(30);
        drawDiagram();
    }
};

// Get the canvas that Processing-js will use
var canvas = document.getElementById("diagramCanvas");
// Pass the function sketchProc (defined in myCode.js) to Processing's constructor.
var processingInstance = new Processing(canvas, sketchProc);