require('rootpath')();
const express = require('express');
const app = express();

// const Fs = require('@supercharge/filesystem');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// const fs = require("fs");

// app.use(errorHandler);

// start server
app.get('/common', async (req, res) => {
  // console.log('--------------',await Fs.homeDir());
  // console.log('*****************', path.join(__dirname, '../'));
  // console.log('*****************', path.join(__dirname, '../../'));
  // console.log('*****************', path.join(__dirname, '../../../'));
  res.send("Hellow common");
});

app.get('/scData', async (req, res) => {
  try {
    const sPath = req.query.sPath;
    const T = req.query.T;
    const data = await scData(sPath, T);
    return res.status(200).send(data);
  } catch (e) {
    return res.status(500).send({ status: 'ERROR', message: 'Error' });
  }
});

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

const port = process.env.PORT || 5000;
const server = app.listen(port, function () {
  console.log(`Server listening on port ${port}`);
});

async function scData(sPath, T) {
  return new Promise(async (res, rej) => {
    try {
      fetch(`https://lt-fn-cdn001.akamaized.net/${sPath}?T=${T}`, {
        "headers": {
          "accept": "*/*",
          "accept-language": "en-US,en;q=0.9",
          "cache-control": "no-cache",
          "pragma": "no-cache",
          "sec-ch-ua": "\"Chromium\";v=\"118\", \"Google Chrome\";v=\"118\", \"Not=A?Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "Referer": "https://bxawscf.skyexch.art/",
          "Origin": "https://bxawscf.skyexch.art",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
        },
        "mode": "cors",
        "body": null,
        "method": "GET",
        "credentials": "omit"
      }).then((res) => res.json())
        .then((data) => {
          return res(data);
        }).catch(err => {
          logtail.log('Error in fetch method while requesting scData: ', err);
          return rej({ message: 'Error' });
        })
    } catch (err) {
      logtail.log('Error while fetching scData: ', err);
      return rej({ message: 'Error' });
    }
  });
}
