/**
 * Constructeur de Point
 * représente un point dans un repère à 2 dimensions
 * @param {number} x - abscisse du point
 * @param {number} y - ordonnée du point
 */
function Point(x, y) {
    this.x = x;
    this.y = y;
}

/**
 * Convertit en chaine de caractère notre Point
 * @returns {string} ex : (2, 3)
 */
Point.prototype.toString = function () {
    return `(${this.x}, ${this.y})`; //concaténation sans +
};

/**
 * Calcule de la distance (théorème de Pythagore :) )
 * @param {Point} autrePoint 
 */
Point.prototype.calculerDistance = function (autrePoint) {
    const dx = autrePoint.x - this.x;
    const dy = autrePoint.y - this.y;

    return Math.hypot(dx,dy); //Math.sqrt(dx*dx + dy*dy)
};

//export standard ES6 (ExcmaScript 2015) compatible avec les navigateurs modernes et vite
export default Point;