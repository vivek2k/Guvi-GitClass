class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  

    displayDetails() {
      console.log("Name : ", this.name);
      console.log("Age : ", this.age);
      console.log("Address : ", this.address);

    }
  }
  

  const person1 = new Person('Tommy Boy', 28, 'Arley Hall, Northwich, Cheshire');
  person1.displayDetails();