const express = require('express');
const path = require('path');
const dbJSON = require('./db/db.json');
const uuid = require('./helpers/uuid');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

//Connecting 'notes.html to server /notes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);

//by default 'index.html' will show up
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);


app.get('/api/notes', (req, res) => {
  // Sending the db json to client
  res.status(200).json(dbJSON);

  // Log our request to the terminal
  console.info(`${req.method} request receivd to show Notes`);
});





app.post('/api/notes', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a note`);
  // Destructuring assignment for the items in req.body
  const { title, text } = req.body;

  // If all the required properties are present
  if (title && text) {
    // Variable for the object we will save
    const newNote = {
      title,
      text,
      review_id: uuid(),
    };

    // Obtain existing reviews
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
      } else {
        // Convert string into JSON object
        const parsedNotes = JSON.parse(data);

        // Add a new review
        parsedNotes.push(newNote);

        // Write updated reviews back to the file
        fs.writeFile(
          './db/db.json',
          JSON.stringify(parsedNotes, null, 4),
          (writeErr) =>
            writeErr
              ? console.error(writeErr)
              : console.info('Successfully updated reviews!')
        );
      }
    });

    const response = {
      status: 'success',
      body: newNote,
    };

    console.log(response);
    res.status(201).json(response);
  } else {
    res.status(500).json('Error in posting review');
  }
});




    app.listen(PORT, () => {
      console.log(`App listening at http://localhost:${PORT} 🚀`)
    });
