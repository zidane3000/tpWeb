
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
  Shape.prototype.paint.call(this, ctx);
  ctx.stroke();
};

Line.prototype.paint = function(ctx) {
  //TODO Manager color
  Shape.prototype.paint.call(this, ctx);
  ctx.beginPath();
  
  ctx.moveTo(this.getInitX(), this.getInitY());
  ctx.lineTo(this.getFinalX(), this.getFinalY());
  ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
  //console.log(this.getForms());
  ctx.fillStyle = '#F0F0F0'; // set canvas' background color
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  this.getShapes().forEach(function (eltDuTableau) {
    // now fill the canvas
    eltDuTableau.paint(ctx);
  });
};
  
