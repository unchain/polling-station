const { join } = require("path");
const polka = require("polka");
var bodyParser = require("body-parser");
const { PORT = 2015 } = process.env;
const { HOST = "127.0.0.1" } = process.env;
const dir = join(__dirname, "public");
const serve = require("serve-static")(dir);

polka()
  .use(bodyParser.json(), serve)

  .post("/vote/", (req, res) => {
    console.log(`~> Hello, ${req.body.name}`);

    res.end("vote complete!");
  })
  .listen(PORT, HOST, err => {
    if (err) throw err;
    console.log(`> Running on http://${HOST}:${PORT}`);
  });
