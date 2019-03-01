export class Person {

  id: number;
  name: string;
  firstname: string;
  path: string;
  age: number;
  cin: number;


  constructor(id: number, name: string, firstname: string, path: string, age: number, cin: number) {
    this.id = id;
    this.name = name;
    this.firstname = firstname;
    this.path = path;
    this.age = age;
    this.cin = cin;
  }
}
