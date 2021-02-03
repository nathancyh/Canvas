/**********************************************
 * Drawing Line Functionality
 * ==================================
 ***********************************************/
class DrawingArc extends PaintFunction {
	// This class extends the PaintFunction class
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
		this.click = 0;
	}

	// On mouse down, ensure that the pen has these features
	onMouseDown(coord, event) {
		this.contextDraft.lineWidth = canvasSettings.strokeSize;
		this.contextDraft.strokeStyle = canvasSettings.colorStroke;
		this.contextReal.lineWidth = canvasSettings.strokeSize;
		this.contextReal.strokeStyle = canvasSettings.colorStroke;
	}
	onDragging(coord, event) {}

	onMouseMove(coord, event) {
		if (this.click === 1) {
			var cpx0 = coord[0];
			var cpy0 = coord[1];
			// console.log("mooving coor", cpx0, cpy0);
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.quadraticCurveTo(cpx0, cpy0, cpx0, cpy0);
			this.contextDraft.stroke();
		} else if (this.click === 2) {
			var cpx0 = coord[0];
			var cpy0 = coord[1];
			// console.log("mooving coor", cpx0, cpy0);
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.quadraticCurveTo(cpx0, cpy0, this.endx0, this.endy0);
			this.contextDraft.stroke();
		}
	}
	onMouseUp(coord, event) {
		if (this.click === 0) {
			this.origX = coord[0];
			this.origY = coord[1];
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.click++;
			console.log("click number", this.click, "origional", [
				this.origX,
				this.origY,
			]);
		} else if (this.click === 1) {
			var cpx0 = coord[0];
			var cpy0 = coord[1];
			this.endx0 = coord[0];
			this.endy0 = coord[1];
			// console.log("mooving coor", cpx0, cpy0);
			this.contextDraft.beginPath();
			this.contextDraft.moveTo(this.origX, this.origY);
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextDraft.quadraticCurveTo(cpx0, cpy0, this.endx0, this.endy0);
			this.contextDraft.stroke();
			this.click++;
			console.log(
				"click number",
				this.click,
				"ctrl pt1",
				[cpx0, cpy0],
				"end pt",
				[this.endx0, this.endy0]
			);
		} else if (this.click === 2) {
			var cpx0 = coord[0];
			var cpy0 = coord[1];
			this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);

			this.contextReal.beginPath();
			this.contextReal.moveTo(this.origX, this.origY);
			this.contextReal.quadraticCurveTo(cpx0, cpy0, this.endx0, this.endy0);
			this.contextReal.stroke();
			saveState();
			console.log(
				"click number",
				this.click,
				"ctrl pt2",
				[cpx0, cpy0],
				"end pt2",
				[this.endx0, this.endy0]
			);
			this.click = 0;
			console.log("end of stroy", this.click);
		}
	}
	onMouseLeave() {}
	onMouseEnter() {}
	reset() {
		this.click = 0;
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
	}

	draw(x, y) {
		this.contextReal.lineTo(x, y);
		this.contextReal.moveTo(x, y);
		this.contextReal.closePath();
		this.contextReal.stroke();
	}
}
