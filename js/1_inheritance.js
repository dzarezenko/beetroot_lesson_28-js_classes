class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance() {
    return Math.sqrt(this.x**2 + this.y**2);
  }

  setX(x) {
    this.x = x;
  }

  getX() {
    return this.x;
  }

  setY(y) {
    this.y = y;
  }

  getY() {
    return this.y;
  }

  getter(a) {
    this[a]
  }

  set xx(x) {
    this.x = x;
  }

  get xx() {
    return this.x.toFixed(2);
  }

  set yy(y) {
    this.y = y;
  }

  get yy() {
    return this.y.toFixed(2);
  }

}

class Point3D extends Point {

  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }

  distance() {
    return Math.sqrt(this.x**2 + this.y**2 + this.z**2);
  }

}

let point = new Point(1, 2);
console.log(point);
console.log("DISTANCE:", point.distance());
point.setX(2);
console.log(point);
console.log("DISTANCE:", point.distance());
console.log("-----------------------");
console.log(point.xx);
point.xx = 10;
console.log(point);
console.log("-----------------------");

let point3D = new Point3D(1, 2, 3);
console.log(point3D);
console.log("DISTANCE:", point3D.distance());
point3D.setX(10);
console.log(point3D);
console.log("DISTANCE:", point3D.distance());
