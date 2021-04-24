// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();
const port = 4000;
// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});


app.get("/api/:date",function(req,res){
  var paraDate = req.params.date;
  if(!isNaN(paraDate)){
    let date = new Date(parseInt(paraDate));
    res.json({unix: date.getTime() ,utc:date.toUTCString()});
  }else {
    let date = new Date(paraDate);
    res.json({unix: date.getTime() ,utc:date.toUTCString()});
  }
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
