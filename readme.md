# Usage

## Database 
- You will find a folder in which there is exported database kindly import it into mysql workbench using Data import
- Go to config/db.js enter host:"your db host name" user:"your db username" password:"enter the password of the db"

#
## Steps
- After setting up the database 
- run `npm install`
- type `npm test` -> running the test cases
- type `npm start` -> running the application

#
### Fot testing in postman
- After `npm run`
- Select post request enter url http://localhost:3000/?source={`source language code`}&target={`target language code`}
- Before sending request send text in body as json
{
  "text":"`Your sourced language text which you want to translate`"
}
- for language code refer this https://developers.google.com/admin-sdk/directory/v1/languages


Go through the another .md file for ideas and explanations