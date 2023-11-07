import { prompt, Confirm } from 'inquirer';

class Student {
  private id: string;
  private name: string;
  private coursesEnrolled: string[];
  private balance: number;

  constructor(name: string) {
    this.id = generateStudentID();
    this.name = name;
    this.coursesEnrolled = [];
    this.balance = 0;
  }

  public enroll(course: string) {
    this.coursesEnrolled.push(course);
  }

  public payTuitionFees(amount: number) {
    this.balance -= amount;
  }

  public showStatus() {
    console.log('Student ID:', this.id);
    console.log('Name:', this.name);
    console.log('Courses enrolled:', this.coursesEnrolled);
    console.log('Balance:', this.balance);
  }
}

function generateStudentID(): string {
  return `${Math.floor(Math.random() * 100000)}`;
}

async function main() {
  const students: Student[] = [];

  // Add a new student
  const studentName = await prompt({
    type: 'input',
    name: 'name',
    message: 'Enter the student name:',
  });

  const student = new Student(studentName);
  students.push(student);

  // Enroll the student in a course
  const course = await prompt({
    type: 'input',
    name: 'course',
    message: 'Enter the course name:',
  });

  student.enroll(course);

  // Pay tuition fees
  const amount = await prompt({
    type: 'number',
    name: 'amount',
    message: 'Enter the amount to pay:',
  });

  student.payTuitionFees(amount);

  // Show the student status
  student.showStatus();

  // Ask the user to continue
  const continuePrompt = await Confirm({
    name: 'continue',
    message: 'Do you want to continue?',
  });

  if (continuePrompt) {
    await main();
  }
}

main();
