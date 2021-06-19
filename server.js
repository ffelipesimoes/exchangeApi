const app = require('./src/config/custom-express');

var port = process.env.PORT || 91;

app.listen((port), () => {
    console.log("running on port " + port);
});