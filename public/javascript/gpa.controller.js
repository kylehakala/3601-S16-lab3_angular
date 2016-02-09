//====================== GPA CONTROLLER ============================
angular.module('stdComponents').controller('gpaCtrl', function(){
    var gpa = this;
    console.log("GPA controller loaded");

    //storage for course information

    gpa.courseName = "";
    gpa.creditValue = "";
    gpa.gradeLetter = "";


    gpa.classes = [
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

        for(var i = 0; i < gpa.classes.length ; i++) {
            var gradePointPerClass = 0;
            creditTotal += gpa.classes[i].credits;
            gradePointPerClass = gpa.convertFromLetter(i) * gpa.classes[i].credits;
            gradePointTotal += (gradePointPerClass);

        }



        var finalGPA = Math.round((gradePointTotal/creditTotal) * 100) / 100;
        gpa.colorCode = gpa.colorChange(finalGPA);
        return finalGPA;


    };

    gpa.convertFromLetter = function(i) {
        var gradePoint = 0;
        if (gpa.classes[i].grade === "A") {
            gradePoint = 4;
        } else if (gpa.classes[i].grade === "B") {
            gradePoint = 3;
        } else if (gpa.classes[i].grade === "C") {
            gradePoint = 2;
        } else if (gpa.classes[i].grade === "D") {
            gradePoint = 1;
        } else {
            gradePoint = 0;
        }
        //console.log("Letter was: " + gpa.classes[i].grade);
        //console.log("letterConvert: " + gradePoint);
        //console.log("-----");
        return gradePoint;
    };

    gpa.colorChange = function(gpa) {
        if (gpa < 2.0) {
            return "#ff4d4d";
        } else if (gpa >= 2.0 && gpa < 3.0) {
            return "#ffb84d";
        } else {
            return "#66ff66";
        };
    };

    gpa.colorCode = 0




});