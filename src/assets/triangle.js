import Point from './point.js';
import Polygone from './polygone.js';

/**
 * Constructeur de Triangle
 * représente un triangle dans un repère à 2 dimensions
 * @param {Point} p1 
 * @param {Point} p2 
 * @param {Point} p3 
 */
function Triangle(p1, p2, p3){
    //ça c'est l'héritage (première partie), on appelle le constructeur du parent (Polygone) avec les 3 points du triangle
    Polygone.call(this, [p1, p2, p3]); //allez voir dans la doc à quoi sert call()
};

//ça c'est l'héritage (deuxième partie), on dit que le prototype de Triangle est celui de Polygone
Triangle.prototype = Object.create(Polygone.prototype); 

//on remet le constructeur de Triangle à la place de celui de Polygone
Triangle.prototype.constructor = Triangle; 

export default Triangle;