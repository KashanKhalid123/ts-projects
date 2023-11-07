class Animal {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    public makeSound(): void {
      console.log('This animal makes no sound.');
    }
  }
  
  class Dog extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
    }
  
    public makeSound(): void {
      console.log('Woof!');
    }
  }
  
  class Cat extends Animal {
    constructor(name: string, age: number) {
      super(name, age);
    }
  
    public makeSound(): void {
      console.log('Meow!');
    }
  }
  
  const dog = new Dog('Rex', 5);
  const cat = new Cat('Mittens', 3);
  
  dog.makeSound(); // Woof!
  cat.makeSound(); // Meow!
  