
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Shape.prototype.paint = function(ctx) {
  ctx.lineWidth = this.lineWidth;
  ctx.strokeStyle = this.colour;
}
Rectangle.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.beginPath();
  ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(),   this.getFinalY());
  //call function paint from Shape
  //Shape.prototype.paint.call(this, ctx);
  ctx.lineWidth = this.lineWidth;
  ctx.strokeStyle = this.colour;
  ctx.stroke();
};

Line.prototype.paint = function(ctx) {
  //TODO Manager color
  //Shape.prototype.paint.call(this, ctx);
  ctx.beginPath();
  ctx.lineWidth = this.lineWidth;
  ctx.strokeStyle = this.colour;
  ctx.moveTo(this.getInitX(), this.getInitY());
  ctx.lineTo(this.getFinalX(), this.getFinalY());
  ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
  //console.log(this.getForms());
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.shapes.forEach(function (eltDuTableau) {
    // now fill the canvas
    eltDuTableau.paint(ctx);
  });
  
};
updateShapeList = function (uuid,shape) {
  document.getElementById('shapeList').insertAdjacentElement('beforeend', addLi (uuid,shape));
};
addLi = function (uuid,shape) {
  var li = document.createElement('li');
  li.id = 'shape'+uuid;
  li.innerHTML =shape.constructor.name;
  li.style.backgroundColor = shape.getColour();
  li.style.fontWeight = 'bold';
  li.style.cursor = 'pointer';
  //style the li like buttons from bootstrap
  li.style.border = '1px solid #ccc';
  li.style.padding = '5px 1px';
  li.style.margin = '5px';


  li.onclick = (event) => remove(drawing,uuid,ctx,canvas); 
  return li;
}
