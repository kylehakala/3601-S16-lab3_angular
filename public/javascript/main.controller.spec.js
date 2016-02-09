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
            scope.gpa.courseName = " ";
            scope.gpa.creditValue = 2;
            scope.gpa.gradeLetter = " ";
            scope.gpa.addCourse();
            expect(scope.gpa.classes).toEqual([{course: " ", credits: 2, grade: " "}]);
        });

        it("should be able to add an item to the list", function(){
            var initialLength = scope.gpa.data.length;
            scope.gpa.textField = "kittens";
            scope.gpa.addData();
            expect(scope.gpa.data.length > initialLength).toEqual(true);
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