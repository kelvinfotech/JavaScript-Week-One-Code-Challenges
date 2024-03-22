// This prompts the user to enter student marks between 0 and 100 and store the input in the variable 'marks'.
let marks = parseFloat(prompt("Enter student marks (between 0 and 100):"));

// This checks if the input is a valid number that falls between 0 and 100.
if (!isNaN(marks) && marks >= 0 && marks <= 100) {
    let grade;// This declares a variable to store the grade.

    // This determines the grade based on the marks of the student.
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks <= 59) {
        grade = 'C';
    } else if (marks >= 40 && marks <= 49) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // This will show the calculated grade.
    console.log(`Grade: ${grade}`);
} else {

    // This will show an error message if the input is not valid.
    console.log("Invalid input. Marks should be between 0 and 100.");
}
