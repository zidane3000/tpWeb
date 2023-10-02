
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !

class Drawing {
  constructor() {
    this.shapes = new Map() ;
  }
  addShape(uuid,shape) {
    this.shapes.set(uuid,shape);
  }
  getShapes() {
    return this.shapes;
  }
  removeShape(uuid) {
    this.shapes.delete(uuid);
  }
  
}
class Shape {
  constructor(lineWidth, colour) {
    this.lineWidth = lineWidth;
    this.colour = colour;
  }
  getLineWidth() {
    return this.lineWidth;
  }
  getColour() {
    return this.colour;
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
    constructor(xi, yi, xf, yf, lineWidth, colour) {
        super(lineWidth, colour);
        this.xi = xi;
        this.yi = yi;
        this.xf = xf;
        this.yf = yf;
    }
     getInitX(){
      return this.xi;
    }
     getInitY(){
      return this.yi;
    }
     getFinalX(){
      return this.xf;
    }
    getFinalY(){
      return this.yf;
    }


    
}
