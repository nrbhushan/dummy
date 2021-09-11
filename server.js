require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
const fs = require("fs");

// app.use(errorHandler);

// start server

(async () => {
	try {
	let file = fs.createWriteStream('./check.ts');
	file.close();
	}catch(e) {
		console.log(e);
	}
})();

const port = 80 || process.env.PORT;
const server = app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
