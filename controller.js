
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	// this.currEditingMode = editingMode.line;
	// this.currLineWidth = 5;
	// this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('butRect').onclick = (_) => this.currEditingMode=editingMode.rect;
	document.getElementById('butLine').onclick = (_) => this.currEditingMode=editingMode.line;
	document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value;
	document.getElementById('colour').onchange = (e) => this.currColour=e.target.value;
	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd) {
		if (this.currEditingMode==editingMode.rect) {
			this.currentShape=new Rectangle();
		} else {
			this.currentShape=new Line();
		}
	}.bind(this);

	this.onInteractionUpdate = function (dnd) {
		if (this.currEditingMode==editingMode.rect) {
			this.currentShape=new Rectangle(dnd.xi,dnd.yi,dnd.xf-dnd.xi,dnd.yf-dnd.yi,this.currLineWidth,this.currColour);
		} else {
			this.currentShape=new Line(dnd.xi,dnd.yi,dnd.xf,dnd.yf,this.currLineWidth,this.currColour);
		}
		drawing.paint(ctx,canvas);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function (dnd) {
		var uuid=generateUUID();
		drawing.addShape(uuid,this.currentShape);
		drawing.paint(ctx,canvas);
		this.currentShape.paint(ctx);
		updateShapeList(uuid,this.currentShape);
		document.getElementById('remove').onclick = (event) => remove(drawing,currentTarget.id.substring(6),ctx,canvas); 
	}.bind(this);

	remove = function (drawing,uuid,ctx,canvas) {
		drawing.removeShape(uuid);
		drawing.paint(ctx,canvas);
		document.getElementById('shape'+uuid).remove();
	}.bind(this);
	updateShapeList = function (uuid,shape) {
		var li = document.createElement('li');
		li.id = 'shape'+uuid;
		li.innerHTML = shape.toString();
		document.getElementById('shapeList').appendChild(li);
	}.bind(this);

	
};


