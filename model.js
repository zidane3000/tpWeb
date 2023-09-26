
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

class Drawing {
  constructor() {
    this.shapes = [];
  }
  addShape(shape) {
    this.shapes.push(shape);
  }
  getShapes() {
    return this.shapes;
  }
  removeShape(index) {
    this.shapes.splice(index, 1);
  }
}
class Shape {
  constructor(lineWidth, colour) {
    this.lineWidth = lineWidth;
    this.colour = colour;
  }
}
class Rectangle extends Shape {
    constructor(x, y, width, height, lineWidth, colour) {
        super(lineWidth, colour);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getInitX=function getInitX(){
      return this.x;
   
    }.bind(this);
    getInitY=function getInitY(){
      return this.y;
    }.bind(this);
    getFinalX=function getFinalX(){
      return this.x+this.width;
    }.bind(this);
    getFinalY=function getFinalY(){
      return this.y+this.height;
    }.bind(this);
    
}
class Line extends Shape {
    constructor(x1, y1, x2, y2, lineWidth, colour) {
        super(lineWidth, colour);
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
    }
    getInitX=function getInitX(){
      return this.x1;
    }.bind(this);
    getInitY=function getInitY(){
      return this.y1;
    }.bind(this);
    getFinalX=function getFinalX(){
      return this.x2;
    }.bind(this);
    getFinalY=function getFinalY(){
      return this.y2;
    }.bind(this);


    
}
