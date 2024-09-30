function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
  }
  
  Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName
  }
  
  Student.prototype.addMarks = function(...marksToAdd) {
    if (this.marks === undefined) {
      return
    } else {
      this.marks.push(...marksToAdd)
    }
  }
  
  Student.prototype.getAverage = function() {
    if (this.marks === undefined || !this.marks.length) {
      return 0
    } else {
      return this.marks.reduce((sum, current) => sum + current, 0) / this.marks.length
    }
  }
  
  Student.prototype.exclude = function(reason) {
    this.excluded = reason
    delete this.subject
    delete this.marks
  }