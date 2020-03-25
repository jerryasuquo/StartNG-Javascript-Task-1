var name = "Jeremiah Asuquo";
var courses = ["HTML", "CSS", "JavaScript"];
var numberOfCourses = 0;

console.log(name, "\n", courses);

// looping through the courses array
for (let i = 1; i <= courses.length; i++) {
  numberOfCourses = courses.length;
  var remainder = numberOfCourses % 2;

  // looping through numbers between 1 - 200
  for (let j = 1; j <= 200; j++) {
    var jRem = j % 2;
    if (remainder !== 0 && jRem !== 0) console.log(j);
  }
}