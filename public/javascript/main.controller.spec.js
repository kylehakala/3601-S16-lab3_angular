'use strict';

//=== Testing mainCtrl =============================================
describe('Testing controller: mainCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('mainCtrl as mainControl', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing data functionality: ", function(){
        it("should contain some data by default", function(){
            expect(scope.mainControl.data.length > 0).toEqual(true);
        });

        it("should be able to remove an item from the list", function(){
           var initialLength = scope.mainControl.data.length;
           scope.mainControl.removeData(1);
           expect(scope.mainControl.data.length < initialLength).toEqual(true);
        });

        it("should be able to add an item to the list", function(){
            var initialLength = scope.mainControl.data.length;
            scope.mainControl.textField = "kittens";
            scope.mainControl.addData();
            expect(scope.mainControl.data.length > initialLength).toEqual(true);
        });
    });
});

//=== Testing navbarCtrl ===========================================
describe('Testing controller: navbarCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('navbarCtrl as navbar', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    it('should contain pages', function(){
      expect(scope.navbar.pages.length > 0).toEqual(true);
    });
});

//=== Testing Footer ===========================================
describe('Testing controller: footerCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var mainCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        mainCtrl = $controller('footerCtrl as footer', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    /*it('should contain pages', function(){
        expect(scope.footer.pages.length > 0).toEqual(true);
    });*/
});

//=== Testing GPA ===========================================
describe('Testing controller: gpaCtrl', function(){

    // load the controller's module
    beforeEach(module('mainApp'));

    var gpaCtrl, scope;

    // Initialize the controller and mock scope.
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        gpaCtrl = $controller('gpaCtrl as gpa', {
            $scope: scope
        });
    }));

    it('dummy test should pass', function(){
        expect(true).toEqual(true);
    });

    describe("testing addCourse functionality: ", function(){
        it("should contain no data by default", function(){
            expect(scope.gpa.classes.length).toEqual(0);
        });

        it("should be able to add a course to the array", function(){
            scope.gpa.courseName = "course";
            scope.gpa.creditValue = 2;
            scope.gpa.gradeLetter = "A";
            scope.gpa.addCourse();
            expect(scope.gpa.classes).toEqual([{course: "course", credits: 2, grade: "A"}]);
        });

        it("should be able to display number of courses added", function(){
            scope.gpa.courseName = "course";
            scope.gpa.creditValue = 2;
            scope.gpa.gradeLetter = "A";
            scope.gpa.addCourse();
            expect(scope.gpa.itemsInList()).toEqual(1);
        });

        it("should be able to remove a course from the list", function(){
            scope.gpa.courseName = "course";
            scope.gpa.creditValue = 2;
            scope.gpa.gradeLetter = "A";
            scope.gpa.addCourse();
            scope.gpa.removeData();
            expect(scope.gpa.classes.length).toEqual(0);
        });

        it("should be able to calculate GPA", function(){
            scope.gpa.courseName = "course";
            scope.gpa.creditValue = 2;
            scope.gpa.gradeLetter = "A";
            scope.gpa.addCourse();
            expect(scope.gpa.getGPA()).toEqual(4);
        });

        it("should be able to get GPA for multiple courses", function(){
            scope.gpa.courseName = "1";
            scope.gpa.creditValue = 4;
            scope.gpa.gradeLetter = "A";
            scope.gpa.addCourse();
            scope.gpa.courseName = "2";
            scope.gpa.creditValue = 4;
            scope.gpa.gradeLetter = "D";
            scope.gpa.addCourse();
            expect(scope.gpa.getGPA()).toEqual(2.5);
        });

        it("should be able to remove a course from the list", function(){
            scope.gpa.courseName = "course";
            scope.gpa.creditValue = 4;
            scope.gpa.gradeLetter = "D";
            scope.gpa.addCourse();
            expect(scope.gpa.colorChange(scope.gpa.getGPA())).toEqual("#ff4d4d");
        });

        it("should be able to change color based on GPA", function(){
            scope.gpa.courseName = "course";
            scope.gpa.creditValue = 4;
            scope.gpa.gradeLetter = "D";
            scope.gpa.addCourse();
            expect(scope.gpa.colorChange(scope.gpa.getGPA())).toEqual("#ff4d4d");
        });

        it("Should be able to convert letter grade to gradePoint number", function(){
            scope.gpa.courseName = "course";
            scope.gpa.creditValue = 4;
            scope.gpa.gradeLetter = "C";
            scope.gpa.addCourse();
            expect(scope.gpa.convertFromLetter(0)).toEqual(2.0);
        });


    });

});



/*describe("adding data: ", function(){
        it("some text", function(){
                expect(scope)
            }
        )
    }

)*/