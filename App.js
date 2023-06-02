    let studentFirstName = "Brandon";
    let studentLastName = "N";
    let grade1 = 53;
    let grade2 = 96;
    let grade3 = 65;
    let grade4 = 74;
    let passingGrade = 80;
    let result;
    let average = (grade1 + grade2 + grade3 + grade4)/4;
    studentLastName = 'Newman';
    console.log(studentFirstName + " " + studentLastName + " has an average grade of " + average);
    if (average >= passingGrade) {
       result = "passed";}
     else {result = "not passed";}
    console.log(studentFirstName + " " + studentLastName + " has " + result);