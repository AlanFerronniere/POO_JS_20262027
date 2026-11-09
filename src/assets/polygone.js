import Point from "./point.js"

/**
 * Constructeur de Polygone
 * représente un polygone dans un repère à 2 dimensions
 * @param {Point[]} points - tableau de points qui définissent le polygone (au moins 3 points)
 */
function Polygone(points){
    this.points = points.slice(); //crée une copie du tableau de points reçu
}

/**
 * Calcule le périmètre du polygone
 * @returns {number} - le périmètre du polygone
 */
Polygone.prototype.calculerPerimetre = function(){
    let perimetre = 0;
    //du premier à l'avant dernier point, on calcule la distance entre le point courant et le point suivant
    for(let i = 0; i < this.points.length - 1; i++){
        perimetre += this.points[i].calculerDistance(this.points[(i + 1)]);
    }
    //on ferme le polygone en calculant la distance entre le dernier point et le premier
    //Oui Gabin, j'aurais pu faire ça dans la boucle for avec un modulo
    //mais je préfère le faire à part pour que ce soit plus clair
    perimetre += this.points[this.points.length - 1].calculerDistance(this.points[0]);

    return perimetre;
};

export default Polygone;

