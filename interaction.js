
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	// Définir ici les attributs de la 'classe'
  this.press=false;
  this.interactor=interactor;
  this.xi=0;
  this.yi=0;
  this.xf=0;
  this.yf=0;
	// Developper les 3 fonctions gérant les événements
  this.Click=function Click(evt) {
      res=getMousePosition(canvas, evt);
    this.xi=res.x;
    this.yi=res.y;
    console.log("Click X= "+this.xi+" Y= "+this.yi);
    this.press=true;
    interactor.onInteractionStart(this);
  }.bind(this);

  this.Hold=function Hold(evt) {
    if(this.press==true){
      res=getMousePosition(canvas, evt);
      this.xf=res.x;
      this.yf=res.y;
      console.log("Hold X= "+this.xf+" Y= "+this.yf);
     interactor.onInteractionUpdate(this);
    }
  }.bind(this);

  this.Release=function Release(evt) {
      res=getMousePosition(canvas, evt);
      this.xf=res.x;
      this.yf=res.y;
      console.log("Release X= "+this.xf+" Y= "+this.yf);
    interactor.onInteractionEnd(this);
    this.press=false;
  }.bind(this);

	// Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.Click, false);
  canvas.addEventListener('mousemove', this.Hold, false);
  canvas.addEventListener('mouseup', this.Release, false);

};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



