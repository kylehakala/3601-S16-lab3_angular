//====================== GPA CONTROLLER ============================
angular.module('stdComponents').controller('gpaCtrl', function(){
    var gpa = this;
    console.log("GPA controller loaded");

    //storage for course information

    mainControl.textField = "Course:";
    mainControl.textField = "Credits:";
    mainControl.textField = "Grade: (A, B, C, D, F)";

    mainControl.courses = [
        {text: "1201"},
        {text: "1301"},
        {text: "1302"},
        {text: "1001"},
        {text: "1251"},
        {text: "3601"}
    ];

    mainControl.credits = [
        {number: 4},
        {number: 4},
        {number: 4},
        {number: 4},
        {number: 4},
        {number: 4}
    ];

    mainControl.grades = [
        {text: "A"},
        {text: "B"},
        {text: "B"},
        {text: "A"},
        {text: "C"},
        {text: "A"}
    ];

    mainControl.addCourse = function(){
        if(mainControl.textField.length >= 1) {
            mainControl.courses.push({text: mainControl.textField});
            mainControl.textField = "";
        }
    };
});