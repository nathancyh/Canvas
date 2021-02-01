"use strict";
// COLOR, TEXT SIZE & STROKESIZE
let canvasSettings = {
	colorStroke: $("#stroke-color").val(),
	colorFill: $("#fill-color").val(),
	polygonSize: $("#polygon-sides").val(),
	// strokeSize
	// textSize
	// textFont
	strokeSize: $("#stroke-size").val(),
	// textSize
	// textFont
};

$("#stroke-color")[0].oninput = function () {
	canvasSettings.colorStroke = this.value;
};

$("#fill-color")[0].oninput = function () {
	canvasSettings.colorFill = this.value;
};

$("#stroke-size")[0].oninput = function () {
	canvasSettings.strokeSize = this.value;
};
$("#polygon-sides")[0].oninput = function () {
	canvasSettings.polygonSize = this.value;
};

// $("#text-size")[0].oninput = function () {
//   canvasSettings.textsize = this.value;
// };

$("#clear-canvas").click(() => {
	contextReal.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
	contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
});
