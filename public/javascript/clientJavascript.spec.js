
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

});

/*
gpa.controller().classes = [
    {course: "1302", credits: 3, grade: "A"},
    {course: "1302", credits: 3, grade: "A"},
    {course: "1302", credits: 3, grade: "A"},
    {course: "1302", credits: 3, grade: "A"},
];


describe('the GPA calculator', function() {
    it('calculates GPA correctly for one class', function() {
        expect(gpa.getGPA().toBe('4.00'));
    });

    it('calculates GPA correctly for 3 classes', function() {
        expect(gpa.getGPA().toBe('3.067'));
    });

    it('calculates GPA correctly for an overachiever', function() {
        expect(gpa.getGPA().toBe('4.000'));
    });

    it('correctly insults user for not having any credits or points', function() {
        expect(function() {
            gpa.getGPA();
        }).toThrowError();
    });
});
*/