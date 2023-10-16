
var editingMode = { rect: 0, line: 1 , circle: 2};

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;


	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('butRect').onclick = (_) => this.currEditingMode=editingMode.rect;
	document.getElementById('butLine').onclick = (_) => this.currEditingMode=editingMode.line;
	document.getElementById('butCircle').onclick = (_) => this.currEditingMode=editingMode.circle;
	document.getElementById('spinnerWidth').onchange = (e) => this.currLineWidth = e.target.value;
	document.getElementById('colour').onchange = (e) => this.currColour=e.target.value;
	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = function (dnd) {
		if (this.currEditingMode==editingMode.rect) {
			this.currentShape=new Rectangle();
		} else if (this.currEditingMode==editingMode.line) {
			this.currentShape=new Line();
		}else if (this.currEditingMode==editingMode.circle) {
			this.currentShape=new Circle();
		}
	}.bind(this);

	this.onInteractionUpdate = function (dnd) {
		if (this.currEditingMode==editingMode.rect) {
			this.currentShape=new Rectangle(dnd.xi,dnd.yi,dnd.xf-dnd.xi,dnd.yf-dnd.yi,this.currLineWidth,this.currColour);
		} else if (this.currEditingMode==editingMode.line) {
			this.currentShape=new Line(dnd.xi,dnd.yi,dnd.xf,dnd.yf,this.currLineWidth,this.currColour);
		}else if (this.currEditingMode==editingMode.circle) {
			this.currentShape=new Circle(dnd.xi,dnd.yi,Math.sqrt((dnd.xf-dnd.xi)*(dnd.xf-dnd.xi)+(dnd.yf-dnd.yi)*(dnd.yf-dnd.yi)),this.currLineWidth,this.currColour);
		}
		drawing.paint(ctx,canvas);
		this.currentShape.paint(ctx);
	}.bind(this);

	this.onInteractionEnd = function (dnd) {
		var uuid=Math.random().toString(16).slice(2);
		drawing.shapes.set(uuid,this.currentShape);
		drawing.paint(ctx,canvas);
		this.currentShape.paint(ctx);
		 updateShapeList(uuid,this.currentShape);
		//document.getElementById('remove'+uuid).onclick = (event) => remove(drawing,currentTarget.id.substring(6),ctx,canvas); 
	}.bind(this);

	remove = function (drawing,uuid,ctx,canvas) {
		drawing.removeShape(uuid);
		drawing.paint(ctx,canvas);
		document.getElementById('shape'+uuid).remove();
	}.bind(this);
	

	
};


