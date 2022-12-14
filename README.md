# Express.js Note Taker--PauloCondori
Set up the routes for the noter website

## Description
- I connected the routes so that the db.json could be displayed on the front end

### What was your motivation?
New material covered back-end it was new material for me and I was excited about it

### Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
Back-end is not an easy concept, So all the practice I can get will help me better my knowlegde of it=

### What problem does it solve?
Fixing the routes for the note page and its display function

### What did you learn?
The smallest error can cause the web to not display or function.
You must be patient with back-end

## Table of Contents 

-[Installation](#installation)
-[Usage/Instructions](#Usage/Instructions)
-[Contributing](#Contributing)
-[Test](#Test)
-[Questions](#Questions)

## Installation
Run node server.js and test it out

## Usage/Instructions

## Example
![ReadMe Example](./Assets/11-express-homework-demo-01.png)
![ReadMe Example](./Assets/11-express-homework-demo-02.png)


## Contributing
- Paulo Sergio Condori Pinedo


#Questions 
If you have any questions about the repo, open an issue or contact me directly at paulocondori1@gmail.com. You can find more of my work at pcondori1996)

π π π π π π π π π π π π π π π π π π π π`
};

## INSTRUCTIONS FOR ASSIGNMENT

Your assignment is to modify starter code to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The applicationβs front end has already been created. It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.


## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```


## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the noteβs text in the right-hand column
WHEN I enter a new note title and the noteβs text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the noteβs text in the right-hand column
```



## Getting Started

On the back end, the application should include a `db.json` file that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).


## Bonus

You havenβt learned how to handle DELETE requests, but this application offers that functionality on the front end. As a bonus, try to add the DELETE route to the application using the following guideline:

* `DELETE /api/notes/:id` should receive a query parameter that contains the id of a note to delete. To delete a note, you'll need to read all notes from the `db.json` file, remove the note with the given `id` property, and then rewrite the notes to the `db.json` file.



### Technical Acceptance Criteria: 40%

* Satisfies all of the preceding acceptance criteria plus the following:

  * Application front end must connect to an Express.js back end.

  * Application back end must store notes that have a unique id in a JSON file.

  * Application must be deployed to Heroku.


### Deployment: 36%

* Application deployed at live URL.

* Application loads with no errors.

* Application GitHub URL submitted.

* GitHub repository contains application code.


### Application Quality: 11%

* Application console is free of errors.


### Repository Quality: 13%

* Repository has a unique name.

* Repository follows best practices for file structure and naming conventions.

* Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.

* Repository contains multiple descriptive commit messages.

* Repository contains quality README file with description, screenshot, and link to deployed application.


### Bonus: +10 Points

* Application allows users to delete notes.


## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository, with a unique name and a README describing the project.

- - -
Β© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
