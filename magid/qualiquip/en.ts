interface Student {
  name: string;
}

class MySchool {
  private students: Student[];

  constructor() {
    this.students = [];
  }

  addStudent(name: string) {
    this.students.push({ name });
  }

  getStudents(): string[] {
    return this.students.map((student) => student.name);
  }
}

const mySchool = new MySchool();
mySchool.addStudent("Neil Young");
mySchool.addStudent("Led Zep");
console.log(mySchool.getStudents()); // Output: ["Neil Young", "Led Zep"]
