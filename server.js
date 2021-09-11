require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// const fs = require("fs");

// app.use(errorHandler);

// start server

(async () => {
// 	try {
// 	console.log('Hi inside try');
// 	let file = fs.createWriteStream('D:\\home\\check.ts');
// 	file.write("Hi file write");
// 	console.log(file);
// 	file.close();
// 	}catch(e) {
// 		console.log(e);
// 	}
	console.log('Hi auto init method');
// try {
//   const data = fs.writeFileSync('%HOME%/check.txt', 'Hi All I hope ');
// 	console.log('sucessfull');
//   //file written successfully
// } catch (err) {
//   console.error(err)
// }
})();

const port = 80 || process.env.PORT;
const server = app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});
