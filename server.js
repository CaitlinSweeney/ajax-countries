require('colors');

var express    = require('express'),
    bodyParser = require('body-parser'),
    logger     = require('morgan'),
    mongoose   = require('mongoose'),
    Routes     = require('./routes'),
    path       = require('path'),
    port       = process.env.PORT || 8080,
    app        = express();

app.use(express.static(path.join(__dirname,'public')));

mongoose.connect('mongodb://localhost/ajax-countries', (error) => {
    if(error) {
        console.error('Oh no, could not start mongoose!', error);
        process.exit(1); // exits a node application, anything other than 0 is considered an error
    } else {
        console.log('Mongoose started successfully.'.cyan);
    }
});

app.post('*', bodyParser.json(), bodyParser.urlencoded({ extended: true }));

Routes(app);

app.listen(port, (error)=> {
  if(error) {
    console.error('The server could not start', error);
    process.exit(1);
  } else {
    console.log(`Server up and running on port${port}`.yellow);
  }
})
