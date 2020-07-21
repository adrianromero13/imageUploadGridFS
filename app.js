const express = require('express');
const mongoose = require('mongoose');

// initialize app variable
const app = express();

// set up view engine
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
  