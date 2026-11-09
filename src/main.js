//je vais importer ce dont j'ai besoin

import Point from "./assets/point.js";
import Polygone from "./assets/polygone.js";
import Triangle from "./assets/triangle.js";

const p1 = new Point(2, 3);
const p2 = new Point(6, 8);
const p3 = new Point(10, 3);
console.log(p1);
console.log("Point 1 : "+p1);

console.log(p1.calculerDistance(p2));

const polygone = new Polygone([p1, p2, p3]);
console.log(polygone);
console.log("Périmètre du polygone : "+polygone.calculerPerimetre());

const triangle=new Triangle(p1, p2, p3);
console.log(triangle);
console.log("Périmètre du triangle : "+triangle.calculerPerimetre());