// @flow
// (nominal vs. structural subtyping)

export class Animal {
  name: string;
  constructor(name: string) { this.name = name; }
  who() { return this.name; }
}
// class Cat extends Animal { }
// class Dog extends Animal { }
//
// const carla = new Cat("carla");
// (carla: { name: string });
// (carla: Dog);
