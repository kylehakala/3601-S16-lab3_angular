//====================== GPA CONTROLLER ============================
angular.module('stdComponents').controller('gpaCtrl', function(){
    var gpa = this;
    console.log("GPA controller loaded");

    //storage for course information

    gpa.courseName = "";
    gpa.creditValue = "";
    gpa.gradeLetter = "";


    gpa.classes = [
        {course: "1201", credits: 4, grade: "A"}
    ];

    gpa.addCourse = function(){
        if(gpa.courseName.length >= 1 && gpa.creditValue >= 1 && gpa.gradeLetter != "") {
            gpa.classes.push({course: gpa.courseName, credits: gpa.creditValue, grade: gpa.gradeLetter});
            console.log("course was pushed");
            gpa.courseName = "";
            gpa.creditValue = "";
            gpa.gradeLetter = "";
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



    gpa.getGPA = function(){
        var creditTotal = 0;
        var gradePointTotal = 0;

        for(var i = 0; i < gpa.classes.length; i++) {
            var gradePointPerClass = 0;
            creditTotal += gpa.classes[i].credits;
            gradePointPerClass = gpa.convertFromLetter(gpa.classes[i].grade) * gpa.classes[i].credits;
            gradePointTotal += (gradePointPerClass);
        }
        return gradePointTotal/creditTotal;
    };

    gpa.convertFromLetter = function() {
        var gradePoint = 0
        if (gpa.classes.grade = "A") {
            gradePoint = 4;
        } else if (gpa.classes.grade = "B") {
            gradePoint = 3;
        } else if (gpa.classes.grade = "C") {
            gradePoint = 2;
        } else if (gpa.classes.grade = "D") {
            gradePoint = 1;
        } else {
            gradePoint = 0;
        }
        return gradePoint;
    };
});