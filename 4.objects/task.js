function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;   
}
   let student1 = new Student("Василиса", "женский", 19);
   let student2 = new Student("Артём", "мужской", 25); 


Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    if(this.marks === undefined){
        this.marks = (marks);   
    } else {
        this.marks = this.marks.concat(marks);
    }
}

Student.prototype.getAverage = function () {
    if(this.marks === undefined){
        return 0;
    } else {
        return this.marks.reduce((acc, item) => acc + item, 0) / this.marks.length;
    }
}

Student.prototype.exclude = function (reason) {
    this.excluded = reason;
    delete this.subject;
    delete this.marks;
}
