class Person {
    private name: string;
    private age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    public getName(): string {
      return this.name;
    }
  
    public getAge(): number {
      return this.age;
    }
  }
  
  class Student extends Person {
    private studentNumber: number;
  
    constructor(name: string, age: number, studentNumber: number) {
      super(name, age);
      this.studentNumber = studentNumber;
    }
  
    public getStudentNumber(): number {
      return this.studentNumber;
    }
  
    public study(): void {
      console.log(`${this.name} is studying.`);
    }
  }
  
  class Teacher extends Person {
    private subject: string;
  
    constructor(name: string, age: number, subject: string) {
      super(name, age);
      this.subject = subject;
    }
  
    getSubject(): string {
      return this.subject;
    }
  
    public teach(): void {
      console.log(`${this.name} is teaching ${this.subject}.`);
    }
  }
  
  const student = new Student('Alice', 18, 12345);
  const teacher = new Teacher('Bob', 40, 'Math');
  
  console.log(student.getName()); // Alice
  console.log(student.getAge()); // 18
  console.log(student.getStudentNumber()); // 12345
  student.study(); // Alice is studying.
  
  console.log(teacher.getName()); // Bob
  console.log(teacher.getAge()); // 40
  console.log(teacher.getSubject()); // Math
  teacher.teach(); // Bob is teaching Math.
  