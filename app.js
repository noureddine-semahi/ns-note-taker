const path = require("path");
var express = require("express");

var app = express();

var PORT = process.env.PORT || 3000;
 let noteCount = 0;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log('server is running and listening on http://localhost:' + PORT)
});