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
            creditTotal += gpa.classes[i].credits;
            //gradePointTotal += gpa.classes[i].grade;
        }

    };
});