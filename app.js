const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const crypto = require('crypto');
const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');

// initialize app variable
const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(methodOverride('_method'));  // used to create delete request using form
app.set('view engine', 'ejs');

// set up routes
app.get('/', (req, res) => {
  res.render('index');
  
});

// set up PORT
const PORT = 5000;

app.listen(PORT, () => console.log(`server starte on PORT: ${PORT}`));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/girdfsuploads',
{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });
  