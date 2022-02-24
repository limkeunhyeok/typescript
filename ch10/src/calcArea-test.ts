import { calcArea } from "./calcArea";
import { IRectangle, ICircle, ISquare } from "./IShape";

const squre: ISquare = { tag: "square", size: 10 };
const rectangle: IRectangle = { tag: "rectangle", width: 4, height: 5 };
const circle: ICircle = { tag: "circle", radius: 10 };

console.log(
  calcArea(squre), calcArea(rectangle), calcArea(circle)
)