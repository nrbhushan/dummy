require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// app.use(errorHandler);

// start server

(async () => {
	let file = fs.createWriteStream('D:\\home\\site\\wwwroot\\check.ts');
	file.close();
})();

const port = 80 || process.env.PORT;
const server = app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
