const express = require('express');
const sendRequest = require('request');
var QRDetails = require("./src/qr_model.js");
const { validate } = require("./src/validator.js");
var options = require("./config/googleChartOptions.json");

var app = express();
app.use(express.json());
PORT = process.env.PORT || 5000;

app.get('/generate', function (request, response) {
    let data = new QRDetails(request.query);
    try {
        if (validate(data)) {
            options["qs"] = data; //It will insert the data need to send to the google charts api
            sendRequest(options, function (error, res, body) {
                if (!error) {
                    console.log('Success!');
                    response.set('Content-Type', 'image/png');
                    response.send(body);
                } else {
                    console.log("Error occured while processing...");
                    response.send(500);
                }
            });
        } else { response.send(400); }
    } catch (error) { response.send(500); }
});

// http://localhost:5000/generate?height=500&width=500&data=POWER!
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:5000`)
})