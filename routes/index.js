var express = require('express');
var router = express.Router();
const mysql=require('mysql');
let connection=require('../config/db')
const {Translate} = require('@google-cloud/translate').v2;
let cred={
  "type": "service_account",
  "project_id": "even-crawler-322403",
  "private_key_id": "c622de38665617d55f8ada7d2d69e6340ea2bb10",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCi8o5eYS6ry8F+\n0yMZ0NIeJ1aWZHo9NvfMJg/SAfjpKQNGLIG7B5qkPylJQaaBuyPUwpm37Mpxh7O6\ntFskIgU2tHhYRZGgDEg3F0d+aB991xsMAQHU9YGrDHx8P0bg46UOtgLVop/LdfRn\nso+SxZstC+Y1tI9yq3AhZC/mCuYyF0acAJZbNhaQutgxcCunmDm5KQWxm/TkgVP9\ndy8NzJCM8w4v0wGqH4KYhztU4NZz/NuYEfXhArCtDPd/HIT8n/+c2mLNhoI7nnqz\ntg8RgC8/H8TUwwJ9xzkOHyw9SWAZRNzCgM92A3XJbdeFWYnCfknxYaMvp0tp0MwK\neivD2/HtAgMBAAECggEAD3M8OIqyaCurryDJ5Tq9kYpdVWk1hfReTocVXO4+8ayn\n2NGDg35XFVe/zGhjJ03dOeExvhS/pUAetIdBVQ28vNEj0ArYofpIJqEYcE3jHoV0\n1RCLYevdXaCTdRxy1gP/tINhhWwkBqCqieKOZnZCHmVQcKssJs1GloPvXrqN1RXl\nBSa0XL0XjLfmkJqi9/apTAG0ousgZFvrtj4X36H42kvHW+WblZUIxyGPzBOYoXa2\n27pDsfXaXlWZFR0XnhUqK+6NR7cwXijZsXoRvsy+EgFt2FgOifl0Zglr/9qOcr3W\n/C1MVkDbCtnfRAxVQN2tmGUwghZNpv5SFy/rfEkuqQKBgQDe0hysCdOznnl9rP7r\n1QRmhyZmjcLkFZQIfjtq3uf1GuEeWIeUeDTVO+mcglDtJ9Wlr07mEboR00DesXiQ\nYqxIjrPphItK3rMtIo+Z2B0czvC5WKVzPtdPQKdgt6JOijGGS5G6T9U0G4UWr8Dn\nIXLg5VToOEXKU+t4VeHReV0fTwKBgQC7NhXy6O4ywNdXXZXEiRjCB549EJPM2p00\nVl+vg2+rVjHWehEHt91lltrNJKbz4fk4nCvPHuU9NJj0MNYaiXDcqhfsIdMWL04E\njUmXDXNZrcDOmsUyOJfRb0xfHuI3KOT1+tYDc+l8cFKgIIJq4YVq8GpLGrHZhh5M\no8lEcq0sAwKBgGm2u92vZ94/IJrMmcFftg/CrShYt48o4avJ3/zLNremAgo4rFJ3\nWXGVVDdp6GUr0gQikUc8P9A3Lv64ql+uQNjHw3nV5ZQm5lFSpVizHNTPJYx6Dz0H\nInW6Ue7kEMA8dlSlw8TmHVv0docV6Wp/BxbGFyt5jzr3566W6GVOtCynAoGAZ94t\nNVWI+v3FPEK/GojaBKUHZWfyKOFOAUC+2/k3lr8+7XlSQ47+tiOJh/IC8yL4DDGR\nmNvSYi/xgOIrmBOTW8q/dRKbNB7Q0XO2Valvy1y8saRrLl751IhEvi27YtE8n0Ep\nRkckTxdesFr5IOW5CUkUIFFSRZbE7s6cl25sqBMCgYEAwWoSYskH+/czspH0R1yi\nONTwd3pT4r55ZwkbYMymxxhhdj4VTaShMQFjYibBKW9lTdRwYlTDUkncyQUnItvE\n+kJw+lDKoEaD/eM1/M99xoN51QeOU5ydp1oqlqUCGJfaGPtRcJTnXVDqkzCOFpAg\nEh3c9AU6OMB249hGLx6YsNI=\n-----END PRIVATE KEY-----\n",
  "client_email": "translation-api@even-crawler-322403.iam.gserviceaccount.com",
  "client_id": "103285350770844022953",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/translation-api%40even-crawler-322403.iam.gserviceaccount.com"
}

const translate = new Translate({
  credentials: cred,
  projectId: cred.project_id
});

const translateText = async (text, targetLanguage) => {

  try {
      let [response] = await translate.translate(text, targetLanguage);
      return response;
  } catch (error) {
     return res.status(502).json({message:"Translater is down"})
  }
};
let insertingIntoDatabase= async (text,source,target,translatedText)=>{
  var sql = `INSERT INTO trans_table 
  (
    text, target, target_trans, source
  )
  VALUES
  (
      ?, ?, ?, ?
  )`;
connection.query(sql, [text,target,translatedText,source], function (err, data) {
if (err) {
return res.status(505).json({message:"unable to inserty into databse"})
} else {
return res.status(200).json({message:"cool data inserted"})
}
});
}
/* GET home page. */
router.get('/', async function (req, res, next) {
 if(req.body){
  try{
    let text=req.body.text;
    let source=req.query.source;
    let target=req.query.target;
    connection.query(`SELECT target_trans FROM trans_table WHERE text=${text} AND target=${target} AND source=${source}`, async function (error, results, fields) {
      if (error) throw error;
      if(results.length==0){
        let translateText=await translateText(text,target)
        await insertingIntoDatabase(text,source,target,translateText)
        
      }else{
        res.status(200).res.json({
          message:"Succefully translated",
          Translation:results[0]
        })
      }
    });

  }catch(err){
  return  res.status(500).json({
      message:"Internal Server Error"
    })
  }
 }else{
  return res.status(404).json({
     message:"Please provide text or the desired language conversion"
   })
 }
});

module.exports = router;