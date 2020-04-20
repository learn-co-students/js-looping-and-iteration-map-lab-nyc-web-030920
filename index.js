// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(person) { return person.toLowerCase(); });
}

// Write lowerCaseDrivers - this function takes an array of drivers, and returns an array of the drivers names in lowercase. Write nameToAttributes - this function takes an array of drivers with their first and last name separated by a space, and returns an array of JavaScript objects with firstName and lastName attributes.

function nameToAttributes(drivers) {
  return drivers.map(function(person) { 
    let personArray = person.split(" ");
    let personObject = {};
    personObject['firstName'] = personArray[0];
    personObject['lastName'] = personArray[1];
    return personObject;
  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(person) {
    return `${person['name']} is from ${person['hometown']}`;
  });
}




// Write attributesToPhrase - this function takes an array of drivers as JavaScript objects and returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript object in the array. Note that between the < and > we are looking for the value stored in the name and hometown object attributes, not the strings "DRIVER" or "HOMETOWN".

// Conclusion