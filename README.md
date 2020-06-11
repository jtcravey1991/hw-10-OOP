# hw-10-OOP
Homework Week 10

## Description

This week's homework was to design a Node.js application which could take user input of employees for a company, specifically engineers, interns and managers, and take in information about them, create objects using classes and subclasses, then use this information to write to an html file, creating a directory of the employees. The main technologies used in this homework was Node.js, and the node packages fs, inquirer, and path. A major theme for the homework was classes and subclasses, which are created in their own files and exported useing module.exports and require.

## Usage

To use this application, one must navigate to the root directory in the terminal, then call node app.js. the application will begin by asking which type of employee the user would like to add. Then, questions based on that employee type are asked. When the user finished input of an employee, the application asks if he'd like to enter another employee. When the user is finished creating employees, the output file is written to the output folder. If the output folder does not exist, one is created. Here is a gif of the application running:

![a gif of the application being run, taking user input](/images/runningapp.gif)

And here is what the output from that run looks like, when opened with a browser:

![a browser opening the HTML output from the application](/images/output.JPG)

## Test

Another huge part of this weeks homework was utilizing jest and test driven development. We were given a set of tests for each of the classes we created, and could work on each one, one at a time, until our class was complete. We call this using the node test command. Here is what the test results look like when the classes are created properly:

![a picture of tests being passed](/images/tests.JPG)

## Code

The new code we learned this week mostly had to do with subclasses and classes. Some important keywords include:
class: declares a new class
extends: declares the class a subclass of an existing class
constructor: used to accept arguments when the class is called
super: allows access to a subclasses class information, in this instance specifically to pass the super classes constructor information

Here is a subclass I created. Take note of each of the keywords from above being used:

![some code detailing the declaration of a class](/images/class.JPG)