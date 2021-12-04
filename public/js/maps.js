const express = require("express");

// Initialize the app and create a port
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/:mysearch", function (req, res) {
  // We create an html file:

  var url = "https://maps.googleapis.com/maps/api/staticmap?center=";
  var add = req.params.mysearch;
  var parameter =
    "&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:url%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318&markers=color:red%7Clabel:C%7C40.718217,-73.998284&key=AIzaSyDcJ2w-Ccyga1ok-p59mdRLt8UVK1u2arE";
  url = url + add + parameter;
  console.log(url);
  res.send(url);
});

const hostname = "localhost";
const port = 3000;

// Start the server on the port
app.listen(PORT, () => console.log('Listening on PORT: ${PORT}')); 