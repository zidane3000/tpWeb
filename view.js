
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Shape.prototype.paint = function(ctx) {
  ctx.lineWidth = this.lineWidth;
  ctx.strokeStyle = this.colour;
}
Rectangle.prototype.paint = function(ctx) {
  //TODO Manager color
  ctx.beginPath();
  ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(),this.getFinalY());
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
Circle.prototype.paint = function(ctx) {
  //TODO Manager color
  //Shape.prototype.paint.call(this, ctx);
  ctx.beginPath();
  ctx.lineWidth = this.lineWidth;
  ctx.strokeStyle = this.colour;
  ctx.arc(this.getInitX(), this.getInitY(), this.getRayon(),this.getDegreeStart(), this.getDegreeEnd());
  ctx.stroke();
}



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
  var div = document.createElement('div');
  var button = document.createElement('button');
  var text 
  if(shape.constructor.name=="Circle"){
    text = document.createTextNode(shape.constructor.name+'('+shape.getInitX()+','+shape.getInitY()+','+shape.getRayon().toFixed(2)+')');
  }else text= document.createTextNode(shape.constructor.name+'('+shape.getInitX()+','+shape.getInitY()+','+shape.getFinalX()+','+shape.getFinalY()+')');

  div.id = 'shape'+uuid;
  button.className = 'glyphicon glyphicon-remove-sign';
  button.style.marginRight = '5px';
  button.style.color=shape.getColour();
  div.onclick = (event) => remove(drawing,uuid,ctx,canvas);
  div.appendChild(button);
  div.appendChild(text);
  div.style.display = 'flex';
  div.style.padding = '5px';
  div.style.margin = '5px';


  return div;
}

