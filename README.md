# angular-demo Project

Package structure is basedon the <a href='https://github.com/angular/angular-seed' target='_blank'>angular-seed</a> project.

## Getting Started

Install <a href='http://nodejs.org/' target='_blank'>nodejs</a>

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

Project is configured `npm` to automatically run `bower`, but first we have to make sure bower is available at the command line.

```
npm install -g grunt-cli bower
```
And then  

```
npm install
```
(On Mac/Linux probably have to use sudo)

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework files

If you have issues woth `bower install` you may want to change the default git protocol:  
`git config --global url."https://".insteadOf git://`

### Run the Application

Project is configured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

Now browse to the app at `http://localhost:8080/app/index.html`.

# Project Organization #
The J2EE developer in me wanted to have a **controller** folder and a **view** folder. Seems like most Angular projects put the HTML and the controller.js in the same folder, which simplifies the tree but kind of blurs the lines between the VC in MVC. No matter. So I put the controllers and views under the **view** directory. 

This still seems strange to me, I now have paths like **view/home**, **view/404**, etc. I can see the value in keeping the .js and .html together. Still strikes me as a convention for comand line editing as opposed to an IDE that let's you expand the two related folders.