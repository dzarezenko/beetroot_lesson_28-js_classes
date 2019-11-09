class Point {

  c = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

}

console.log(Point);
console.log(typeof Point);

let point1 = new Point(1, 2);
console.log(point1);
console.log(typeof point1);

let point2 = new Point(3, 4);
console.log(point2);
console.log(typeof point2);
console.log(`X: ${point2.x}, Y: ${point2.y}`)

let points = [];
for (let i = 0; i < 10; i++) {
  let point = new Point(Math.random(), Math.random());
  point.c = Math.random();

  points.push(point);
}
console.log(points);
