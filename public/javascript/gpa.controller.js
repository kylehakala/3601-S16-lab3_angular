//====================== GPA CONTROLLER ============================
angular.module('stdComponents').controller('gpaCtrl', function(){
    var gpa = this;
    console.log("GPA controller loaded");

    //storage for course information

    gpa.courseName = "Course:";
    gpa.creditValue = "Credits:";
    gpa.gradeLetter = "Grade: (A, B, C, D, F)";


    gpa.classes = [
        {course: "1201", credits: 4, grade: "A"}
    ];

    gpa.addCourse = function(){
        if(gpa.classes.length >= 1) {
            gpa.classes.push({course: gpa.courseName, credits: gpa.creditValue, grade: gpa.gradeLetter});
            console.log("course was pushed");
            gpa.courseName = "Course:";
            gpa.creditValue = "Credits:";
            gpa.gradeLetter = "Grade: (A, B, C, D, F)";
        }
    };

    gpa.removeData = function(index){
        gpa.classes.splice(index, 1);
    };

    gpa.cat = function(str1, str2){
        return str1 + str2;
    };

    gpa.itemsInList = function(){
        return gpa.classes.length;
    };
});