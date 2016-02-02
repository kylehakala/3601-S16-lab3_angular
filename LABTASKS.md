#Lab Tasks

After you have cloned the project and set it up as specified in the Readme, complete the following tasks, answering any
questions by editing this file. 

## Part #1: exploring the project.

- Try adding new pets on the index page through the form. Try deleting entries. Observe the results. 

> Protip: You'll need to start up the server before you can play with the website.

- Click links on the navigation bar. See what happens. Note that when you move away from the page with pets, your changes to the list of pets are lost. This is because we are not storing the array in a database (this will be a part of the next lab). 
- Observe the HTML element's formatting (it's done via bootstrap). As you are working on the questions below, experiment with the project to get a better sense for what each element is. 

##### List all the files at the top level of your project (i.e. not in public) and briefly state the purpose of each one, as you understand it. You might want to postpone describing some files until you work with the project a bit more. 
> .gitignore: tells github to ignore the files in these directories to avoid uploading things like repositories.
> .travis.yml: intiates travis ci
> app.js contains routes for sending files and managing the server. Also holds express code.
> bowser.json contains user information and dependency information for project
> Gruntfile.js contains nodemon and karma information
> karma.conf.js denotes which files are included in testing or possibly excluded.
> LABTASKS.md ...directions
> package.json information on dependencies
> README.md.... yeah
> /coverage/ ... contains files for testing coverage and displaying the results html page.

##### List the folders in the public folder and describe the purpose for each.
> assets/ contains media files
> css/ contains css stylesheets for styling the website
> javascript/ stores js files for site functionality
> views/ static html files with site content

##### What are the names of the Angular controllers in this web application? What does each of them do?
> main.controller.js and navbar.controller.js are located in the public/javascript dir.
> main.controller manages the petList functions, and navbar.controller manages the navbar contents in one place

##### Open the index.html view. What controller(s) is it using?
> mainCtrl is the one being used

##### Where is the navigation bar included in the source code for index.html?
> it's included as the first div in the body.

##### app.js within public/javascript is where your Angular modules are located at. What modules does the project currently have?
> mainApp and stdControllers

##### Notice, the code controlling the Node.js server is in a file also called app.js. There is no particular reason for this other than a generator we will use later on follows the same convention. Explain the difference between the purpose of the files (think client vs server).
> The app.js file inside /javascript lists the modules. The app.js file in the root lists routing and server info.

##### Add a pet to the array, data (in the appropriate controller). See the change on the web page (you need to reload, but not restart).
> Done

##### How are new items added and deleted through the web page? (i.e. - What functions from the main controller are used in index.html, and what Angular directives allow them to interact with the view?)
> mainControl.addData(), and removeData($index). ng-click, ng-model, ng-repeat, ng-submit

##### Open navbar.html view. What is its purpose? How would you go about adding links to the navigation bar?
> navbar.html allows you to add new navbar links to all of the other html pages in a single place, rather than updating the code on each one separately.

##### Find two instances of use of bootstrap (see above) in either navbar view or index view or both; explain what is formatted.
> nav nav-pills is used to format the navBar links into pill shaped buttons, and glyphicon glyphicon-trash floatRight adds the trash can to the list of items.

>Protip: Bootstrap is awesome. Start using it. Seriously. This allows you to do fancy things with styling (CSS) with very little effort. Think back to lab 1. http://getbootstrap.com/components/ <- Regular Bootstrap. https://angular-ui.github.io/bootstrap/ <- Angular Bootstrap. These offer separate functionality and both can be used simultaneously.

##### Stop the server by pressing Ctrl-C in the terminal, type "grunt test" to run tests. Where are the tests located?
> The tests are located in /public/javascript/ as .spec.js files

## Part #2: modifying the project.

- Set up Travis CI and add the build status icon to your project's README.
  - This should have been done as part of the setup.
> Done.

- Currently clicking on "kittens" returns the "page under construction" message. Using the view about.html as a sample, add a page that has a navigation bar. Add an image of your choice to the page (be aware of copyright rules) and a div that describes the image.
> Done.

- Explore bootstrap by changing formatting of the page (for instance, position of the image and text). It doesn't have to look "nice", just different from what it currently is.
> Done.

## Part #3: components, controllers, and modules, oh my!

>Protip: You can blame Jacob for the cheesy part name.

- Your first task here is to create a new Angular module that acts as a container for Angular component controllers. To do this, look at javascript/app.js. Similar to `stdControllers`, create a module named `stdComponents`, and inject that into the `mainApp` module.
- Now that we have an Angular module for containing Angular controllers of components, we want to add the controller for our Angular component to the new module. As such, go to `navbar.controller.js` and change the module it is a part of to the new `stdComponents` module.
- Boom! You're done making your own module. To make sure Angular is still working, serve the application (using Grunt), and make sure you can still use the navbar on the index.html and about.html pages.

> Done.

- Now, we are going to go a bit more in depth into this. Using navbar as an example, we want you to make another component. This component will be a `footer` that you will add to your index.html and about.html pages.
- To do this, you need to create: `footer.controller.js`, `footer.html`.

> Done.

>Protip: Make sure these are added to Git before you commit!

- You need to modify: `index.html`, `about.html`.
- Some general advice:
  - Add the footer controller to the newly created `stdComponents` Angular module.
  - Make sure to include the javascript for the Angular controller in the web pages the components will be a part of. DO NOT put the script tag to include this into `footer.html`.
  - Put the footer at the bottom of the pages. Please.
  - If you get confused, look at the respective files that navbar uses. You should be able to mirror this _very_ closely after those files.
  - We don't really care what the content of your footer is. It should definitely consist of a footer element.

>Protip: From w3schools... A footer element typically contains: authorship information, copyright information, contact information, sitemap, back to top links, related documents.


## Part #4: adding the GPA calculator, redux.
- Your goal is to add a page with a form that allows a student to add their courses (course name, number of credits, and letter grade) and displays their GPA. The GPA changes as courses are added or removed. As before, letter grades are A, B, C, D, and F only. 
- The controller for the GPA needs to be added to main.controller.js. Think of what needs to be in its scope. 
- Add the necessary view, include the navbar into it, and then add the GPA calculator. Add one feature at a time, make sure everything is working as it should. 
- As before, use TDD for all the helper functions (you may reuse the tests from the previous lab). Now they will all be located in public (client-side). No need to modify karma files since it's already testing client-side javascript. 
- Use different color for displaying the GPA, depending on whether it is below 2.0, between 2.0 and 3.0, and 3.0 and above. Use your own CSS or bootstrap. 
- Perform simple data validation (add the corresponding function to the controller) so that invalid entries (invalid grades or wrong number of credits) are not added to the model. An error message needs to be displayed to the user). 

##### When you're done with the lab, take a look at your test coverage report and make a note here about what pieces of code are covered well, what isn't, and why this is the case.


