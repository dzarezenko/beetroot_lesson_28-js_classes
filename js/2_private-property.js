class SomeClass {

  constructor(_prop) {
    this.prop = _prop;
  }

  get prop_() {
    return this.prop;
  }

}

let obj = new SomeClass(123);
console.log(obj);

obj.prop = 456;
console.log(obj);
