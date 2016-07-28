'use strict';

let person = {
  firstname: 'Roeland',
  name: 'De Smedt',
  email: 'roeland.desmedt@c4j.be',
  company: 'Bewire',
  function: 'NodeJs Consultant',
  linkedin: 'https://www.linkedin.com/in/roelanddesmedt',
  github: 'https://github.com/RoelandDS',
  twitter: 'https://twitter.com/Smeedten',
  verified: false
};

validatePerson (person, function (err, person){
  if (err) console.log(err, person);
  else {
    console.log(person);
  }
});

function validatePerson (person, callback){
  for( let key in person){
    if (key === 'email') {
      if (person[key].indexOf('@') < 0) {
        return callback('Invalid person record', person)
      }
    } else {
      if (person[key] === null){
        return callback('Invalid person record', person)
      }
    }
  }
  person.verified = true;
  return callback(null, person);
}