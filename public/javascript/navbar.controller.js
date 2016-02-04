//====================== NAVBAR CONTROLLER ============================
angular.module('stdComponents').controller('navbarCtrl', function(){
    var navbar = this;
    console.log("Navbar controller loaded");

    navbar.pages = [
        {text: "Home", link: '/'},
        {text: "About", link: '/about'},
        {text: "Kittens", link: '/kittens'},
        {text: "GPA", link: '/GPA'},
        {text: "404 Page", link: '/wefwrtbertbeb'}
    ];
});
