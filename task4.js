/*
Create object "utils". It should contain:
- function to generate random number
- function to generate random alphanumeric string
- simple logger: has to contain 2 arguments - level (default value is "INFO"), message
*/

const utils = {
  getRundomNumer(min, max){
    var number = Math.random() * (max - min) + min;
    return number;
  },
  
 getRandomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;}
  
    logger.log(Level.INFO, “Display message”);

  
};

module.exports = {
  utils,
};